import React, { Component } from "react";

export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="users-groups">{this.props.gname}</div>;
    }
}
