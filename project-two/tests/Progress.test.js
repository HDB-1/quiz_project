import React from 'react';
import { shallow} from 'enzyme';
import Progress from '../src/components/Info/Progress/Progress'



describe('Shallow Progress', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Progress question={{current:0, total:10}}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render one progress tag", () => {
      expect(wrapper.find('#progress').length).toEqual(1);
  });
  it("Should render the correct Progress", () => {
    expect(wrapper.find('#progress').text()).toEqual("1/10");
  });
});
