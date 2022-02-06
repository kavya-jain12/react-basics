import React, { Component } from 'react';

class ConditionalRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // TYPE 1
        // if - else 
        // if(this.state.isLoggedIn) {
        //     return <h4>Welcome User</h4>
        // } else {
        //     return <h4>Welcome Guest</h4>
        // }

        // OR
        // if - else element 
        // let message;
        // if(this.state.isLoggedIn) {
        //     message = "Welcome User"
        // } else {
        //     message = "Welcome Guest"
        // }

        // ternary 
        return (
            <div>
                <h4>{this.state.isLoggedIn ? "Welcome User" : "Welcome Guest"}</h4>
            </div>
        );

        // short circuit
        // only one condition
        // return (
        //     this.state.isLoggedIn && <h4>{"Welcome User"}</h4>
        // )
    }
}

export default ConditionalRender;
