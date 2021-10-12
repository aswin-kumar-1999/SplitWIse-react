import React, { Component } from 'react'
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
            <div className="d-flex justify-content-center">

                <div className="shadow bg-body rounded col-5" style={{ height: '96vh' }}>
                    <div className="p-3" style={{ background: 'rgba(236, 236, 236, 0.836)' }}>

                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h3>Dashboard</h3>
                            <div className="d-flex justify-content-between">
                                <button type="button" class="btn btn-expense">Add an expense</button>
                                <button type="button" class="btn btn-settle">Settle up</button>
                            </div>
                        </div>

                        <div class="container mt-3 border-top border-bottom border-2">
                            <div className="row py-1 fs-6" style={{ color: 'grey' }} >
                                <div class="col-sm-4 border-end text-center" >
                                    total balance<br /> ₹{this.state.total}
                                </div>
                                <div class="col-sm-4 border-end text-center">
                                    you owe <br /> ₹{this.state.debt}
                                </div>
                                <div class="col-sm-4 text-center">
                                    you are owed <br /> ₹{this.state.lend}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="d-flex justify-content-between mx-4 my-2 "
                        style={{ color: 'grey', fontWeight: '500' }}
                    >
                        <span>YOU OWE</span>
                        <span>YOU ARE OWED</span>
                    </div>

                    <div className="d-flex">
                        <span class="border-end border-1 col-6"  >
                            <Debt name="Aswin" amount="200" />
                        </span>
                        <span class="border-start border-1 col-6">
                            <Credit name="Gokul" amount="200" />
                        </span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard
