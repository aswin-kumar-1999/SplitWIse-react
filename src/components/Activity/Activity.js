import React, { Component } from "react";
import ActivityBlock from "./ActivityBlock";

import { connect } from "react-redux";
import { recentActivity } from '../../redux/actions';

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
            Date1: "Oct 16, 2021",
        };
    }

    render() {
        { console.log("Activity", this.props.credit) }
        return (
            <div className="activity">
                <h1 className="activityHead">Recent Activity</h1>
                {this.props.credit.map(credits => (
                    <ActivityBlock
                        date={this.state.Date1}
                        lentTo={credits[0]}
                        desc={credits[2]}
                        img={this.state.img1}
                        amount={credits[1]}
                        type='credit'
                    />
                ))}
                {this.props.credit.map(credits => (
                    <ActivityBlock
                        date={this.state.Date1}
                        youOwe={credits[0]}
                        desc={credits[2]}
                        img={this.state.img1}
                        amount={credits[1]}
                        type='debt'
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        credit: state.credit,
        debt: state.debt
    }
}

function mapDispatchToProps(dispatch) {
    return {
        recentActivity: (payload) => {
            return dispatch(recentActivity(payload))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Activity);