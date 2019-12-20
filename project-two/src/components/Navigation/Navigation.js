import React from 'react'

export default function Navigation(props) {
    return (
        <div>
            <button id="previousBtn" onClick={props.previous}>Previous Question</button>
            <button id="nextBtn" onClick={props.next}>Next Question</button>
        </div>
    )
}
