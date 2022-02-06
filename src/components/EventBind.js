import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: "World"
        })
        console.log("this", this); // without bind it gives undefined
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

// Types of binding
// onClick={this.clickHandler.bind(this)}
// onClick={() => this.clickHandler()}
// this.clickHandler = this.clickHandler.bind(this) in constructor - RECOMMENDED
// const clickHandler = () => {} // using arrow function also binds this


export default EventBind;
