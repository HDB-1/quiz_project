import React, { Component } from "react";
import Answers from "../../components/Answers/Answers";
import Submit from "../../components/Submit/Submit";
export class Question extends Component {

    state={answerSelected: ""}

    updateSelected = (value) => {
        this.setState({answerSelected : value})
    }
    componentDidMount()
    // To do - fix resetting 'answerSelected' on submission of an answer
    {
        console.log('question did mount')
        this.setState({answerSelected: ""})
    }
  render() {
    return (
      <div>
        <h4 id="questionName">{this.props.questionInfo.question}</h4>
        <Answers
          correct_answer={this.props.questionInfo.correct_answer}
          incorrect_answers={this.props.questionInfo.incorrect_answers}
          updateSelected={this.updateSelected}
        />
        <Submit skip={this.props.skip} submit={this.props.submit} answerSelected={this.state.answerSelected}/>
      </div>
    );
  }
}
export default Question;
