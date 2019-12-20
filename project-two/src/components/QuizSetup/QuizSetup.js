import React, { Component } from "react";
import { Link } from "react-router-dom";
class QuizSetup extends Component {
  render() {
    return (
      <div>
        <label for="difficultyDropdown">Difficulty</label>
        <select
          className="difficultyDropDown"
          onChange={event =>
            this.props.handleChange("difficulty", event.target.value)
          }
        >
          <option value="easy" defaultValue="selected">
            Easy
          </option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label for="categoryDropdown">Category</label>
        <select
          className="categoryDropDown"
          onChange={event =>
            this.props.handleChange("category", event.target.value)
          }
        >
          <option value="9" defaultValue="selected">
            General Knowledge
          </option>
          <option value="21">Sports</option>
          <option value="17">Science & Nature</option>
          <option value="23">History</option>
          <option value="28">Vehicles</option>
        </select>
        <label for="numberOfQuestionsDropdown">Number of questions</label>
        <select
          className="numberOfQuestionsDropdown"
          onChange={event =>
            this.props.handleChange("numOfQuestions", event.target.value)
          }
        >
          <option value="5" defaultValue="selected">
            5
          </option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <label for="numberOfPlayersDropdown">Number of players</label>
        <select
          className="numberOfPlayersDropdown"
          onChange={event =>
            this.props.handleChange("numOfPlayers", event.target.value)
          }
        >
          <option value="1" defaultValue="selected">
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <Link to="/quiz">
          <button>Start Quiz</button>
        </Link>
      </div>
    );
  }
}

export default QuizSetup;
