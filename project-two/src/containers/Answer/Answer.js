import React, { Component } from 'react'

export default class Answer extends Component {
    render() {
        return (
            <div>
                <input type='radio' name='answer'>{this.props.answer}</input>
            </div>
        )
    }
}
