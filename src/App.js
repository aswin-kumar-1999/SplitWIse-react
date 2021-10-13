import React, { Component } from 'react'
import Dashboard from './compenents/Dashboard/Dashboard'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' exact>
            <Redirect to='/dashboard'></Redirect>
          </Route>
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

