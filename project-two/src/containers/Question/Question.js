import React, { Component } from 'react'
import Answers from '../../components/Answers/Answers'
import Submit from '../../components/Submit/Submit'
export class Question extends Component {

    render() {
        return (
            <div>
                <h4 id="questionName">{this.props.questionInfo.question}</h4>
                <Answers answers={["1","2","3","4"]} 
                correct_answer={this.props.questionInfo.correct_answer}
                incorrect_answers={this.props.questionInfo.incorrect_answers}
                />
                <Submit skip={this.props.skip} submit={this.props.submit}/>
            </div>
        )
    }
}
export default Question