import React, { Component } from 'react'

class QuizSetup extends Component {
    render() {
        return (
            <div>
                <select>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
        )
    }
}

export default QuizSetup

