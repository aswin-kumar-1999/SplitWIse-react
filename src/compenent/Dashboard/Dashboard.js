import React, { Component } from 'react'
import style from './Dashboard.module.css'
import Credit from './Credit'
import Debt from './Debt'
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
            <div className={style.dashboard}>
                <div className={style.header} >
                    <div className={style.expenseheader}>
                        <div className={style.head}>
                            <h1>Dashboard</h1>
                            <div className={style.button}>
                                <button type="button" class="btn btn-expense">Add an expense</button>
                                <button type="button" class="btn btn-settle">Settle up</button>
                            </div>
                        </div>
                        <div class="container">
                            <div className="row" >
                                <div class="col">
                                    total balance<br /> ₹{this.state.total}
                                </div>
                                <div class="col">
                                    you owe <br /> ₹{this.state.debt}
                                </div>
                                <div class="col">
                                    you are owed <br /> ₹{this.state.lend}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.owe}>
                        <span>YOU OWE</span>
                        <span>YOU ARE OWED</span>
                    </div>

                    <div className={style.expense}>
                        <span class="border-end col-6"  >
                            <Debt name="aswin" amount="200" />
                        </span>
                        <span class="border-start col-6">
                            <Credit name="aswin" amount="200" />
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
