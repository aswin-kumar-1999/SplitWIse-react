import React, { Component } from "react";
import UserBlock from "./UserBlock";
const userData = require("../../data/user.json");
const transactionData = require("../../data/transaction.json");

export default class UserUi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img1: "https://s3.amazonaws.com/splitwise/uploads/notifications/v2021/0-18.png",
            uname: "",
            paidBy: [],
            amount: [],
            desc: [],
            sharedBy: [],
            temp: -1,
            transactions: [],
            sort: false,
            count: 0,
        };
    }

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate() {
        console.log(this.props.userName);
        console.log(this.state.uname);
        this.updateData();
        if (!this.state.sort) {
            this.setState((prevState) => ({
                transactions: [...new Set(this.state.transactions)],
                sort: true,
            }));
        }
        if (
            this.state.transactions.length !== this.state.count &&
            this.state.sort
        ) {
            this.addData();
        }
    }

    addData = () => {
        this.state.transactions.map((element) => {
            this.setState((prevState) => ({
                paidBy: [...prevState.paidBy, transactionData[element].paid_by],
                amount: [...prevState.amount, transactionData[element].amount],
                desc: [...prevState.desc, transactionData[element].desc],
                sharedBy: [
                    ...prevState.sharedBy,
                    transactionData[element]["owes"].length,
                ],
                count: this.state.transactions.length,
            }));
        });
    };

    updateData = () => {
        if (userData[this.props.userName]) {
            if (this.props.userName !== this.state.uname) {
                this.setState({
                    uname: "",
                    paidBy: [],
                    amount: [],
                    desc: [],
                    temp: -1,
                    transactions: [],
                    sort: false,
                    count: 0,
                });
                for (let key in userData[this.props.userName]) {
                    if (key !== "owes") {
                        this.setState((prevState) => ({
                            temp: prevState.transactions.length,
                            transactions: [
                                ...prevState.transactions,
                                ...userData[this.props.userName][key],
                            ],
                            uname: this.props.userName,
                            sort: false,
                        }));
                    }
                }
                for (let element of userData[this.props.userName]["owes"]) {
                    this.setState((prevState) => ({
                        temp: prevState.transactions.length,
                        transactions: [
                            ...prevState.transactions,
                            ...userData[element][this.props.userName],
                        ],
                    }));
                }
            }
        }
    };

    render() {
        return (
            <div>
                <h2 className="groupHead">
                    <div>
                        <img
                            src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby36-100px.png"
                            alt="#"
                            className="rounded-circle"
                            width="30px"
                            height="30px"
                            style={{ marginRight: "10px" }}
                        ></img>
                        {this.props.userName}
                    </div>
                    {/* <div>
                        <button className="btn-expense">Add Expense</button>
                        <button className="btn-settle">Settle Up</button>
                    </div> */}
                </h2>
                {this.state.paidBy.map((person, index) => (
                    <UserBlock
                        img={this.state.img1}
                        paidBy={person}
                        amount={this.state.amount[index]}
                        desc={this.state.desc[index]}
                        sharedBy={this.state.sharedBy[index]}
                    />
                ))}
            </div>
        );
    }
}
