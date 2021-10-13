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
                <i class="fa fa-tag" style={{ padding: "5px" }}></i>
                {this.props.gname}
            </div>
        );
    }
}
