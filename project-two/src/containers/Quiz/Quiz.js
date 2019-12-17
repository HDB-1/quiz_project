import React, { Component } from 'react'
import Info from '../../components/Info/Info'
import Navigation from '../../components/Navigation/Navigation'
import Question from '../../containers/Question/Question'


const setup = { difficulty: 'easy',
                numOfQuestions: '5',
                category:'9',
                numOfPlayers:'1'}

export function APIRequest(quizInfo) {
    const baseUrl = 'https://opentdb.com/api.php?type=multiple&'
    let url = baseUrl + `category=${quizInfo.category}&` + `amount=${quizInfo.numOfQuestions}&` + `difficulty=${quizInfo.difficulty}`
    return fetch(url).then(res => res.json())
}
class Quiz extends Component {

    state = {
        questions: [{categoryTitle:"General Knowledge"}]
    }
    componentDidMount() {
        // console.log('quiz component mounted');
        
    }


    render() {
        return (
            <div>
                <Info title={"General Knowledge"} users={1} question={{current:1, total:10}}/>
                <Question />
                <Navigation />
            </div>
        )
    }
}

export default Quiz
