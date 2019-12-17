import React, { Component } from 'react'
import Answers from '../../components/Answers/Answers'
import Submit from '../../components/Submit/Submit'
export class Question extends Component {
    render() {
        return (
            <div>
                <Answers/>
                <Submit/>
            </div>
        )
    }
}
export default Question
