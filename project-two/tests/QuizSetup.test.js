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
  it("Should render two dropdowns", () => {
      expect(wrapper.find('select').length).toEqual(2);
  })
  it("Difficulty dropdown should contain 3 difficulty options as both text and value properties (<option />)", () => {
      expect(wrapper.find('select').at(0).find('option').length).toEqual(3);
      expect(wrapper.find('select').at(0).find('option').at(0).text()).toEqual("Easy");
      expect(wrapper.find('select').at(0).find('option').at(1).text()).toEqual("Medium");
      expect(wrapper.find('select').at(0).find('option').at(2).text()).toEqual("Hard");
      // Now testing option 'values'
      expect(wrapper.find('select').at(0).find('option').at(0).props()).toHaveProperty("value", "easy")
      expect(wrapper.find('select').at(0).find('option').at(1).props()).toHaveProperty("value", "medium")
      expect(wrapper.find('select').at(0).find('option').at(2).props()).toHaveProperty("value", "hard")
  })
  it("Category dropdown should contain 5 (for now) topic options in <option /> tags", () => {
      // Test for VALUE of categories for API querying
    expect(wrapper.find('select').at(1).find('option').length).toEqual(5);
    expect(wrapper.find('select').at(1).find('option').at(0).props()).toHaveProperty("value", "9") // General Knowledge
    expect(wrapper.find('select').at(1).find('option').at(1).props()).toHaveProperty("value", "21") // Sports
    expect(wrapper.find('select').at(1).find('option').at(2).props()).toHaveProperty("value", "17") // Science and Nature
    expect(wrapper.find('select').at(1).find('option').at(3).props()).toHaveProperty("value", "23") // History
    expect(wrapper.find('select').at(1).find('option').at(4).props()).toHaveProperty("value", "28") // Vehicles

    // Test for text displayed for each dropdown.
    expect(wrapper.find('select').at(1).find('option').at(0).text()).toEqual("General Knowledge") // General Knowledge
    expect(wrapper.find('select').at(1).find('option').at(1).text()).toEqual("Sports") // Sports
    expect(wrapper.find('select').at(1).find('option').at(2).text()).toEqual("Science & Nature") // Science and Nature
    expect(wrapper.find('select').at(1).find('option').at(3).text()).toEqual("History") // History
    expect(wrapper.find('select').at(1).find('option').at(4).text()).toEqual("Vehicles") // Vehicles
  })

  it("Should render a button", () => {
    expect(wrapper.find('button').length).toEqual(1);
  })

  it("Button should have an onclick function", () => {
    expect(wrapper.find('button').at(0).props()).toHaveProperty("onClick", [Function])
  })

});

