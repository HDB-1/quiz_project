import React from 'react';
import { shallow , mount } from 'enzyme';
import { MemoryRouter , Link } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar'

describe('Shallow NavBar', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<NavBar />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })

  it("Should render a <Link /> element", () => {
    expect(wrapper.find(Link).length).toEqual(1);
  })
  it("Should create a link to the '/' route.", () => {
      expect(wrapper.find(Link).props()).toHaveProperty("to", "/");
  })
})
