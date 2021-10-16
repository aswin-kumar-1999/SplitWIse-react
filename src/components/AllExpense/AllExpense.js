import React, { Component } from 'react'
import { transaction } from '../Store/Store'

class AllExpense extends Component {
    render() {
        return (
            <div>
                <div className="activity">
                    <h3 className="activityHead px-3">All Expense</h3>
                </div>
                {Object.values(transaction).map(item => (
                    <div className='activityBlock'>
                        <img src="https://s3.amazonaws.com/splitwise/uploads/notifications/v2021/0-18.png" alt="%" height="50px" width="50px" />
                        <div className='mx-2'>{item.paid_by} paid  {(+item.amount).toFixed(2)} for {item.desc} and need to be shared between {item.owes}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default AllExpense
