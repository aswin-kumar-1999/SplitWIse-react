import React, { Component } from 'react'
import Cards from '../UI/Cards'
import './Expense.css'
class Share extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uncheckname: []
        }
    }

    checkHandler = (event) => {
        if (!event.target.checked) {
            this.setState((prevState) => ({
                uncheckname: [...prevState.uncheckname, event.target.value]
            }))
        }
    }
    checkNameHandler = () => {
        console.log("uncheck")
        this.props.onCheckedName(this.state.uncheckname)
    }
    render() {
        return (
            <div className="share-container">
                <Cards>
                    <header
                        className='d-flex justify-content-between align-items-center px-2 py-1 fs-5 fw-bold rounded-top-3 '
                    >
                        <span>Share an expense</span>
                        <i className="fas fa-times" onClick={this.checkNameHandler}></i>
                    </header>
                    <div className='px-3'>
                        <h4>Split equally</h4>
                        <div class="form-check">
                            {this.props.nameList.map((name, index) => (
                                <div key={index}>
                                    <input
                                        className="form-check-input" type="checkbox"
                                        value={name} id="flexCheckChecked"
                                        defaultChecked onChange={this.checkHandler}
                                    />
                                    <label className="form-check-label" for="flexCheckChecked">
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

export default Share
