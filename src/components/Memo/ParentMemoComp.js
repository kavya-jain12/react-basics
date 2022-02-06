import React, { Component } from 'react';
import MemoComponent from './MemoComponent';

class ParentMemoComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "kavya"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "kavya"
            })
        }, 2000);
    }
    
    render() {
        return (
            <div>
                <MemoComponent name={this.state.name} />
            </div>
        );
    }
}

export default ParentMemoComp;
