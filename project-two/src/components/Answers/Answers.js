import React from 'react'
import Answer from '../../containers/Answer/Answer';

export default function Answers(props) {
    return (
        <div>
            {props.answers.map((answer,index)=>{
                return <Answer key={index} id={index}answer={answer}/>
            })}
        </div>
    )
}
