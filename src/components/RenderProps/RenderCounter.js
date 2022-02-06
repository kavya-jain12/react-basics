import React, { Component } from 'react';

class RenderCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    // Passing render props as children
    // to fetch the values, use this.props.children() below

    // <RenderCounter>
    //    {(count, incrementCount) => (
    //       <ClickCounterTwo count={count} incrementCount={incrementCount} />
    //     )}
    //  </RenderCounter> 

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

export default RenderCounter;
