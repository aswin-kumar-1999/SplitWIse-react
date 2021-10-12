import React, { Component } from "react";
import { Link,Router } from "react-router-dom";

class LeftPanel extends Component {
    render() {
        return (
            <div className="leftPanel">
                LeftPanel
                {/* <Router>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/activity">Recent activity</Link>
                </Router> */}
            </div>
        );
    }
}

export default LeftPanel;
