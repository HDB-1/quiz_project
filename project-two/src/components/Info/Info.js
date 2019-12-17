import React from 'react'
import Title from './Title/Title'
import Progress from './Progress/Progress'
import User from './User/User'
import './Info.css'

export default function Info(props) {
    return (
        <div className='info'>
            <User currentUser={props.users}/>
            <Title title={props.title}/>
            <Progress question={{current:1, total:10}}/>
        </div>
    )
}
