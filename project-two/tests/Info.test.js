import React from 'react';
import { shallow , mount } from 'enzyme';
import Info from '../src/components/Info/Info';

describe('Shallow Info', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Info />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })
})