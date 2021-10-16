import React, { Component } from "react";
import RightPanelBlock from "./RightPanelBlock";
const groupData = require("../../data/group.json");

export default class RightPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            group: [],
            gname: "",
            display: "none",
            status: false,
        };
    }

    componentDidUpdate() {
        let name = this.props.displayName;
        if (
            this.props.displayName &&
            this.props.displayName !== this.state.gname
        ) {
            for (let key in groupData) {
                this.setState({
                    group: groupData[name].users,
                    gname: this.props.displayName,
                    display: "flex",
                    status: false,
                });
            }
            // } else if (
            //     !this.state.group.includes(this.props.displayName) &&
            //     !this.state.status
            // ) {
            //     this.setState({ display: "none", status: true, group: [] });
        }
        if (
            !this.state.group.includes(this.props.displayName) &&
            this.state.status
        ) {
            this.setState({ display: "none", status: true });
        }
    }

    render() {
        return (
            <>
                {this.props.displayName !== '' &&
                    <div
                        className="rightPanel d-flex flex-column align-items-end"
                        style={{ display: this.state.display }}
                    >
                        <h5 className="rightPanelHead d-flex justify-content-center align-items-center">
                            <div>Group Members</div>
                        </h5>
                        {this.state.group.map((item) => (
                            <RightPanelBlock gname={item} />
                        ))}
                    </div>
                }
            </>
        );
    }
}
