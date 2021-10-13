import React, { Component } from "react";
import Activity from "./Activity/Activity";
import GroupUi from "./GroupUi/GroupUi";

export default class Container extends Component {
    render() {
        return (
            <div className="centerPanel">
                <Activity />
                {/* <GroupUi /> */}
            </div>
        );
    }
}
