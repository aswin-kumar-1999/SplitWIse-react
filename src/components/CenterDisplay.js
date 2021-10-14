import React, { Component } from "react";
import GroupUi from "./GroupUi/GroupUi";
import UserUi from "./UserUi/UserUi";
const groupData = require("../data/group.json");
const userData = require("../data/user.json");

export default class CenterDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            group: [],
            isGroup: false,
            users: [],
            isUser: false,
        };
    }

    componentDidMount() {
        for (let key in groupData) {
            this.setState((prevState) => ({
                group: [...prevState.group, key],
            }));
        }
        for (let key in userData) {
            this.setState((prevState) => ({
                users: [...prevState.users, key],
            }));
        }
    }

    componentDidUpdate() {
        if (this.state.group.includes(this.props.displayName) && this.state.isGroup === false) {
            this.setState({ isGroup: true, isUser: false });
        } else if (this.state.users.includes(this.props.displayName) && this.state.isUser === false) {
            this.setState({ isUser: true, isGroup: false });
        }
    }

    render() {
        return (
            <div>
                {this.state.isGroup ? (
                    <GroupUi groupName={this.props.displayName} />
                ) : this.state.isUser ? (
                    <UserUi userName={this.props.displayName} />
                ) : (
                    ""
                )}
            </div>
        );
    }
}
