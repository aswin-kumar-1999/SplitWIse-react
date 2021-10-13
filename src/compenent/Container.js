import React, { Component } from 'react'
import Dashboard from './Dashboard/Dashboard'
import { Route } from 'react-router-dom'
export class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
            </div>
        )
    }
}

export default Container
