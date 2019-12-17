import React, { Component } from 'react'
import Answers from '../../components/Answers/Answers'
import Submit from '../../components/Submit/Submit'
export class Question extends Component {
    render() {
        return (
            <div>
                <Answers answers={["1","2","3","4"]}/>
                <Submit skip={this.props.skip} submit={this.props.submit}/>
            </div>
        )
    }
}
export default Question
