import React, { Component } from 'react'
import Container from './compenent/Container'
import {  BrowserRouter, Route, Redirect } from 'react-router-dom'

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
          <Container />
        </BrowserRouter>
      </div>
    )
  }
}

export default App

