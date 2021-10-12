import React, { Component } from 'react'
import Dashboard from './Dashboard/Dashboard'

export class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Dashboard />
            </div>
        )
    }
}

export default Container
