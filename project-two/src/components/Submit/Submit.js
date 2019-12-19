import React from 'react'
import './Submit.css'
export default function Submit(props) {
    return (
        <div className='submit'>
            <button id='skipBtn' onClick={props.skip}>Skip</button>
            <button id='submitBtn' onClick={() => props.submit(props.answerSelected)}>Submit</button>
        </div>
    )
}
