import React, { Component } from 'react'
import style from './Dashboard.module.css'
class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 10.00,
            lend: 10.00,
            debt: 0.00
        }
    }

    render() {
        return (
            <div className={style.header}>
                <div className={style.head}>
                    <h1>Dashboard</h1>
                    <div className={style.button}>
                        <button type="button" class="btn btn-expense">Add an expense</button>
                        <button type="button" class="btn btn-settle">Settle up</button>
                    </div>
                </div>
                <div className={style.balance}>
                    <div > total balance <br /> ₹{this.state.total}</div> <hr/>
                    <div > you owe <br /> ₹{this.state.debt}</div> <hr/>
                    <div > you are owed <br /> ₹{this.state.lend}</div>
                </div>
            </div>

        )
    }
}

export default Dashboard
