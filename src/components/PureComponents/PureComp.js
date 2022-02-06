import React, { PureComponent } from 'react';

class PureComp extends PureComponent {

    // this componenet is called in Parent Comp
    // only renders if shouldComponentUpdate is set to true
    // does a shallow comparision with the values and only renders if values set in different
    // In this case, we are setting the same value in parent comp every 2000 mili sec, hence pure component will not render again
    // use pure components for performance boost

    render() {
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        );
    }
}

export default PureComp;
