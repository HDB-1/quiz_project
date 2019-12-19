import React, { Component } from "react";
import Answers from "../../components/Answers/Answers";
export class Question extends Component {
  render() {
    return (
      <div>
        <h4 id="questionName">{this.props.questionInfo.question}</h4>
        <Answers
          correct_answer={this.props.questionInfo.correct_answer}
          incorrect_answers={this.props.questionInfo.incorrect_answers}
          submit={this.props.submit}
        />
      </div>
    );
  }
}
export default Question;
