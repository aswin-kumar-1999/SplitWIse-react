import React, { Component } from "react";

export default class GroupBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            greenColor: "#07e2b3",
            redColor: "#ff4000",
        };
    }

    render() {
        return (
            <div className="groupBlock d-flex justify-content-between align-items-center">
                <div>
                    <img
                        src={this.props.img}
                        alt="%"
                        height="50px"
                        width="50px"
                    />
                    <span className="group-display-desc-text">
                        {this.props.desc}
                    </span>
                </div>
                <div>
                    {this.props.paidBy} paid ₹{this.props.amount}
                </div>
            </div>
        );
    }
}
