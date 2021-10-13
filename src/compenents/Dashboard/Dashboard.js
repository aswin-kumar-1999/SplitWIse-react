import React, { Component } from 'react'
import Credit from './Credit'
import Debt from './Debt'
import Expense from '../Expense/Expense'
import './Dashboard.css'
const transaction = require('../Store/transaction.json')

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            expensePop: false,
            user: 'aswin',
            debt: [],
            credit: [],
            lent: 0,
            owe: 0
        }

    }
    componentDidMount() {
        this.dataExtraction();
    }
    dataExtraction = () => {
        const user = this.state.user;
        // console.log(transaction[1])
        for (let index = 1; index < transaction.last; index++) {
            if (transaction[index].paid_by === user) {
                const shareamount = +transaction[index].amount / (transaction[index].owes.length + 1);
                const lent = +transaction[index].amount - shareamount
                const owesName = transaction[index].owes.join(', ')
                console.log(shareamount, lent, owesName)
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
        this.setState((prevState) => ({ expensePop: !prevState.expensePop }))
    }
    newExpensehandler = ({ amount, paid_by, owes, desc, expensePop }) => {
        console.log(amount, paid_by, owes, desc, expensePop)
        if (paid_by === this.state.user) {
            const shareamount = amount / (owes.length + 1);
            const lent = amount - shareamount
            const owesName = owes.join(', ')
            this.setState(prevState => ({
                credit: [...prevState.credit, [
                    owesName,
                    shareamount
                ]],
                lent: prevState.lent + lent,
                expensePop
            }))
        }
        if (owes.includes(this.state.user)) {
            const shareamount = amount / (owes.length + 1);
            this.setState(prevState => ({
                debt: [...prevState.debt, [
                    paid_by,
                    shareamount
                ]],
                owe: prevState.owe - shareamount,
                expensePop
            }))
        }
    }
    render() {
        return (
            <>
                <div className="d-flex justify-content-center content overflow-auto">

                    <div className="shadow bg-body rounded col-lg-5">
                        <div className="p-3 head">

                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                                <h3>Dashboard</h3>
                                <div className="d-flex justify-content-between">
                                    <button type="button" class="btn btn-expense" onClick={this.expenseHandler}>Add an expense</button>
                                    <button type="button" class="btn btn-settle">Settle up</button>
                                </div>
                            </div>

                            <div class="container mt-3 border-top border-bottom border-2">
                                <div className="row py-1 fs-6 " >
                                    <div class="col-sm-4 border-end text-center " >
                                        total balance<br /> ₹ {(this.state.lent + this.state.owe).toFixed(2)}
                                    </div>
                                    <div class="col-sm-4 border-end text-center">
                                        you owe <br /> ₹ {this.state.owe.toFixed(2)}
                                    </div>
                                    <div class="col-sm-4 text-center">
                                        you are owed <br /> ₹ {this.state.lent.toFixed(2)}
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
                            <span class="border-end border-1 col-6 " >
                                {this.state.credit.map((data, index) => (
                                    <Credit key={index} name={data[0]} amount={data[1].toFixed(2)} />
                                ))}
                            </span>
                            <span class="border-start border-1 col-6">
                                {this.state.debt.map((data, index) => (
                                    <Debt key={index} name={data[0]} amount={data[1].toFixed(2)} />
                                ))}
                            </span>
                        </div>

                    </div>
                </div>
                {this.state.expensePop &&
                    <Expense onBackDrop={this.expenseHandler}
                        onNewExpense={this.newExpensehandler}
                        user={this.state.user}
                    />
                }
            </>
        )
    }
}

export default Dashboard
