import React, { Component } from 'react'
import style from './BackDrop.module.css'
class BackDrop extends Component {
    render() {
        return (
            <div className={style.backdrop}>
                <div className='d-flex justify-content-center'>
                    <div className={style.card}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default BackDrop
