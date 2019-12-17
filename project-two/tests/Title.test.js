import React from 'react';
import { shallow , mount } from 'enzyme';
import Title from '../src/components/Info/Title/Title'



describe('Shallow Title', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Title title={"General Knowledge"}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render one title tag", () => {
      expect(wrapper.find('#title').length).toEqual(1);
  });
  it("Should render the correct Title", () => {
    expect(wrapper.find('#title').text()).toEqual("General Knowledge");
  });
});
