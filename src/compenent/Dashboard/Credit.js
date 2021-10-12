import React, { Component } from 'react'
import style from './owe.module.css'

class Credit extends Component {
    render() {
        return (
            <div className={style.content}>
                <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby36-100px.png" alt="Avatar"></img>
                <div>{this.props.name}
                    <div style={{color:'#ff4000'}}>owe you INR {this.props.amount}</div>
                </div>
            </div>
        )
    }
}

export default Credit
