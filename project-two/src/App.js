import React from 'react';
import './App.css';
import Quiz from "./containers/Quiz/Quiz";
import QuizSetup from "./components/QuizSetup/QuizSetup";

class App extends React.Component {

  render(){
  return (
    <div>
      <Quiz />
      <QuizSetup />
    </div>
  );
}
}

export default App;
