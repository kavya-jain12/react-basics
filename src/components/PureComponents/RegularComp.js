import React, { Component } from 'react';

class RegularComp extends Component {

    // renders everytime parent comp state value changes
    render() {
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        );
    }
}

export default RegularComp;
