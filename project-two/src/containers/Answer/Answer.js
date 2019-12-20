import React, { Component } from "react";

export default function Answer (props) {
  
    return (
      <div>
        <input id={props.id} type="button" value={(props.answer)} name="answer" onClick={() => props.submit(props.answer)}/>
      </div>
    )
  }
