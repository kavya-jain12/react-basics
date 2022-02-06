import React, { Component } from 'react';
import { ContextConsumer } from './withContext';

class ComponentC extends Component {
    render() {
        return (
            <div>
                <ContextConsumer>
                    {name => {
                        return <h5>Hello {name} </h5>
                    }}
                </ContextConsumer>
            </div>
        );
    }
}

export default ComponentC;
