import React, { Component } from 'react'
import Info from '../../components/Info/Info'
import Navigation from '../../components/Navigation/Navigation'
import Question from '../../containers/Question/Question'


const setup = { difficulty: 'easy',
                numOfQuestions: '5',
                topic:'9',
                numOfPlayers:'1'}

export function APIRequest(quizInfo) {
    const baseUrl = 'https://opentdb.com/api.php?type=multiple&'
    let url = baseUrl + `category=${quizInfo.topic}&` + `amount=${quizInfo.numOfQuestions}&` + `difficulty=${quizInfo.difficulty}`
    return fetch(url).then(res => res.json())
}
class Quiz extends Component {

    componentDidMount() {
        console.log('quiz component mounted');
        
    }


    render() {
        return (
            <div>
                <Info />
                <Question />
                <Navigation />
            </div>
        )
    }
}

export default Quiz
