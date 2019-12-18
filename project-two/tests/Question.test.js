import React from 'react';
import { shallow , mount } from 'enzyme';
import Question from '../src/containers/Question/Question';
import Answers from '../src/components/Answers/Answers'
import Submit from '../src/components/Submit/Submit'

describe('Shallow Question', () => {
  let wrapper;
  let questionInfo =     {
    category: "General Knowledge",
    difficulty: "easy",
    question: "The likeness of which president is featured on the rare $2 bill of USA currency?",
    correct_answer: "Thomas Jefferson",
    incorrect_answers: [
    "Martin Van Buren",
    "Ulysses Grant",
    "John Quincy Adams"
    ]
    }
  
  beforeEach(() => {wrapper = shallow(<Question />)
    wrapper.setProps({ questionInfo: questionInfo })
     // this automatically tests for rendering without crashing.

  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render an <Answers/> and <Submit/> component', () => {
      expect(wrapper.find(Answers).length).toEqual(1)
      expect(wrapper.find(Submit).length).toEqual(1)
  })
})
});