import React, { Component } from "react";

export default class Users extends Component {
    render() {
        return (
            <div
                style={{ display: this.props.display }}
                className="users-groups"
            >
                {" "}
                <i className="fa fa-user" style={{padding:"5px"}}></i>
                {this.props.uname}
            </div>
        );
    }
}
