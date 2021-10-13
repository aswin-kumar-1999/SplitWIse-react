import React, { Component } from "react";

export default class Users extends Component {
    render() {
        return (
            <div
                style={{ display: this.props.display }}
                className="users-groups"
            >
                {this.props.uname}
            </div>
        );
    }
}
