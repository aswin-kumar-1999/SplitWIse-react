import React, { Component } from "react";

export default class ActivityBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            greenColor: "#07e2b3",
            redColor: "#ff4000",
        };
    }


    render() {
        return (
            <div className="activityBlock">
                <img src={this.props.img} alt="%" height="50px" width="50px" />
                <div className="activityText">
                    <div>
                        {this.props.person} added "{this.props.desc}" in "
                        {this.props.group}"
                    </div>
                    <div
                        className="status-amount"
                        style={{
                            color:
                                this.props.status !== "owe"
                                    ? this.state.greenColor
                                    : this.state.redColor,
                        }}
                    >
                        you{" "}
                        {this.props.status === "owe" ? (
                            <p>owe</p>
                        ) : (
                            <p>get back</p>
                        )}{" "}
                        ₹{this.props.amount}{" "}
                    </div>
                    <div className="date"> {this.props.date} </div>
                </div>
                <div></div>
            </div>
        );
    }
}
