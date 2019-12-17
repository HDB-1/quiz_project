import React from 'react';
import { shallow } from 'enzyme';
import Answers from '../src/components/Answers/Answers'
import Answer from '../src/containers/Answer/Answer'

describe('Shallow Answers', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Answers />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render an <Answer/> component', () => {
      expect(wrapper.find(Answer).length).toEqual(1);
  });
});