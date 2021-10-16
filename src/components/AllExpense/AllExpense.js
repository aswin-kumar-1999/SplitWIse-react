import React, { Component } from 'react'
import { transaction } from '../Store/Store'
import ExpenseCards from './ExpenseCards'

class AllExpense extends Component {
    render() {
        return (
            <div>
                <div className="activity">
                    <h3 className="activityHead px-3">All Expense</h3>
                </div>
                {Object.values(transaction).map(item => (
                    <ExpenseCards paid_by={item.paid_by} amount={item.amount} desc={item.desc} owes={item.owes} />
                ))}
            </div>
        )
    }
}

export default AllExpense
