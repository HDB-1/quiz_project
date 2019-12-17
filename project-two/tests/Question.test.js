import React from 'react';
import { shallow , mount } from 'enzyme';
import Question from '../src/containers/Question/Question';
import Answers from '../src/components/Answers/Answers'
import Submit from '../src/components/Submit/Submit'

describe('Shallow Question', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Question />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render an <Answers/> and <Submit/> component', ()=>{
      expect(wrapper.find(Answers).length).toEqual(1)
      expect(wrapper.find(Submit).length).toEqual(1)
  })

});