import React, { Component } from "react";
import ActivityBlock from "./ActivityBlock";

export class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img1: "https://s3.amazonaws.com/splitwise/uploads/notifications/v2021/0-18.png",
            amount1: 10,
            status1: "owe",
            person1: "Harshdeep Singh",
            Desc1: "Food",
            Group1: "Project",
            Date1: "Oct 12, 2021",
        };
    }

    render() {
        return (
            <div className="activity">
                <h1 className="activityHead">Recent Activity</h1>
                <ActivityBlock
                    date={this.state.Date1}
                    group={this.state.Group1}
                    person={this.state.person1}
                    desc={this.state.Desc1}
                    img={this.state.img1}
                    amount={this.state.amount1}
                    status={this.state.status1}
                />
                <ActivityBlock
                    date={this.state.Date1}
                    group={this.state.Group1}
                    person={this.state.person1}
                    desc={this.state.Desc1}
                    img={this.state.img1}
                    amount={this.state.amount1}
                    status={this.state.status1}
                />
                <ActivityBlock
                    date={this.state.Date1}
                    group={this.state.Group1}
                    person={this.state.person1}
                    desc={this.state.Desc1}
                    img={this.state.img1}
                    amount={this.state.amount1}
                    status={this.state.status1}
                />
                <ActivityBlock
                    date={this.state.Date1}
                    group={this.state.Group1}
                    person="Aswin Kumar"
                    desc="Travel"
                    img={this.state.img1}
                    amount="30"
                    // status={this.state.status1}
                />
            </div>
        );
    }
}

export default Activity;
