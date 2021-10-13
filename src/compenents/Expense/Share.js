import React, { Component } from 'react'
import Cards from '../UI/Cards'
import style from './Expense.module.css'
class Share extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    checkHandler=(event)=>{
        console.log(event.target.value)
    }

    render() {
        { console.log("share") }
        return (
            <div className={style["share-container"]}>
                <Cards>
                    <header
                        className='d-flex justify-content-between align-items-center px-2 py-1 fs-5 fw-bold rounded-top-3 '
                        style={{ background: '#07e2b3', color: "white" }}
                    >
                        <span>Share an expense</span>
                        <i class="fas fa-times" onClick={this.props.onClick}></i>
                    </header>
                    <div className='px-3'>
                        <h4>Split equally</h4>
                        <div class="form-check">
                            {this.props.nameList.map((name, index) => (
                                <div key={index}>
                                    <input 
                                    class="form-check-input" type="checkbox" 
                                    value={name} id="flexCheckChecked" 
                                    defaultChecked onChange={this.checkHandler}/>
                                    <label class="form-check-label" for="flexCheckChecked">
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
