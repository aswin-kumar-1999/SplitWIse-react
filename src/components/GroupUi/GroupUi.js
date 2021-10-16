import React, { Component } from "react";
import GroupBlock from "./GroupBlock";

// const groupData = require("../../data/group.json");
// const transactions = require("../../data/transaction.json");
import { transaction as transactions, group as groupData } from "../Store/Store";

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

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate() {
        this.updateData();
    }

    updateData = () => {
        if (groupData[this.props.groupName]) {
            if (this.props.groupName !== this.state.gname) {
                this.setState({
                    gname: "",
                    paidBy: [],
                    amount: [],
                    desc: [],
                    temp: 0,
                });
                for (let index = 1; index <= transactions["last"]+1; index++) {
                    if (
                        groupData[this.props.groupName].transaction.includes(
                            index
                        ) &&
                        index !== this.state.temp
                    ) {
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
                        }));
                    }
                }
            }
        }
    };

    render() {
        return (
            <div>
                <h2 className="groupHead d-flex justify-content-between">
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
                </h2>
                {this.state.paidBy.map((person, index) => (
                    <GroupBlock
                        key={index}
                        img={this.state.img1}
                        paidBy={person}
                        amount={this.state.amount[index]}
                        desc={this.state.desc[index]}
                    />
                ))}
            </div>
        );
    }
}
