import React, { Component } from 'react'
import Credit from './Credit'
import Debt from './Debt'
import Expense from '../Expense/Expense'
import Settle from '../Settle/Settle'
import './Dashboard.css'
import { dataStore, transaction } from '../Store/Store'
import { connect } from "react-redux";
import { updateUser } from '../../redux/actions';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // user: 'aswin',
            debt: [],
            credit: [],
            lent: 0,
            owe: 0,
            popExpense: false,
            popSettle: false,
            allSettle: false,
            lastTransaction: 0
        }

    }
    componentDidMount() {
        this.setState({ lastTransaction: transaction.last })
        // this.dataExtraction();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            { console.log("redux", this.props.user) }
            // this.setState({user:this.props.user})
            this.dataExtraction();

        }
        if (prevState.lastTransaction !== transaction.last) {
            console.log("Update")
            this.setState({ lastTransaction: transaction.last })
            this.dataExtraction();
        }
    }
    dataExtraction = () => {
        const user = this.props.user;
        console.log(transaction)
        this.setState({ credit: [], debt: [] })
        for (let index = 1; index <= transaction.last; index++) {
            if (transaction[index].paid_by === user) {
                const shareamount = +transaction[index].amount / (transaction[index].owes.length + 1);
                const lent = +transaction[index].amount - shareamount
                const owesName = transaction[index].owes.join(', ')
                // console.log(shareamount, lent, owesName)
                this.setState(prevState => ({
                    credit: [...prevState.credit, [
                        owesName,
                        shareamount
                    ]],
                    lent: prevState.lent + lent
                }))
            }
            if (transaction[index].owes.includes(user)) {
                const shareamount = +transaction[index].amount / (transaction[index].owes.length + 1);
                this.setState(prevState => ({
                    debt: [...prevState.debt, [
                        transaction[index].paid_by,
                        shareamount
                    ]],
                    owe: prevState.owe - shareamount
                }))
            }
        }
    }

    expenseHandler = () => {
        this.setState((prevState) => ({ popExpense: !prevState.popExpense }))
    }
    newExpensehandler = ({ amount, paid_by, owes, desc, popExpense, group }) => {
        // console.log("newExpense", amount, paid_by, owes, desc, popExpense, group)
        if (paid_by === this.props.user) {
            const shareamount = amount / (owes.length + 1);
            const lent = amount - shareamount
            const owesName = owes.join(', ')
            this.setState(prevState => ({
                credit: [...prevState.credit, [
                    owesName,
                    shareamount
                ]],
                lent: prevState.lent + lent,
                // popExpense
            }))
        }
        if (owes.includes(this.props.user)) {
            const shareamount = amount / (owes.length + 1);
            this.setState(prevState => ({
                debt: [...prevState.debt, [
                    paid_by,
                    shareamount
                ]],
                owe: prevState.owe - shareamount,
                // popExpense
            }))
        }
        this.setState({ popExpense })
        this.dataExtraction();
        dataStore(amount, paid_by, owes, desc, group);
    }

    settleHandler = () => {
        this.setState((prevState) => ({ popSettle: !prevState.popSettle }))
    }
    settleUpHandler = (isSettled) => {
        if (isSettled) {
            this.setState((prevState) => ({ popSettle: !prevState.popSettle, debt: [], credit: [], lent: 0, owe: 0 }))
        }
        else {
            this.setState((prevState) => ({ popSettle: !prevState.popSettle }))
        }
    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <div className="p-3 head">

                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                                <h3>Dashboard</h3>
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-expense" onClick={this.expenseHandler}>Add an expense</button>
                                    <button type="button" className="btn btn-settle" onClick={this.settleHandler}>Settle up</button>
                                </div>
                            </div>

                            <div className="border-top border-bottom border-2">
                                <div className="row py-1 fs-6 " >
                                    <div className="col-sm-4 border-end text-center " >
                                        total balance<br />  {this.state.lent < this.state.owe && (
                                            <span className='credit'> ₹ {(this.state.lent + this.state.owe).toFixed(2)} </span>
                                        )}
                                        {this.state.lent > this.state.owe && (
                                            <span className='debt'> ₹ {(this.state.lent + this.state.owe).toFixed(2) * -1} </span>
                                        )}
                                    </div>
                                    <div className="col-sm-4 border-end text-center">
                                        <div> you owe  <span className='debt'>   <br /> ₹ {this.state.owe.toFixed(2) * -1} </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <div> you are owed
                                            <span className='credit'> <br /> ₹ {this.state.lent.toFixed(2)} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="owe d-flex justify-content-between mx-4 my-2 "
                        >
                            <span>YOU OWE</span>
                            <span>YOU ARE OWED</span>
                        </div>

                        <div className="d-flex ">
                            <span className="border-end border-1 col-6">
                                {this.state.debt.map((data, index) => (
                                    <Debt key={index} name={data[0]} amount={data[1].toFixed(2)} />
                                ))}
                            </span>
                            <span className="border-start border-1 col-6 " >
                                {this.state.credit.map((data, index) => (
                                    <Credit key={index} name={data[0]} amount={data[1].toFixed(2)} />
                                ))}
                            </span>
                        </div>

                    </div>
                </div>
                {this.state.popExpense &&
                    <Expense onBackDrop={this.expenseHandler}
                        onNewExpense={this.newExpensehandler}
                        user={this.props.user}
                    />
                }
                {this.state.popSettle &&
                    <Settle debt={this.state.debt}
                        credit={this.state.credit}
                        user={this.props.user}
                        total={this.state.lent + this.state.owe}
                        onClose={this.settleUpHandler}
                    />
                }
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUser: (payload) => {
            return dispatch(updateUser(payload))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
