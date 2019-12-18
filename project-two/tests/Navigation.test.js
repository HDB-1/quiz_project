import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../src/components/Navigation/Navigation'

describe('Shallow Navigation', () => {
  let wrapper;
  let nextQuestionMock = jest.fn()
  let previousQuestionMock = jest.fn()
  beforeEach(() => wrapper = shallow(<Navigation nextQuestion={nextQuestionMock} previousQuestion={previousQuestionMock}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render Next Question and Previous Question buttons',()=>{
      expect(wrapper.find('button').length).toEqual(2)
      expect(wrapper.find('#nextBtn').length).toEqual(1)
      expect(wrapper.find('#previousBtn').length).toEqual(1)
  })
  it('Next button should call nextQuestion function', () => {
      wrapper.find('#nextBtn').simulate('click')
      expect(nextQuestionMock).toHaveBeenCalled()
  });
  it('Previous button should call previousQuestion function', () => {
    wrapper.find('#previousBtn').simulate('click')
    expect(previousQuestionMock).toHaveBeenCalled()
  });
});