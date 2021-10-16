import React, { Component } from "react";

export default class ActivityBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            greenColor: "#07e2b3",
            redColor: "#ff4000",
        };
    }


    render() {
        return (
            <div className="activityBlock d-flex justify-content-start align-items-center">
                <img src={this.props.img} alt="%" height="50px" width="50px" />
                {/* <div className="activityText"> */}
                <div className='d-flex justify-content-center align-items-center ' style={{ width: '100%' }}>
                    {this.props.type === 'credit' &&
                        <div>
                            <div>
                                you paid for {this.props.desc}
                                <div className='credit'>  {this.props.lentTo} lent {this.props.amount.toFixed(2)} from you</div>
                            </div>
                            <div>{this.props.date}</div>
                        </div>
                    }
                    {this.props.type === 'debt' &&
                        <div>
                            <div>
                                {this.props.youOwe} paid for {this.props.desc}
                                <div className='debt'>   you owe   {this.props.amount.toFixed(2)} from you</div>
                            </div>
                            <div>{this.props.date}</div>
                        </div>
                    }
                </div>
                {/* </div> */}
            </div>
        );
    }
}
