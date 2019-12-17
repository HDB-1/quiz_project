import React from 'react';
import { shallow , mount } from 'enzyme';
import User from '../src/components/Info/User/User'



describe('Shallow User', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<User currentUser={1}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render one currentUser tag", () => {
      expect(wrapper.find('#currentUser').length).toEqual(1);
  });
  it("Should render the correct User", () => {
    expect(wrapper.find('#currentUser').text()).toEqual("Player 1");
  });
});
