import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Activity from "./components/Activity/Activity";
import GroupUi from "./components/GroupUi/GroupUi";
import Header from "./components/Header";
import { Switch } from "react-router";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupName: "",
        };
    }

    getChildData = (childData) => {
        console.log(childData);
        this.setState({ groupName: childData })
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
                                    <Route path="/:id" exact>
                                        <GroupUi groupName={this.state.groupName} />
                                    </Route>
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
