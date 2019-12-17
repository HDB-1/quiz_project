import React, { Component } from 'react'


export function APIRequest(quizInfo) {
    return fetch('https://opentdb.com/api.php?amount=5').then(res => res.json())
}
class Quiz extends Component {

    componentDidMount() {
        console.log('quiz component mounted');
        
    }


    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Quiz
