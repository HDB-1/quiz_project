import React from 'react';
import { shallow , mount } from 'enzyme';
import Quiz from '../src/containers/Quiz/Quiz';
import {APIRequest} from '../src/containers/Quiz/Quiz';




describe('Shallow Quiz', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Quiz />)); // this automatically tests for rendering without crashing.

  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('testing API', () => {
  // beforeEach(() => {fetch.resetMocks()});
  it('calls API and returns data to me', () => {
    //Mock fetch response data
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    APIRequest('').then(res => {
      expect(res.data).toEqual('12345')
    })
    //assert on the time called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    console.log(fetch.mock.calls)
    expect(fetch.mock.calls[0][0]).toEqual('https://opentdb.com/api.php?amount=5')

  })
})