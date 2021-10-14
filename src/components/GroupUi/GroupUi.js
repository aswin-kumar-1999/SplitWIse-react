import React, { Component } from "react";
import GroupBlock from "./GroupBlock";
const groupData = require("../../data/group.json");
const transactions = require("../../data/transaction.json");

export default class GroupUi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img1: "https://s3.amazonaws.com/splitwise/uploads/notifications/v2021/0-18.png",
            gname: "",
            paidBy: [],
            amount: [],
            desc: [],
            temp: 0,
        };
    }

    componentDidUpdate() {
        // console.log(this.props.groupName);
        // console.log(groupData);
        if (groupData[this.props.groupName]) {
            if (this.props.groupName !== this.state.gname) {
                this.setState({
                    gname: "",
                    paidBy: [],
                    amount: [],
                    desc: [],
                    temp: 0,
                });
                for (let index = 1; index <= transactions["last"]; index++) {
                    console.log(index);
                    if (
                        groupData[this.props.groupName].transaction.includes(
                            index
                        ) &&
                        index !== this.state.temp
                    ) {
                        console.log(31);
                        this.setState((prevState) => ({
                            paidBy: [
                                ...prevState.paidBy,
                                transactions[`${index}`].paid_by,
                            ],
                            amount: [
                                ...prevState.amount,
                                transactions[`${index}`].amount,
                            ],
                            desc: [
                                ...prevState.desc,
                                transactions[`${index}`].desc,
                            ],
                            temp: index,
                            gname: this.props.groupName,
                            // clear: true,
                        }));
                    }
                }
                // } else if (this.state.clear) {
                //     this.setState({
                //         gname: "",
                //         paidBy: [],
                //         amount: [],
                //         desc: [],
                //         temp: 0,
                //         clear: false,
                //     });
            }
        }
    }

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
                        {this.props.groupName}
                    </div>
                    <div>
                        <button className="btn-expense">Add Expense</button>
                        <button className="btn-settle">Settle Up</button>
                    </div>
                </h2>
                {console.log(this.state.paidBy)}
                {this.state.paidBy.map((person, index) => (
                    <GroupBlock
                        img={this.state.img1}
                        paidBy={person}
                        amount={this.state.amount[index]}
                        desc={this.state.desc[index]}
                    />
                ))}
                {/* <GroupBlock
                    img={this.state.img1}
                    paidBy={this.state.paidBy}
                    amount={this.state.amount}
                    desc={this.state.desc}
                />
                <GroupBlock
                    img={this.state.img1}
                    paidBy="aswin"
                    amount="200"
                    desc="Food"
                />
                <GroupBlock
                    img={this.state.img1}
                    paidBy={this.state.paidBy}
                    amount="500"
                    desc="Shopping"
                />
                <GroupBlock
                    img={this.state.img1}
                    paidBy="Aswin"
                    amount="100"
                    desc="Snacks"
                /> */}
            </div>
        );
    }
}
