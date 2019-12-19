import React from "react";
import Answer from "../../containers/Answer/Answer";

export default function Answers(props) {
  let answers = [props.correct_answer, ...props.incorrect_answers];

  for (let i = answers.length - 1; i >= 0; i--) {
    let arrayItemForSwitching = answers[i];
    let targetIndex = Math.floor(Math.random() * (answers.length - 1));
    answers[i] = answers[targetIndex];
    answers[targetIndex] = arrayItemForSwitching;
  }

  return (
    <div>
      {answers.map((answer, index) => {
        return <Answer key={index} id={index} answer={answer} submit={props.submit} />;
      })}
    </div>
  );
}
