import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    clickHandeler = () => {
        this.props.parentCallback(this.props.gname);
    };

    render() {
        return (
            <Link to={this.props.gname}>
                <div
                    style={{ display: this.props.display }}
                    className="users-groups"
                    onClick={this.clickHandeler}
                >
                    <i className="fa fa-tag" style={{ padding: "5px" }}></i>
                    {this.props.gname}
                </div>
            </Link>
        );
    }
}
