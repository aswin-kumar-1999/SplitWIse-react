import React, { Component } from 'react'
import BackDrop from '../UI/BackDrop'
import './Expense.css'
import Share from './Share'
import Cards from '../UI/Cards'
import Paid from './Paid'
import Group from './Paid'


// const user = require('../Store/user.json')
const groupList = require('../../data/group.json')
// const transaction = require('../Store/transaction.json')

class Expense extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            nameList: [],
            owe: '',
            share: 'equally',
            shareamount: 0.00,
            group: 'No group',
            splitShare: false,
            amount: 0,
            description: '',
            err: false,
            ispayer: false,
            payer: 'you',
            groupName: [],
            popGroup: false,
            nameErr: false
        }
    }

    componentDidMount() {
        const groups = Object.keys(groupList);
        this.setState({ groupName: groups })

    }

    shareHandler = () => {
        this.setState((prevState) => ({ splitShare: !prevState.splitShare }))
    }
    nameHandler = (event) => {
        const name = event.target.value.toLowerCase();
        if (!this.state.nameList.includes(name) && name.length !== 0) {
            this.setState(prevState => ({
                nameList: [...prevState.nameList, name],
                name: ''
            }))
        }
    }

    amountHandler = (event) => {
        const amount = +event.target.value;
        if (amount !== 0) {
            const length = this.state.nameList.length;
            if (this.state.nameList.length !== 0) {
                this.setState({ amount, shareamount: amount / length, err: false })
            }
            else {
                this.setState({ err: false })
            }
        }
        else {
            this.setState({ err: true, amount: 0, shareamount: 0 })
        }
    }

    descriptionHandler = (event) => {
        const description = event.target.value;
        this.setState({ description })
    }
    nameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    formHandler = (event) => {
        event.preventDefault();
        if (!this.state.err) {
            const length = this.state.nameList.length;
            this.setState((prevState) => ({ shareamount: prevState.amount / length }));
            this.props.onNewExpense({})
        }
    }
    checkedName = (unchecked) => {
        const nameList = this.state.nameList.filter((name, index) => {
            if (unchecked.includes(name)) {
                return false
            }
            else {
                return true
            }
        })
        console.log(nameList)
        const length = nameList.length;
        this.setState((prevState) => (
            {
                shareamount: prevState.amount / length,
                nameList,
                splitShare: !prevState.splitShare
            }))
    }
    payerHandler = () => {
        this.setState((prevState) => ({ ispayer: !prevState.ispayer }))
    }
    checkedPayer = (payer) => {
        console.log("Checked Payer", payer)
        if (payer !== '') {
            this.setState((prevState) => ({ payer, ispayer: !prevState.ispayer }))
        }
        else {
            this.setState((prevState) => ({ ispayer: !prevState.ispayer, payer: this.props.user }))
        }
    }
    checkedGroup = (group) => {
        if (group !== '') {
            const groupUser = groupList[group].users;
            console.log(groupUser)
            this.setState(prevState => ({ group, popGroup: !prevState.popGroup, nameList: groupUser }))
        }
        else {
            this.setState(prevState => ({ popGroup: !prevState.popGroup }))
        }
    }
    savehandler = () => {
        console.log(this.state.err)
        if (this.state.nameList.length >= 2 && !this.state.err) {
            const payer = this.state.payer === "you" ? this.props.user : this.state.payer;
            this.setState({ nameErr: true })
            const owe = this.state.nameList.filter((name) => name !== payer);
            // const owe = this.state.nameList
            // owe.splice(index, 1);
            // console.log(owe)
            this.props.onNewExpense({
                amount: this.state.amount,
                paid_by: payer,
                owes: owe,
                desc: this.state.description,
                expensePop: false,
                group: this.state.group
            })
        }
        if (this.state.nameList.length < 2) {
            this.setState({ nameErr: true })
        }

    }
    groupHandler = () => {
        this.setState({ popGroup: true })
    }
    render() {
        return (
            <>
                <BackDrop>
                    <Cards>
                        <header
                            className='d-flex justify-content-between align-items-center
                             px-2 py-1 fs-5 fw-bold rounded-top-3 header'
                        >
                            <span>Add an expense</span>
                            <i class="fas fa-times" onClick={this.props.onBackDrop}></i>
                        </header>

                        <form onSubmit={this.formHandler}>
                            <div className='d-flex'>
                                <div className='row p-1'>
                                    <div className='col-5'> With you and :</div>
                                    <input type='text' className='col-6' placeholder='Enter the name'
                                        onBlur={this.nameHandler} onChange={this.nameChange} value={this.state.name} />
                                    {this.state.nameErr && <div className='error'>Enter atleast two name</div>}
                                    <div className='d-flex flex-wrap'>
                                        {this.state.nameList.map((name, index) => (
                                            <div key={index} className='m-2 px-2 border border-2 rounded-pill' >
                                                {name}
                                                {/* <i class="fas fa-times" /> */}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='d-flex ps-3 pe-1'>
                                <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" class="category" alt="img" width='70px' height='70px' className='rounded-3' />
                                <div className='ps-2'>
                                    <input type='text' className='col-9 mb-2'
                                        placeholder='Enter a description' onBlur={this.descriptionHandler}>
                                    </input>
                                    <br />
                                    ₹<input type='number'
                                        className={'col-8'}
                                        placeholder='0.00' onBlur={this.amountHandler}></input>
                                    {this.state.err && <div className='error'> enter the proper amount</div>}
                                </div>
                            </div>
                            <div className='my-2 px-3'>
                                <div className='text-center'>
                                    Paid by <span className='share'
                                        onClick={this.payerHandler}
                                    >
                                        {this.state.payer}
                                    </span> and split
                                    <span className='share' onClick={this.shareHandler}> {this.state.share}</span>
                                </div>
                                <div className='text-center'>({this.state.shareamount.toFixed(2)}/person)</div>
                            </div>
                            <div className='btn'>
                                <button type='button' className='px-3 my-1 rounded-pill' onClick={this.groupHandler}>{this.state.group}</button>
                            </div>
                        </form>

                        <hr />
                        <div >
                            <div className='row d-flex justify-content-end m-2'>
                                <button type='button'
                                    className='btn btn-outline-secondary bg-opacity-10 col-3 me-2'
                                    onClick={this.props.onBackDrop}
                                >
                                    Cancel
                                </button>
                                <button type='submit' className='btn px-3 btn-settle col-3 me-2' onClick={this.savehandler}>Save</button>
                            </div>
                        </div>
                    </Cards>
                </BackDrop>
                {this.state.splitShare && <Share nameList={this.state.nameList} onCheckedName={this.checkedName} />}
                {this.state.ispayer && <Paid nameList={this.state.nameList} onCheckerPayer={this.checkedPayer} message="Choose the payer"/>}
                {this.state.popGroup && <Group nameList={this.state.groupName} onCheckerPayer={this.checkedGroup} message="Choose the group" />}
            </>
        )
    }
}

export default Expense
