import React, { Component } from 'react'

class QuizSetup extends Component {
    render() {
        return (
            <div>
                <select className="difficultyDropDown">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select className="categoryDropDown">
                    <option value="9">General Knowledge</option>
                    <option value="21">Sports</option>
                    <option value="17">Science & Nature</option>
                    <option value="23">History</option>
                    <option value="28">Vehicles</option>
                </select>
                <select className = 'numberOfQuestionsDropdown'>
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

