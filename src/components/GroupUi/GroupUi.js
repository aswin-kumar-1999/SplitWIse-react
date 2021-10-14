import React, { Component } from "react";
import GroupBlock from "./GroupBlock";
const groupData = require("../../data/group.json");

export default class GroupUi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // groupName: "Project",
            img1: "https://s3.amazonaws.com/splitwise/uploads/notifications/v2021/0-18.png",
            paidBy: "Harshdeep Singh",
            amount: 300,
            desc: "Travel",
        };
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
                <GroupBlock
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
                />
            </div>
        );
    }
}
