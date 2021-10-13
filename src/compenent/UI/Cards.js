import React, { Component } from 'react'
import style from './BackDrop.module.css'

class Cards extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <div className={style.card}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Cards
