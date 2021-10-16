import React, { Component } from 'react'
import BackDrop from '../UI/BackDrop';
import Cards from '../UI/Cards';
import { connect } from "react-redux";
import { updateUser } from '../../redux/actions';
import { settler } from '../Store/Store'
import './Settle.css'
export class Settle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            settleUp: [],
            isSpinner: 0
        }
    }

    componentDidMount() {
        const settleUp = {};
        for (let debt of this.props.debt) {
            console.log(debt[0], debt[1])
            const sharePerson = debt[0].split(', ');
            for (let lent of sharePerson) {
                settleUp[lent] = -debt[1] - (settleUp[lent] ?? 0)
            }
        }
        for (let credit of this.props.credit) {
            console.log(credit[0], credit[1])
            const sharePerson = credit[0].split(', ');
            for (let owe of sharePerson) {
                settleUp[owe] = credit[1] + (settleUp[owe] ?? 0)
            }
        }
        this.setState({ settleUp: Object.entries(settleUp) })
    }

    closeHandler = () => {
        this.props.onClose();
    }
    settledUpHandler = () => {
        this.props.onClose(true)
    }
    settleHandler = () => {
        settler(this.props.user)
        this.setState({ isSpinner: 1 })
        setTimeout(() => {
            this.setState({ isSpinner: 2 })
        }, 2000)
    }
    render() {
        // {
        //     console.log('User', user)
        //     console.log("Transation", transaction)
        //     console.log("Group", group)
        // }
        return (
            <BackDrop>
                <Cards>
                    {this.state.isSpinner === 0 &&
                        <div>
                            <header className='header d-flex justify-content-between align-items-center rounded-top px-2'>
                                <h4>Settle Up</h4>
                                <i className="fas fa-times" onClick={this.closeHandler}></i>
                            </header>

                            <main>
                                <div>
                                    {this.state.settleUp.map((settle, index) => (
                                        <div key={index}>
                                            {settle[1] < 0 &&
                                                <div >
                                                    <span className='name'> you owe </span>
                                                    <span className='debt'> {settle[0]} {(settle[1] * -1).toFixed(2)}</span>
                                                </div>
                                            }
                                            {settle[1] > 0 &&
                                                <div>
                                                    <span className='name'>{settle[0]} </span>
                                                    <span className='credit'> owe you  {settle[1].toFixed(2)}</span>
                                                </div>
                                            }
                                        </div>
                                    ))}
                                    <hr />
                                    <h5>Total Amount:
                                        {this.props.total > 0 && (
                                            <span className='credit'> {this.props.total.toFixed(2)} </span>
                                        )}
                                        {this.props.total < 0 && (
                                            <span className='debt'> {(this.props.total * -1).toFixed(2)} </span>
                                        )}
                                    </h5>
                                </div>
                                <div className='d-flex fs-3 justify-content-center my-1'>
                                    <button type='button' className='btn btn-settle' onClick={this.settleHandler}>Settle Up</button>
                                </div>
                            </main>
                        </div>
                    }
                    {this.state.isSpinner === 1 &&

                        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                    }
                    {this.state.isSpinner === 2 &&
                        <div className=''>
                            <header className='header d-flex justify-content-between align-items-center rounded-top px-2'>
                                <h4>Settle Up</h4>
                                <i className="fas fa-times" onClick={this.settledUpHandler}></i>
                            </header>
                            <h2>Settled Up</h2>
                        </div>
                    }
                </Cards>
            </BackDrop>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUser: (payload) => {
            return dispatch(updateUser(payload))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Settle);
