import React from 'react';
import { shallow , mount } from 'enzyme';
import { MemoryRouter , Link } from 'react-router-dom';
import QuizSetup from '../src/components/QuizSetup/QuizSetup'

describe('Shallow QuizSetup', () => {
  let wrapper;
  let onChange = jest.fn() // For testing onChange functions are called when intended
  
  beforeEach(() => wrapper = shallow(<QuizSetup handleChange = {onChange}/>)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })
  it("Should render three dropdowns", () => {
      expect(wrapper.find('select').length).toEqual(3);
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

  it("Number of questions dropdown should contain options for 5, 10, and 15 questions", () => {
    expect(wrapper.find('select').at(2).find('option').length).toEqual(3);
    // Testing dropdown values
    expect(wrapper.find('select').at(2).find('option').at(0).props()).toHaveProperty("value", "5") 
    expect(wrapper.find('select').at(2).find('option').at(1).props()).toHaveProperty("value", "10")
    expect(wrapper.find('select').at(2).find('option').at(2).props()).toHaveProperty("value", "15")
    // Testing dropdown text displayed
    expect(wrapper.find('select').at(2).find('option').at(0).text()).toEqual("5") 
    expect(wrapper.find('select').at(2).find('option').at(1).text()).toEqual("10")
    expect(wrapper.find('select').at(2).find('option').at(2).text()).toEqual("15")
  })
  it("Should render a button", () => {
    expect(wrapper.find('button').length).toEqual(1);
  })
  it("Button should have an onclick function", () => {
    expect(wrapper.find('button').at(0).props()).toHaveProperty("onClick", [Function])
  })
});

// Function is being correctly called when checked in the browser, but this test is currently returning a funciton call with incorrect parameters.

describe('mounted quizSetup', () => { 
  let onChange = jest.fn() // For testing onChange functions are called when intended
  let wrapper = mount(<QuizSetup handleChange = {onChange}/>) 

  it("First dropdown should have an onChange that is called when an option is selected", () => {
    wrapper.find('select').at(0).simulate("change", {target: {value: "medium"}});
    expect(onChange).toHaveBeenCalledWith('difficulty','medium');
  });
  it("Second dropdown should have an onChange that is called when an option is selected", () => {
    wrapper.find('select').at(1).simulate("change", {target: {value: "23"}});
    expect(onChange).toHaveBeenCalledWith('category','23');
  });
  it("Third dropdown should have an onChange function that is called when an option is selected", () => {
    wrapper.find('select').at(2).simulate("change", {target: {value: "10"}});
    expect(onChange).toHaveBeenCalledWith('numOfQuestions','10');
  });
})

