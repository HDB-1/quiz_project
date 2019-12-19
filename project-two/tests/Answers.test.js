import React from "react";
import { shallow } from "enzyme";
import Answers from "../src/components/Answers/Answers";
import Answer from "../src/containers/Answer/Answer";

describe("Shallow Answers", () => {
  let wrapper;
  const correct_answer = "Thomas Jefferson";
  const incorrect_answers = [
    "Martin Van Buren",
    "Ulysses Grant",
    "John Quincy Adams"
  ];

  beforeEach(
    () =>
      (wrapper = shallow(
        <Answers
          correct_answer={correct_answer}
          incorrect_answers={incorrect_answers}
        />
      ))
  );
  it("should create an array using correct answer and incorrect answers of length 4", () => {
    expect(wrapper.find(Answer).length).toEqual(4);
  });
});
