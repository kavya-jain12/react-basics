import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: "Parent"
        }
        this.welcomeParent = this.welcomeParent.bind(this)
    }
    
    welcomeParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <ChildComponent welcomeParent={this.welcomeParent} />
            </div>
        );
    }
}

export default ParentComponent;
