import React , { Component } from 'react'

class Results extends Component{

    markQuiz = (userAnswers, correctAnswers) => {
        let correctAnswerCounter = 0;
        let answersAndCorrectAnswers = []; // This will be returned in the 'markedQuizForDisplaying' object which this function returns.
        // This makes the array the correct length to start with, so that we can inject strings for each question at their relevant indexes.
        for(let i=0; i < userAnswers.length; i++){
            answersAndCorrectAnswers.push('placeholder text for displaying results');
        }

        if(correctAnswers && userAnswers){
        for (let i = 0; i < userAnswers.length; i++) {
          let currentAnswer = userAnswers[i];
          if (
            currentAnswer.content === correctAnswers[currentAnswer.index]
          ) {
              // If the answer is correct, the correct answer counter is increased AND a string is created saying that the user got the question correct.
            correctAnswerCounter++;
            answersAndCorrectAnswers[currentAnswer.index] =
            {answerText : `You answered ${currentAnswer.content}, which was correct!`, answerCorrect : true}
            // Adding a string for each question
          }
          else{
              // If it's wrong, a string is created giving the user the correct answer.
            answersAndCorrectAnswers[currentAnswer.index] =
            {answerText : `You answered ${currentAnswer.content}, which was wrong! Correct answer: ${correctAnswers[currentAnswer.index]}`,
            answerCorrect : false}
          }
        }
        let markedQuizForDisplaying = {correctAnswerCounter: correctAnswerCounter, answersAndCorrectAnswers: answersAndCorrectAnswers} 
        // So that both the pieces of info we need (score and correct answers) can be returned
        return markedQuizForDisplaying;
        }
      };

      setAnswerColor = (correctAnswerBool) => {
        return({'background-color' : correctAnswerBool ? 'green' : 'red'})
      }

    render(){

        let userResults = this.markQuiz(this.props.userAnswers, this.props.correctAnswers)

        return(
            <div className='resultsContainer'>
                <h2 id="results" >This is your score: {userResults.correctAnswerCounter} / {this.props.correctAnswers.length}</h2>
                <ol>
                {userResults.answersAndCorrectAnswers.map((obj) => {
                    return (
                        <li style={this.setAnswerColor(obj.answerCorrect)}>{obj.answerText}</li>
                    )
                })}
                </ol>

            </div>
        )
    }


}

export default Results;