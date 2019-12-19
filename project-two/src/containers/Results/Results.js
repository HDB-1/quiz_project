import React , { Component } from 'react'

class Results extends Component{

    markQuiz = (userAnswers, correctAnswers) => {
        let correctAnswerCounter = 0;
        if(correctAnswers && userAnswers){
        for (let i = 0; i < userAnswers.length; i++) {
          let currentAnswer = userAnswers[i];
          if (
            currentAnswer.content === correctAnswers[currentAnswer.index]
          ) {
            correctAnswerCounter++;
          }
        }
        return correctAnswerCounter;
        }
      };

    // componentDidMount(){
    //     this.markQuiz(this.props.userAnswers, this.props.correctAnswers)

    // }

    render(){

        let userScore = this.markQuiz(this.props.userAnswers, this.props.correctAnswers)

        return(
            <div className='resultsContainer'>
                <h2 id="results" >This is your score: {userScore} / {this.props.correctAnswers.length}</h2>

            </div>
        )
    }


}

export default Results;