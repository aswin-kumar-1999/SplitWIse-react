import React, { Component } from "react";

export class RightPanelBlock extends Component {
    render() {
        return (
            <div className="displayGroupMembers d-flex justify-content-start">
                <img
                    src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby36-100px.png"
                    alt="#"
                    className="rounded-circle"
                    width="30px"
                    height="30px"
                    style={{ marginRight: "10px" }}
                ></img>
                {this.props.gname}
            </div>
        );
    }
}

export default RightPanelBlock;
