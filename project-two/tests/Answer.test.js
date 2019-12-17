import React from 'react';
import { shallow } from 'enzyme';
import Answer from '../src/containers/Answer/Answer'

describe('Shallow Answer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Answer />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});