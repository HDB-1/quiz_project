import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';
import Quiz from '../src/containers/Quiz/Quiz'

describe('App', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<App />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })

  it("Should render a <Quiz /> component", () => {
    expect(wrapper.containsMatchingElement(<Quiz />)).toEqual(true);
  })
})