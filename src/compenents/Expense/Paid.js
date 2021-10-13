import React, { Component } from 'react'
import Cards from '../UI/Cards'
import './Expense.css'

class paid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }
    payerhandler = (event) => {
        if (event.target.checked) {
            console.log("Payer", event.target.value)
            this.setState({name:event.target.value})
        }
    }
    sendPayer = () => {
        this.props.onCheckerPayer(this.state.name)
    }
    render() {
        return (
            <div className="share-container">
                <Cards>
                    <header
                        className='d-flex justify-content-between align-items-center px-2 py-1 fs-5 fw-bold rounded-top-3 paid'
                    >
                        <span>Choose payer</span>
                        <i className="fas fa-times" onClick={this.sendPayer}></i>
                    </header>
                    <div className='px-3'>
                        <div class="form-check">
                            {this.props.nameList.map((name, index) => (
                                <div key={index}>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={this.payerhandler} value={name}  />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Cards>
            </div>
        )
    }
}

export default paid
