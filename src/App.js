import "./App.css";
import React, { Component } from "react";
// import { Route } from "react-router-dom";
// import Activity from "./components/Activity/Activity";
// import Dashboard from "./components/Dashboard/Dashboard";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Container from "./components/Container";
import Header from "./components/Header";
// import Header from "./components/Header";
// import { Router } from "react-router";

class App extends Component {
    // constructor(props) {
    //     super(props);

    //     // this.state = {
    //     //     activityCount: 10,
    //     // };
    // }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="body">
                    <div className="container">
                        {/* <Router> */}
                        {/* <Link to="/">Home</Link> */}
                        <LeftPanel />
                        <Container />
                        <RightPanel />
                        {/* </Router> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
