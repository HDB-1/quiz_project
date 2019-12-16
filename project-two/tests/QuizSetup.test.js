import React from 'react';
import { shallow , mount } from 'enzyme';
import { MemoryRouter , Link } from 'react-router-dom';
import QuizSetup from '../src/components/QuizSetup/QuizSetup'

describe('Shallow QuizSetup', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<QuizSetup />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })
  it("Should render a dropdown", () => {
      expect(wrapper.find('select').length).toEqual(1);
  })
  it("Difficulty dropdown should contain 3 difficulty options (<option />)", () => {
      expect(wrapper.find('select').at(0).find('option').length).toEqual(3);
      expect(wrapper.find('select').at(0).find('option').at(0).text()).toEqual("Easy");
      expect(wrapper.find('select').at(0).find('option').at(1).text()).toEqual("Medium");
      expect(wrapper.find('select').at(0).find('option').at(2).text()).toEqual("Hard");
  })
});
