import React from 'react';
import { shallow } from 'enzyme';
import Answers from '../src/components/Answers/Answers'
import Answer from '../src/containers/Answer/Answer'

describe('Shallow Answers', () => {
  let wrapper;

    const answers = ["1", "2", "3", "4"]

  beforeEach(() => wrapper = shallow(<Answers answers={answers}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render 4 answer components', () => {
    expect(wrapper.find(Answer).length).toEqual(4);
  });
});