import React from 'react';
import App from '../src/App';
import { shallow , mount } from 'enzyme';
import { MemoryRouter , Link } from 'react-router-dom';
import Quiz from '../src/containers/Quiz/Quiz'
import QuizSetup from '../src/components/QuizSetup/QuizSetup'
import NavBar from '../src/components/NavBar/NavBar'
import waitUntil from 'async-wait-until'; // For async testing of setState functions.

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

  // it('set state function should update app.js state', async () => {
  //   let wrapper = mount(<MemoryRouter initialEntries={['/quiz']}><App /></MemoryRouter>);
  //   let appWrapper = wrapper.find(App).at(0); // Isolates app component
  //   // Creating test characteristics object for use in setQuizState function:
  //   const exampleTestCharacteristics = {difficulty: "Hard", category: "9", numOfQuestions: "10", numOfPlayers: '1'}
    
  //   appWrapper.instance().setQuizState(exampleTestCharacteristics);
  //   await waitUntil(() => appWrapper.instance().state.quizSetup); //async to wait for the api to return!

  //   expect(appWrapper.instance().state.quizSetup.difficulty).toEqual("Hard");
  //   expect(appWrapper.instance().state.quizSetup.category).toEqual("9");
  //   expect(appWrapper.instance().state.quizSetup.numOfQuestions).toEqual('10');
  //   expect(appWrapper.instance().state.quizSetup.numOfPlayers).toEqual('1');

  // })
  it('set state function should update app.js state', async () => {
    let wrapper = mount(<MemoryRouter initialEntries={['/quiz']}><App /></MemoryRouter>);
    let appWrapper = wrapper.find(App).at(0); // Isolates app component
    // Creating test characteristics object for use in setQuizState function:
    const exampleTestCharacteristics = {difficulty: "Hard", category: "9", numOfQuestions: "10", numOfPlayers: '1'}
    // objective: setquizstate function can take 2 arguments: e.g. difficulty, and difficultyValue. The function should then update quizState object, returning the same object 
     // except for the relevant part (e.g. difficulty), which should be updated. 
    appWrapper.instance().setQuizState("difficulty", exampleTestCharacteristics.difficulty); 
    await waitUntil(() => appWrapper.instance().state.quizSetup.difficulty); //async to wait for the api to return!
    expect(appWrapper.instance().state.quizSetup.difficulty).toEqual("Hard");

    appWrapper.instance().setQuizState("category", exampleTestCharacteristics.category);
    await waitUntil(() => appWrapper.instance().state.quizSetup.difficulty); //async to wait for the api to return!
    expect(appWrapper.instance().state.quizSetup.category).toEqual("9");

    appWrapper.instance().setQuizState("numOfQuestions", exampleTestCharacteristics.numOfQuestions); 
    await waitUntil(() => appWrapper.instance().state.quizSetup.difficulty); //async to wait for the api to return!
    expect(appWrapper.instance().state.quizSetup.numOfQuestions).toEqual("10");
  }) 
})
