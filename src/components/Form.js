import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            comment: "",
            topic: "react"
        }
    }

    handleUserChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, comment, topic} = this.state
        alert(`${username} ${comment} ${topic}`)
    }

    render() {
        const { username, comment, topic} = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={this.handleUserChange}
                        />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea
                            value={comment}
                            onChange={this.handleCommentChange}
                        />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
