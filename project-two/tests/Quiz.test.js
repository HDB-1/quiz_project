import React from 'react';
import { shallow , mount } from 'enzyme';
import Quiz from '../src/containers/Quiz/Quiz';



describe('Shallow NavBar', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Quiz />)); // this automatically tests for rendering without crashing.

  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })

  
})