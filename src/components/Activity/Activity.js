import React, { Component } from "react";
import ActivityBlock from "./ActivityBlock";

export class Activity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="activity">
                <h1 className="activityHead">Recent Activity</h1>
                <ActivityBlock count={this.props.count} />
                <ActivityBlock count={this.props.count} />
                <ActivityBlock count={this.props.count} />
            </div>
        );
    }
}

export default Activity;
