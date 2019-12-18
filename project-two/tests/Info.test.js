import React from 'react';
import { shallow , mount } from 'enzyme';
import Info from '../src/components/Info/Info';
import Progress from '../src/components/Info/Progress/Progress'
import User from '../src/components/Info/User/User'

describe('Shallow Info', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Info title="General Knowledge" />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render 1 <Progress/> and <User/> component and 1 element with id 'quizName'", () =>{
    expect(wrapper.find(Progress).length).toEqual(1);
    expect(wrapper.find(User).length).toEqual(1);
    expect(wrapper.find('#quizName').length).toEqual(1);
  });
  it("Should render information passed to title, progress, user components correctly", () => {
    wrapper = mount(<Info users={1} question={{current:1, total:10}}/>);
    expect(wrapper.find(User).find('#currentUser').text()).toEqual("Player 1");
    expect(wrapper.find(Progress).find("#progress").text()).toEqual("1/10");
  });
  it("The element with ID quizName should render the correct information", () => {
    expect(wrapper.find('#quizName').text()).toEqual('General Knowledge');
  });
});