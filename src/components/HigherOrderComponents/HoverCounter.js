import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class HoverCounter extends Component {
    render() {
        // props coming from HOC is WithCounter

        const { count, incrementCount } = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} times </h1>
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter, 10);
