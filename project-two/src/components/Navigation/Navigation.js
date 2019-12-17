import React from 'react'

export default function Navigation(props) {
    return (
        <div>
            <button id="nextBtn" onClick={props.nextQuestion}></button>
            <button id="previousBtn" onClick={props.previousQuestion}></button>
        </div>
    )
}
