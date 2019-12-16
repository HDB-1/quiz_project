import React from 'react';
import './App.css';
import Quiz from "./containers/Quiz/Quiz";
import QuizSetup from "./components/QuizSetup/QuizSetup";
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class App extends React.Component {

  render(){
  return (
    <Router className="App">
      
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
