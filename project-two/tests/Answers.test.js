import React from "react";
import { shallow } from "enzyme";
import Answers from "../src/components/Answers/Answers";
import Answer from "../src/containers/Answer/Answer";

describe("Shallow Answers", () => {
  let wrapper;

  // const answers = ["1", "2", "3", "4"]
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

  // this automatically tests for rendering without crashing.
  // it("Should render correctly", () => {
  //   expect(wrapper).toMatchSnapshot();
  // });
  it("should create an array using correct answer and incorrect answers of length 4", () => {
    expect(wrapper.find(Answer).length).toEqual(4);
  });
  // it('shuffle function should work', () => {
  //   expect
  // })
});
