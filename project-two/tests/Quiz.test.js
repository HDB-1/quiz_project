import React from 'react';
import { shallow , mount } from 'enzyme';
import Quiz from '../src/containers/Quiz/Quiz';
import {APIRequest} from '../src/containers/Quiz/Quiz';
import Info from '../src/components/Info/Info';
import Navigation from '../src/components/Navigation/Navigation';
import Question from '../src/containers/Question/Question';




describe('Shallow Quiz', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Quiz />)); // this automatically tests for rendering without crashing.

  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render Info, Navigation and Question component', () => {
    expect(wrapper.find(Info).length).toEqual(1);
    expect(wrapper.find(Navigation).length).toEqual(1);
    expect(wrapper.find(Question).length).toEqual(1);
  })
});

//test data
const setup = { difficulty: 'easy',
                numOfQuestions: '5',
                topic:'9',
                numOfPlayers:'1'}

describe('testing API', () => {
  // beforeEach(() => {fetch.resetMocks()});
  it('calls API and returns data to me', () => {
    //Mock fetch response data
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    APIRequest(setup).then(res => {
      expect(res.data).toEqual('12345')
    })
    //assert on the time called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1) // fetch.mock.calls = nested array [[]] which contains the URL.
    expect(fetch.mock.calls[0][0]).toEqual('https://opentdb.com/api.php?type=multiple&category=9&amount=5&difficulty=easy')

  })
})

