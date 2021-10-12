import React, { Component } from 'react'
import style from './owe.module.css'

class Debt extends Component {
    render() {
        return (
            <div className='d-flex align-items-center px-4 py-3'>
                <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby36-100px.png" alt="Avatar" className='rounded-circle' width='40px' height='40px'></img>

                <div className='px-3'>
                    {this.props.name}
                    <div style={{ color: '#07e2b3' }}>you owe INR {this.props.amount}</div>
                </div>
            </div>
        )
    }
}

export default Debt
