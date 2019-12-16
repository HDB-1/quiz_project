import React from 'react';
import App from '../src/App';
import { shallow , mount } from 'enzyme';
import { MemoryRouter , Link } from 'react-router-dom';
import Quiz from '../src/containers/Quiz/Quiz'
import QuizSetup from '../src/components/QuizSetup/QuizSetup'
import NavBar from '../src/components/NavBar/NavBar'

describe('Shallow App', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<App />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })

  it("Should render a <Quiz /> component", () => {
    expect(wrapper.containsMatchingElement(<Quiz />)).toEqual(true);
  })

  it("Should render a <QuizSetup /> component", () => {
    expect(wrapper.containsMatchingElement(<QuizSetup />)).toEqual(true);
  })
  it("Should render a <NavBar /> component", () => {
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  })
})

describe('Mounted App', () => {
  it("Should render quiz component on route '/quiz'", () => {
    let wrapper = mount(<MemoryRouter initialEntries={['/quiz']}><App /></MemoryRouter>);
    expect(wrapper.containsMatchingElement(<Quiz />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<QuizSetup />)).toEqual(false);
  })
  it("Should render quizSetup component on route '/'", () => {
    let wrapper = mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    expect(wrapper.containsMatchingElement(<Quiz />)).toEqual(false);
    expect(wrapper.containsMatchingElement(<QuizSetup />)).toEqual(true);
  })
  it('Should render a <NavBar /> component on any route', () => {
    let wrapper = mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
    wrapper = mount(<MemoryRouter initialEntries={['/quiz']}><App /></MemoryRouter>);
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  })
  it('Navbar should send user to the homepage when clicked', () => {
    let wrapper = mount(<MemoryRouter initialEntries={['/quiz']}><App /></MemoryRouter>);
    expect(wrapper.containsMatchingElement(<Quiz />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<QuizSetup />)).toEqual(false);
    wrapper.find(NavBar).find(Link).simulate("click", {button : 0});
    expect(wrapper.containsMatchingElement(<Quiz />)).toEqual(false);
    expect(wrapper.containsMatchingElement(<QuizSetup />)).toEqual(true);

    
  })

})
