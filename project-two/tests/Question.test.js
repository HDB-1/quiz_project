import React from 'react';
import { shallow , mount } from 'enzyme';
import Question from '../src/containers/Question/Question';
import Answers from '../src/components/Answers/Answers'
import Submit from '../src/components/Submit/Submit'

let testInfo =     {
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

describe('Shallow Question', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Question questionInfo={testInfo}/>));// this automatically tests for rendering without crashing.

  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render an <Answers/> and <Submit/> component and an element with ID questionName', () => {
      expect(wrapper.find(Answers).length).toEqual(1)
      expect(wrapper.find(Submit).length).toEqual(1)
      expect(wrapper.find("#questionName").length).toEqual(1)
  })
  it('question name component should render {props.questionInfo.question}', () => {
    expect(wrapper.find("#questionName").at(0).text()).toEqual(testInfo.question);
  });

});
describe('Mounted Question', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Question questionInfo={testInfo}/>)
  })

  it('<Answers /> component should render with props correct_answer and incorrect_answers(array)', () => {
    expect(wrapper.find(Answers).props()).toHaveProperty('correct_answer' , testInfo.correct_answer);
    expect(wrapper.find(Answers).props()).toHaveProperty('incorrect_answers' , testInfo.incorrect_answers);
  })
})