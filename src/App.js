import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Activity from "./components/Activity/Activity";
import Header from "./components/Header";
import { Switch } from "react-router";
import CenterDisplay from "./components/CenterDisplay";
const groupData = require("./data/group.json");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: "",
            groups: [],
            displayName: "",
            displayGroupName: "",
        };
    }

    componentDidMount() {
        for (let key in groupData) {
            this.setState((prevState) => ({
                groups: [...prevState.groups, key],
            }));
        }
    }

    getChildData = (childData) => {
        this.setState({ displayName: childData });
        if (this.state.groups.includes(childData)) {
            this.setState({ displayGroupName: childData });
        } else {
            this.setState({ displayGroupName: "" });
        }
    };

    render() {
        return (
            <div className="App">
                <Header />
                <div className="body">
                    <div className="container">
                        <BrowserRouter>
                            <LeftPanel parentCallback={this.getChildData} />
                            <div className="centerPanel">
                                <Switch>
                                    <Route path="/" exact>
                                        <Redirect to="/dashboard"></Redirect>
                                    </Route>
                                    <Route path="/dashboard" exact>
                                        <Dashboard />
                                    </Route>
                                    <Route path="/activity">
                                        <Activity />
                                    </Route>
                                    <Route
                                        path="/:id"
                                        render={(props) => (
                                            <CenterDisplay
                                                {...props}
                                                displayName={
                                                    this.state.displayName
                                                }
                                            />
                                        )}
                                    />
                                </Switch>
                            </div>
                            <RightPanel
                                displayName={this.state.displayGroupName}
                            />
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
