import React, { Component } from "react"

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class EnhancedComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            return <OriginalComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props} // pass all the self props to the component
            />
        }
    }
    return EnhancedComponent
}

export default UpdatedComponent