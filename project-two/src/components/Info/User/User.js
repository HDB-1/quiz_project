import React from 'react'

export default function User(props) {
    return (
        <div>
            <p id="currentUser">Player {props.currentUser}</p>
        </div>
    )
}
