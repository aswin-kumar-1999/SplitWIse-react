import React, { Component } from "react";
// const fs = require("fs").promises;
// import { Link, Router } from "react-router-dom";
// import * as group from "../../data/group.json";
// import * as users from "../../data/users.json";
import Group from "./Group";
import Users from "./Users";

class LeftPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            group: ["Project", "Kashmir"],
            groupDisplay: ["block", "block"],
            users: ["Harsh", "Aswin"],
            usersDisplay: ["block", "block"],
            search: "",
        };
    }

    componentDidUpdate() {
        let newGroupDisplay = this.state.groupDisplay.map((display, index) => {
            if (this.state.group[index].toLowerCase().includes(this.state.search.toLowerCase())) {
                return "block";
            } else {
                return "none";
            }
        });
        let newUsersDisplay = this.state.usersDisplay.map((display, index) => {
            if (this.state.users[index].toLowerCase().includes(this.state.search.toLowerCase())) {
                return "block";
            } else {
                return "none";
            }
        });
        // console.log(newUsersDisplay === this.state.usersDisplay);
        // console.log(newUsersDisplay, this.state.usersDisplay);
        // console.log(newGroupDisplay === this.state.groupDisplay);
        console.log(newUsersDisplay);
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
        // console.log(this.state.search);
    };

    render() {
        return (
            <div className="leftPanel">
                {/* <Link to="/">Home</Link> */}
                <div className="left-links">Dashboard</div>
                <div className="left-links">Recent Activity</div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        @
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
                <div className="left-links">All expensives</div>
                <div className="left-links">Groups</div>
                <Group
                    display={this.state.groupDisplay[0]}
                    gname={this.state.group[0]}
                />
                <Group
                    display={this.state.groupDisplay[1]}
                    gname={this.state.group[1]}
                />

                <div className="left-links">Friends</div>
                <Users
                    display={this.state.usersDisplay[0]}
                    uname={this.state.users[0]}
                />
                <Users
                    display={this.state.usersDisplay[1]}
                    uname={this.state.users[1]}
                />
                {/* <Router>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/activity">Recent activity</Link>
                </Router> */}
            </div>
        );
    }
}

export default LeftPanel;
