import React, { Component } from 'react'
import style from './BackDrop.module.css'
class BackDrop extends Component {
    render() {
        return (
            <div className={style.backdrop} >
                {this.props.children}
            </div>
        )
    }
}

export default BackDrop
