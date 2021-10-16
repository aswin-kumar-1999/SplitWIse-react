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
                {this.props.credit.length === 0 ? <div><img src="https://assets.splitwise.com/assets/fat_rabbit/app/checkmark-circle-ae319506ad7196dc77eede0aed720a682363d68160a6309f6ebe9ce1983e45f0.png"></img>
                    <h2>All settled</h2>
                </div> :
                this.props.credit.map(credits => (
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