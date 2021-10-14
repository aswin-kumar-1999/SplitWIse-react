import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Users extends Component {
    constructor(props) {
        super(props);
    }

    clickHandeler = () => {
        this.props.parentCallback(this.props.uname);
    };

    render() {
        return (
            <Link to={this.props.uname}>
                <div
                    style={{ display: this.props.display }}
                    className="users-groups"
                    onClick={this.clickHandeler}
                >
                    {" "}
                    <i className="fa fa-user" style={{ padding: "5px" }}></i>
                    {this.props.uname}
                </div>
            </Link>
        );
    }
}
