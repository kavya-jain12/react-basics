import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
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
                Parent Component {this.state.name}
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;
