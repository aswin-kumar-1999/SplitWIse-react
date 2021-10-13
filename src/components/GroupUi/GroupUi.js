import React, { Component } from "react";

export default class GroupUi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupName: "Project",
        };
    }

    render() {
        return (
            <div>
                <h2 className="groupHead">
                    <div>
                        <img
                            src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby36-100px.png"
                            alt="#"
                            className="rounded-circle"
                            width="30px"
                            height="30px"
                            style={{ marginRight: "10px" }}
                        ></img>
                        {this.state.groupName}
                    </div>
                    <div>
                        <button className="btn-expense">Add Expense</button>
                        <button className="btn-settle">Settle Up</button>
                    </div>
                </h2>
            </div>
        );
    }
}
