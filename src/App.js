import "./App.css";
import React, { Component } from "react";
// import { Route } from "react-router-dom";
import Activity from "./components/Activity/Activity";
// import Dashboard from "./components/Dashboard/Dashboard";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activityCount: 10,
        };
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <LeftPanel />
                    <Activity count={this.state.activityCount} />
                    <RightPanel />
                </div>
            </div>
        );
    }
}

export default App;
