import React, { Component } from 'react'

class ExpenseCards extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}

    render() {
        return (
            <div>
                 <div className='activityBlock'>
                        <img src="https://s3.amazonaws.com/splitwise/uploads/notifications/v2021/0-18.png" alt="%" height="50px" width="50px" />
                        <div className='mx-2'>{this.props.paid_by} paid  {(+this.props.amount).toFixed(2)} for {this.props.desc} and need to be shared between {this.props.owes} {this.props.paid_by    }
                        </div>
                    </div>
            </div>
        )
    }
}

export default ExpenseCards
