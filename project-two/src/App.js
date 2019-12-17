import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from "./containers/Quiz/Quiz";
import QuizSetup from "./components/QuizSetup/QuizSetup";
import NavBar from "./components/NavBar/NavBar";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {quizSetup: {difficulty: "easy", category: "9", numOfQuestions: "10"}}; 
    // Setting default quiz values. Eventually this should be built by a componentDidMount function in quizSetup.js
  }

  setQuizState = (quizSetupCharacteristic, characteristicValue) => {
    let quizSetupCopy = this.state.quizSetup;
    let characteristicKey = quizSetupCharacteristic
    quizSetupCopy[characteristicKey] = characteristicValue;
    this.setState({quizSetup: quizSetupCopy});
  }

  render(){
  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <QuizSetup handleChange = {this.setQuizState} />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}
}

export default App;
