import React from 'react';

// Class Component
// class WithProps extends React.Component {
//     render() {

//         // destructure props and state

//         // const { name } = this.props
//         // const { someState } = this.state

//         return <h1>{this.props.name}</h1>
//     }
// }


// Functional Component
const WithProps = props => {

    // Two ways to destructure props

    // const WithProps = ({ name }) => {
    // const { name } = props

    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}

export default WithProps;
