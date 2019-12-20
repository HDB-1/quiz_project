import React from 'react'

export default function Progress(props) {
    return (
        <div>
            <h5 id="progress">{props.question.current +1}/{props.question.total}</h5>
        </div>
    )
}
