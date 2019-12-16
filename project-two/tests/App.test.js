import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<App />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })

  

})