import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from "./containers/Quiz/Quiz";
import QuizSetup from "./components/QuizSetup/QuizSetup";
import NavBar from "./components/NavBar/NavBar";

class App extends React.Component {

  render(){
  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <QuizSetup />
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
