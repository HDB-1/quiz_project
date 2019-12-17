import React from 'react';
import { shallow } from 'enzyme';
import Submit from '../src/components/Submit/Submit'

describe('Shallow Submit', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Submit />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
