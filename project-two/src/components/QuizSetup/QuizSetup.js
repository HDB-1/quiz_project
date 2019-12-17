import React, { Component } from 'react'

class QuizSetup extends Component {
    render() {
        return (
            <div>
                <select className="difficultyDropDown" onChange = {(event) => this.props.handleChange("difficulty", event.target.value)}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option> 
                    <option value="hard">Hard</option>
                </select>
                <select className="categoryDropDown" onChange = {(event) => this.props.handleChange("category", event.target.value)}>
                    <option value="9">General Knowledge</option>
                    <option value="21">Sports</option>
                    <option value="17">Science & Nature</option>
                    <option value="23">History</option>
                    <option value="28">Vehicles</option>
                </select>
                <select className = 'numberOfQuestionsDropdown' onChange = {(event) => this.props.handleChange("numOfQuestions", event.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>

                </select>
                <button onClick={[Function]}>This is a button</button>
            </div>
        )
    }
}

export default QuizSetup

