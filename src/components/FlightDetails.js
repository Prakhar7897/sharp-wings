
import React, { Component } from 'react'

import UserService from "./UserService";

export default class FlightDetails extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         id: this.props.match.params.id,
    //         user: {}
    //     }
    // }
    // componentDidMount(){
    //     UserService.getUserById(this.state.id).then( res => {
    //         this.setState({user: res.data});
    //     })
    // }
    // //

    render() {
        return (
            <div className='card4'>
                <h2>Find Flight:</h2>

                <div className="row">
                    <label> Flight Id: </label>
                    {/* <div> { this.state.user.id }</div> */}
                </div>
                <div className="row">
                    <label> Flight Name: </label>
                    {/* <div> { this.state.user.name }</div> */}
                </div>
                <div className="row">
                    <label> From: </label>
                    {/* <div> { this.state.user.from }</div> */}
                </div>
                <div className="row">
                    <label> To: </label>
                    {/* <div> { this.state.user.to }</div> */}
                    </div>


                </div>

                );
    }
}