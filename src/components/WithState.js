import React, { Component, useState } from 'react';

// Class Component
// class WithState extends Component {
//     constructor() {
//         super(); // extend react component class and call to base class constructor
//         this.state = {
//             message: "Welcome State"
//         }
//     }

//     handleClick = () => {
//         this.setState({message: "Thank you for clicking!"})
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={() => this.handleClick()}>Click Me</button>
//             </div>
//         );
//     }
// }


// Functional Component
const WithState = () => {
    const [message, setMessage] = useState("Welcome State");

    const handleClick = () => {
        setMessage("Thank you for clicking!")
    }

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default WithState;
