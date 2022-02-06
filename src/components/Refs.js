import React, { Component } from 'react';

class Refs extends Component {

    //focus input box using REFS

    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleClick = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }

    // focus input box using CALLBACK REFS

    // constructor(props) {
    //     super(props);

    //     this.cbRef = null
    //     this.setCbRef = (element) => {
    //         this.cbRef = element
    //     }
    // }

    // componentDidMount() {
    //     // react will call ref callback with dom element when component mounts, and null when unmounts 
    //     if(this.cbRef) {
    //         this.cbRef.focus()
    //     }
    // }

    // handleClick = () => {
    //     alert(this.cbRef.value)
    // }
    
    // render() {
    //     return(
    //         <div>
    //             <input type="text" ref={this.setCbRef} />
    //             <button onClick={this.handleClick}>Click</button>
    //         </div>
    //     )
    // }
}

export default Refs;
