import React, { Component } from "react";
import Info from "../../components/Info/Info";
import Navigation from "../../components/Navigation/Navigation";
import Question from "../../containers/Question/Question";
import { Route, Switch, Link } from "react-router-dom";

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
    currentQuestionIndex: 0,
    questions: [],
    correctAnswers: [],
    userAnswers: []
  };
  componentDidMount() {
    this.APIRequest(this.props.quizInfo);
  }
  skipQuestion = () => {
    //handle skipping of question
  };
  submitQuestion = answerSelected => {
    let answerFound = false;
    if (answerSelected) {
      // make an answer
      let newAnswer = {
        content: answerSelected,
        index: this.state.currentQuestionIndex
      };
      let newAnswerArray = this.state.userAnswers; // new answers array
      //check if index of new answer is in answer array
      //if not add it to the array
      //if so update array value
      if (newAnswerArray.length > 0) {
        // if there are any answers
        newAnswerArray.map(answer => {
          if (answer.index === newAnswer.index) {
            answer.content = newAnswer.content;
            answerFound = true;
          }
          return answer;
        });
      }
      if (!answerFound) {
        newAnswerArray.push(newAnswer);
      }
      this.setState({ userAnswers: newAnswerArray });
      this.nextQuestion();
    }
  };

  nextQuestion = () => {
    if (this.state.currentQuestionIndex < this.state.questions.length - 1) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1
      });
    }
  };
  previousQuestion = () => {
    if (this.state.currentQuestionIndex > 0) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex - 1
      });
    }
  };

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
      .then(json => {
        let correctAnswers = json.results.map(question => {
          return question.correct_answer;
        });
        this.setState({
          questions: json.results,
          correctAnswers: correctAnswers
        });
      })
      .catch(error => {
        //handle error
      });
  };
  markQuiz = () => {
    let correctAnswers = 0;
    for (let i = 0; i < this.state.userAnswers.length; i++) {
      let currentAnswer = this.state.userAnswers[i];
      if (
        currentAnswer.content === this.state.correctAnswers[currentAnswer.index]
      ) {
        correctAnswers++;
      }
    }
    return correctAnswers;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/quiz">
          <div className="quizPage">
            {this.state.questions.length > 0 ? (
              <div>
                <Info
                  title={this.state.questions[0].category}
                  users={this.props.quizInfo.numOfPlayers}
                  question={{
                    current: this.state.currentQuestionIndex,
                    total: this.props.quizInfo.numOfQuestions
                  }}
                />
                <Question
                  skip={this.skipQuestion}
                  submit={this.submitQuestion}
                  questionInfo={
                    this.state.questions[this.state.currentQuestionIndex]
                  }
                />
                <Navigation
                  next={this.nextQuestion}
                  previous={this.previousQuestion}
                />
              </div>
            ) : (
              <p>Loading...</p>
            )}
            <Link to="/quiz/results">go to results</Link>
          </div>
        </Route>
        <Route path="/quiz/results">
          <h2>This is the results </h2>
        </Route>
      </Switch>
    );
  }
}

export default Quiz;
