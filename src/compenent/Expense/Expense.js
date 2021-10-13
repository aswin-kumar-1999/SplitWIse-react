import React, { Component } from 'react'
import BackDrop from '../UI/BackDrop'
import style from './Expense.module.css'
import Share from './Share'
import Cards from '../UI/Cards'

class Expense extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paid: 'you',
            owe: '',
            share: 'equally',
            shareamount: 0.00,
            group: 'No group',
            splitShare: false
        }
    }

    shareHandler = () => {
        this.setState({ splitShare: true })
    }

    render() {
        return (
            <>
                <BackDrop>
                    <Cards>
                        <header
                            className='d-flex justify-content-between align-items-center px-2 py-1 fs-5 fw-bold rounded-top-3 '
                            style={{ background: '#07e2b3', color: "white" }}
                        >
                            <span>Add an expense</span>
                            <i class="fas fa-times" onClick={this.props.onBackDrop}></i>
                        </header>
                        <main>
                            <div className='d-flex'>
                                <div className='row p-1'>
                                    <div className='col-5'> With you and :</div>
                                    <input type='text' className='col-6' placeholder='Enter the name'></input>
                                </div>
                            </div>
                            <hr />
                            <div className='d-flex ps-3 pe-1'>
                                <img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" class="category" alt="img" width='70px' height='70px' className='rounded-3' />
                                <div className='ps-2'>
                                    <input type='text' className='col-9' placeholder='Enter a description'></input>
                                    <br />
                                    ₹<input type='text' className='col-8' placeholder='0.00'></input>
                                </div>
                            </div>
                            <div className='my-2 px-3'>
                                <div className='text-center'>
                                    Paid by <span className={style.share}>{this.state.paid}</span> and split
                                    <span className={style.share} onClick={this.shareHandler}> {this.state.share}</span>
                                </div>
                                <div className='text-center'>({this.state.shareamount}/person)</div>
                            </div>
                            <div className={style.btn}>
                                <button type='button' >{this.state.group}</button>
                            </div>
                        </main>
                        <hr />
                        <div >
                            <div className='row d-flex justify-content-end m-2'>
                                <button type='button' className='btn btn-outline-secondary bg-opacity-10 col-3 me-2' onClick={this.props.onBackDrop}>Cancel</button>
                                <button type='button' className='btn px-3 btn-settle col-3 me-2'>Save</button>
                            </div>
                        </div>
                    </Cards>

                </BackDrop>
                {this.state.splitShare && <Share />}
            </>
        )
    }
}

export default Expense
