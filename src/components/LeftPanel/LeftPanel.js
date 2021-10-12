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
            users: ["Harsh", "Aswin"],
            search: "",
        };
    }

    // componentDidMount() {
    //     fs.readFile("../../data/group.json")
    //         .then((data) => data.json())
    //         .then((data) => {
    //             console.log(1, data);
    //             this.setState({ group: data });
    //         });

    //     fs.readFile("../../data/users.json")
    //         .then((data) => data.json())
    //         .then((data) => {
    //             this.setState({ users: data });
    //         });
    // }

    search = (event) => {
        this.setState({ search: event.target.value });
        console.log(this.state.search);
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
                        placeholder="Username"
                        aria-describedby="basic-addon1"
                        onChange={this.search}
                        value={this.state.search}
                    />
                </div>
                <div className="left-links">All expensives</div>
                <div className="left-links">Groups</div>
                <Group gname={this.state.group[0]} />
                <Group gname={this.state.group[1]} />

                <div className="left-links">Friends</div>
                <Users uname={this.state.users[0]} />
                <Users uname={this.state.users[1]} />
                {/* <Router>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/activity">Recent activity</Link>
                </Router> */}
            </div>
        );
    }
}

export default LeftPanel;
