import React, { Component } from "react";

export default class ActivityBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            block: [],
        };
    }

    // blocks = () => {
    //     for (let index = 0; index < this.props.count; index++) {
    //         this.setState((prevState) => {
    //             block: prevState.block.push(
    //                 `<div className="activityBlock">{this.props.count}</div>`
    //             );
    //         });
    //         // <div className="activityBlock">{this.props.count}</div>
    //     }
    // };

    render() {
        return <div className="activityBlock"></div>;
    }
}
