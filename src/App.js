import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
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
              <div className='mobile'>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{width:'200px'}}>
                  <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body" >
                    <LeftPanel parentCallback={this.getChildData} />
                  </div>
                </div>
              </div>
              <div className='lapview'>
                <LeftPanel parentCallback={this.getChildData} />
              </div>
              <div className="centerPanel">
                <Switch>
                  <Route path='/' exact>
                    <Redirect to='/dashboard'></Redirect>
                  </Route>
                  <Route path='/dashboard' exact>
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
            </BrowserRouter>
            <div className='lapview'>
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;