import React, { Component } from 'react'
import Cards from '../UI/Cards'
import style from './Expense.module.css'
class Share extends Component {
    render() {
        return (
            <div className={style["share-container"]}>
                <Cards>
                    <header
                        className='d-flex justify-content-between align-items-center px-2 py-1 fs-5 fw-bold rounded-top-3 '
                        style={{ background: '#07e2b3', color: "white" }}
                    >
                        <span>Share an expense</span>
                        <i class="fas fa-times" ></i>
                    </header>
                    <div>
                        <h4>Split equally</h4>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label class="form-check-label" for="flexCheckChecked">
                                Aswin
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label class="form-check-label" for="flexCheckChecked">
                                Hasrsh
                            </label>
                        </div>
                    </div>
                </Cards>
            </div>
        )
    }
}

export default Share
