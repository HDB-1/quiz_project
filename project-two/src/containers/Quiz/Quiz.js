import React, { Component } from "react";
import Info from "../../components/Info/Info";
import Navigation from "../../components/Navigation/Navigation";
import Question from "../../containers/Question/Question";


const setup = {
  difficulty: "easy",
  numOfQuestions: "5",
  category: "9",
  numOfPlayers: "1",
  question: "this is a question",
  correct_answer: "placeholder(THIS IS CORRECT!)",
  incorrect_answers: ["WRONG(1)", "WRONG(2)", "WRONG(3)"]
};


class Quiz extends Component {
  
  state = {
      questionInfo: [{
          category: "category name!",
          difficulty: "easy",
          question: "This is the first hard-coded initial question?",
          correct_answer: "Right!",
          incorrect_answers: [
          "wrong 1",
          "wrong again",
          "still wrong"
          ]
      }, {category: "category name!",
      difficulty: "easy",
      question: "This is the second hard-coded initial question?",
      correct_answer: "Right!",
      incorrect_answers: [
      "questionOptions2",
      "questionOptions3",
      "questionOptions4"
      ]}
    ],
      currentQuestionIndex: 0,
      questions: []
}
  componentDidMount() {
    this.APIRequest(this.props.quizInfo);
  }
  skipQuestion = () => {
    //handle skipping of question
  };
  submitQuestion = () => {
    //handle submitting of answer
  };

  nextQuestion = () => {
    this.setState({currentQuestionIndex : this.state.currentQuestionIndex + 1})
  }
  previousQuestion = () => {
    this.setState({currentQuestionIndex : this.state.currentQuestionIndex - 1})
  }

    componentDidMount() {
        // console.log('quiz component mounted'); 
    }
  APIRequest = quizInfo => {
    const baseUrl = "https://opentdb.com/api.php?type=multiple&";
    let url =
      baseUrl +
      `category=${quizInfo.category}&` +
      `amount=${quizInfo.numOfQuestions}&` +
      `difficulty=${quizInfo.difficulty}`;
    // console.log(url);
    // console.log(fetch(url));
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ questions: json.results }))
      .catch(error => {
        //handle error
      });
  };


    render() {
        return (
            <div>
            {this.state.questions.length > 0 && this.state.questions[0].type}
                <Info title={"General Knowledge"} users={1} question={{current:1, total:10}}/>
                <Question skip={this.skipQuestion} submit={this.submitQuestion} questionInfo={this.state.questionInfo[this.state.currentQuestionIndex]} />
                <Navigation next={this.nextQuestion} previous={this.previousQuestion}/>
            </div>
        )
    }


}

export default Quiz;
