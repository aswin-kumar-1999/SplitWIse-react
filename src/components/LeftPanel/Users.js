import React, { Component } from "react";
import {  NavLink } from "react-router-dom";

export default class Users extends Component {
    constructor(props) {
        super(props);
    }

    clickHandeler = () => {
        this.props.parentCallback(this.props.uname);
    };

    render() {
        return (
            <NavLink activeClassName="active" className="navLink" to={this.props.uname}>
                <div
                    style={{ display: this.props.display }}
                    className="users-groups"
                    onClick={this.clickHandeler}
                >
                    {" "}
                    <i className="fa fa-user" style={{ padding: "5px" }}></i>
                    {this.props.uname}
                </div>
            </NavLink>
        );
    }
}
