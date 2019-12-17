import React from 'react';
import { shallow } from 'enzyme';
import Answer from '../src/containers/Answer/Answer'

describe('Shallow Answer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Answer answer={'Answer 1'}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a radio button with the correct information', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').find({type: 'radio'}));
    expect(wrapper.find('input').text()).toEqual('Answer 1')
  });
});