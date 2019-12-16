import React from 'react';
import './App.css';
import Quiz from "./containers/Quiz/Quiz";
import { render } from 'enzyme';

class App extends React.Component {

  render(){
  return (
    <div>
      <Quiz />
    </div>
  );
}
}

export default App;
