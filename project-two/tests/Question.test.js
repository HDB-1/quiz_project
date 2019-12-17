import React from 'react';
import { shallow , mount } from 'enzyme';
import Question from '../src/containers/Question/Question';

describe('Shallow Question', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Question />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});