import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Group from "./Group";
import Users from "./Users";
// const groupData = require("../../data/group.json");
// const userData = require("../../data/user.json");
import { user as userData, group as groupData } from "../Store/Store"

class LeftPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            group: [],
            groupDisplay: [],
            users: [],
            usersDisplay: [],
            search: "",
        };
    }

    getChildData = (childData) => {
        this.props.parentCallback(childData);
    };

    componentDidMount() {

        for (let key in groupData) {
            this.setState((prevState) => ({
                group: [...prevState.group, key],
                groupDisplay: [...prevState.groupDisplay, "block"],
            }));
        }
        for (let key in userData) {
            this.setState((prevState) => ({
                users: [...prevState.users, key],
                usersDisplay: [...prevState.usersDisplay, "block"],
            }));
        }
    }

    componentDidUpdate() {
        for (let key in userData) {
            if (!this.state.users.includes(key)) {
                this.setState((prevState) => ({
                    users: [...prevState.users, key],
                    usersDisplay: [...prevState.usersDisplay, "block"],
                }));
            }
        }
        let newGroupDisplay = this.state.groupDisplay.map((display, index) => {
            if (
                this.state.group[index]
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
            ) {
                return "block";
            } else {
                return "none";
            }
        });
        let newUsersDisplay = this.state.usersDisplay.map((display, index) => {
            if (
                this.state.users[index]
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
            ) {
                return "block";
            } else {
                return "none";
            }
        });
        if (
            JSON.stringify(newUsersDisplay) !==
            JSON.stringify(this.state.usersDisplay) ||
            JSON.stringify(newGroupDisplay) !==
            JSON.stringify(this.state.groupDisplay)
        ) {
            this.setState({
                usersDisplay: newUsersDisplay,
                groupDisplay: newGroupDisplay,
            });
        }
    }

    search = (event) => {
        this.setState({ search: event.target.value });
    };

    render() {
        return (
            <div className="leftPanel d-flex flex-column">
                <NavLink activeClassName="active" className="navLink" to='dashboard'>
                    <div className="left-links allExpenses" >
                        <i className="fa fa-braille" style={{ padding: "5px" }}></i>
                        Dashboard
                    </div>
                </NavLink>
                <NavLink activeClassName="active" className="navLink" to="activity">
                    <div className="left-links allExpenses">
                        <i
                            className="fa fa-flag"
                            style={{ padding: "5px" }}
                        ></i>
                        Recent Activity
                    </div>
                </NavLink>
                <div className="input-group mb-3" style={{ width: "180px" }}>
                    <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        aria-describedby="basic-addon1"
                        onChange={this.search}
                        value={this.state.search}
                    />
                </div>
                <NavLink activeClassName="active" className="navLink" to="expense">

                    <div className="left-links allExpenses">
                        <i className="fa fa-list-ul" style={{ padding: "5px" }}></i>
                        <div>All expensives</div>
                    </div>
                </NavLink>
                <div className="left-links group-user-tag">Groups</div>
                {this.state.group.map((gname, index) => (
                    <Group
                        key={index}
                        display={this.state.groupDisplay[index]}
                        gname={gname}
                        parentCallback={this.getChildData}
                    />
                ))}

                <div className="left-links group-user-tag">Friends</div>
                {this.state.users.map((uname, index) => (
                    <Users
                        key={index}
                        display={this.state.usersDisplay[index]}
                        uname={uname}
                        parentCallback={this.getChildData}
                    />
                ))}
            </div>
        );
    }
}

export default LeftPanel;
