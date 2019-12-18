import React, { Component } from "react";
import Info from "../../components/Info/Info";
import Navigation from "../../components/Navigation/Navigation";
import Question from "../../containers/Question/Question";

const setup = {
  difficulty: "easy",
  numOfQuestions: "5",
  category: "9",
  numOfPlayers: "1"
};

const setup = { difficulty: 'easy',
                numOfQuestions: '5',
                category:'9',
                numOfPlayers:'1',
                question: 'this is a question',
                correct_answer: 'placeholder(THIS IS CORRECT!)',
                incorrect_answers: ["WRONG(1)","WRONG(2)","WRONG(3)"]
            }

class Quiz extends Component {
  state = {
    questions: []
  };
  componentDidMount() {
    this.APIRequest(this.props.quizInfo);
  }
  skipQuestion = () => {
    //handle skipping of question
  };
  submitQuestion = () => {
    //handle submitting of answer
  };

    state = {
        questionInfo: [{
            category: "category name!",
            difficulty: "easy",
            question: "What frubeiwuchnwugfcnkw?",
            correct_answer: "Right!",
            incorrect_answers: [
            "wrong 1",
            "wrong again",
            "still wrong"
            ]
        }],
        currentQuestionIndex: 0,
}
    componentDidMount() {
        // console.log('quiz component mounted'); 
    }
    skipQuestion = () => {
        //handle skipping of question
    }
    submitQuestion = () => {
        //handle submitting of answer
    }
  APIRequest = quizInfo => {
    const baseUrl = "https://opentdb.com/api.php?type=multiple&";
    let url =
      baseUrl +
      `category=${quizInfo.category}&` +
      `amount=${quizInfo.numOfQuestions}&` +
      `difficulty=${quizInfo.difficulty}`;
    return fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ questions: json.results }));
  };


    render() {
        return (
            <div>
                <Info title={"General Knowledge"} users={1} question={{current:1, total:10}}/>
                <Question skip={this.skipQuestion} submit={this.submitQuestion} questionInfo={this.state.questionInfo[this.state.currentQuestionIndex]} />
                <Navigation />
            </div>
        )
    }

}

export default Quiz;
