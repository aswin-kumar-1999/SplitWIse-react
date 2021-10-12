import React, { Component } from 'react'
import style from './owe.module.css'

class Debt extends Component {
    render() {
        return (
            <div className={style.content}> 
                <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby36-100px.png" alt="Avatar" ></img>

                <div>
                    <div>{this.props.name} <div style={{color:'#07e2b3'}}>you owe INR {this.props.amount}</div></div>
                </div>
            </div>
        )
    }
}

export default Debt
