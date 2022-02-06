import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class ClickCounter extends Component {
    render() {
        // props coming from HOC which is WithCounter

        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCounter, 5);
