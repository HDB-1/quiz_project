import React from 'react'
import Title from './Title/Title'
import Progress from './Progress/Progress'
import User from './User/User'
export default function Info(props) {
    return (
        <div>
            <User currentUser={props.users}/>
            <Title/>
            <Progress/>
        </div>
    )
}
