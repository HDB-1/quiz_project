import React from 'react'
import Progress from './Progress/Progress'
import User from './User/User'
import './Info.css'

export default function Info(props) {
    return (
        <div className='info'>
            <User currentUser={props.currentUser}/>
            <h3 id="quizName">{(props.title)}</h3>
            <Progress question={{current: props.question.current, total: props.question.total}}/>
        </div>
    )
}
