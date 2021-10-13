import React, { Component } from "react";

export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                style={{ display: this.props.display }}
                className="users-groups"
            >
                {this.props.gname}
            </div>
        );
    }
}
