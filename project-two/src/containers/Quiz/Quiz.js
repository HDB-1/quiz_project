import React, { Component } from "react";
import Info from "../../components/Info/Info";
import Navigation from "../../components/Navigation/Navigation";
import Question from "../../containers/Question/Question";
import { Route, Switch, Link } from "react-router-dom";
import Results from "../../containers/Results/Results";

class Quiz extends Component {
  
  state = {
    currentQuestionIndex: 0,
    questions: [],
    correctAnswers: [],
    userAnswers: [],
    currentPlayerIndex: 0 
  };
  componentDidMount() {
    for(let i = 0; i < this.props.quizInfo.numOfPlayers; i++){
      this.state.userAnswers.push([])
    }
    this.APIRequest(this.props.quizInfo);
  }

  submitQuestion = answerSelected => {
    let answerFound = false;

    // make an answer
    let newAnswer = {
      content: answerSelected,
      index: this.state.currentQuestionIndex
    };
    let newAnswerArray = this.state.userAnswers[this.state.currentPlayerIndex]; // new answers array
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
    let allUserAnswers = this.state.userAnswers;

    allUserAnswers[this.state.currentPlayerIndex] = newAnswerArray
    this.setState({ userAnswers: allUserAnswers });
    if(this.state.currentPlayerIndex === Number(this.props.quizInfo.numOfPlayers) - 1){
      this.nextQuestion();
      this.setState({currentPlayerIndex : 0})
    }
    else this.setState({currentPlayerIndex: this.state.currentPlayerIndex +1})
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
      `difficulty=${quizInfo.difficulty}&` + 
      'encode=base64'
      ;
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

  checkIfUsersHaveAnsweredAllQuestions = () => {
    let counter = 0;
    for(let answerArray of this.state.userAnswers){
      if(answerArray.length === this.state.correctAnswers.length){
        counter ++;
      }
    }
    if(counter === Number(this.props.quizInfo.numOfPlayers)) {
      return true;
    }
    else return false;
  }

  render() {
    return (
      <Switch>
        <Route exact path="/quiz">
          <div className="quizPage">
            {this.state.questions.length > 0 ? (
              <div>
                <Info
                  title={this.state.questions[0].category}
                  currentUser={this.state.currentPlayerIndex}
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
            {this.checkIfUsersHaveAnsweredAllQuestions()  && <Link to="/quiz/results">
              You have answered every question! Click here to go to results
              </Link>}
          </div>
        </Route>
        <Route path="/quiz/results">
          <Results userAnswers={this.state.userAnswers} correctAnswers={this.state.correctAnswers}/>
        </Route>
      </Switch>
    );
  }
}

export default Quiz;
