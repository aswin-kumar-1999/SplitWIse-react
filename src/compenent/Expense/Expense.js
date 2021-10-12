import React, { Component } from 'react'
import BackDrop from '../UI/BackDrop'

class Expense extends Component {
    render() {
        return (
            <BackDrop>
                <header
                    className='d-flex justify-content-between align-items-center px-2 py-1 fs-5 fw-bold rounded-top-3 '
                    style={{ background: '#07e2b3', color: "white" }}
                >
                    <span>Add an expense</span>
                    <i class="fas fa-times"></i>
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
                            <br/>
                            ₹<input type='text' className='col-8' placeholder='0.00'></input>
                        </div>
                    </div>
                </main>
            </BackDrop>
        )
    }
}

export default Expense
