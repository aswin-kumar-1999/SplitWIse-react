import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
            displayName: "",
            groups: [],
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
                        </BrowserRouter>
                        <RightPanel />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
