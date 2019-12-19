import React, { Component } from "react";

export default function Answer (props) {
  
    return (
      <div>
        <input id={props.id} type="radio" name="answer" onClick={() => props.updateSelected(props.answer)}/>
        <label htmlFor={props.id}>{props.answer}</label>
      </div>
    )
  }
