import React from 'react'

export default function Navigation(props) {
    return (
        <div>
            <button id="nextBtn" onClick={props.nextQuestion}>Next Question</button>
            <button id="previousBtn" onClick={props.previousQuestion}>Skip Question</button>
        </div>
    )
}
