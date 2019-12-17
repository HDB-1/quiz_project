import React from 'react';
import { shallow } from 'enzyme';
import Submit from '../src/components/Submit/Submit'

describe('Shallow Submit', () => {
  let wrapper;
  let submitMock = jest.fn()
  let skipMock = jest.fn()
  beforeEach(() => wrapper = shallow(<Submit submit={submitMock} skip={skipMock}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render Skip and Submit buttons',()=>{
      expect(wrapper.find('button').length).toEqual(2)
      expect(wrapper.find('#skipBtn').length).toEqual(1)
      expect(wrapper.find('#submitBtn').length).toEqual(1)
  })
  it('Skip button should call skip function', () => {
      wrapper.find('#skipBtn').simulate('click')
      expect(skipMock).toHaveBeenCalled()
  });
  it('Submit button should call submit function', () => {
    wrapper.find('#submitBtn').simulate('click')
    expect(submitMock).toHaveBeenCalled()
  });
});
