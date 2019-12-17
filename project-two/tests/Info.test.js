import React from 'react';
import { shallow , mount } from 'enzyme';
import Info from '../src/components/Info/Info';
import Title from '../src/components/Info/Title/Title'
import Progress from '../src/components/Info/Progress/Progress'
import User from '../src/components/Info/User/User'

describe('Shallow Info', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<Info />)); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  })
  it("Should render 1 <Title/>, <Progress/>, <User/> component", () =>{
    expect(wrapper.find(Title).length).toEqual(1);
    expect(wrapper.find(Progress).length).toEqual(1);
    expect(wrapper.find(User).length).toEqual(1);
  })
//   it("Should render information passed to title, progress, user components correctly", () => {
//     wrapper = shallow(<Info title={"General Knowledge"} users={1} question={{current:1, total:10}}/>);
//     // expect(wrapper.find(Title).find("#title").toEqual("General Knowledge"));
//     // expect(wrapper.find(User).find('p')).toEqual("Player 1");
//     console.log(wrapper.find(User).find('p'))
//     // expect(wrapper.find(Progress).find("#currentQuestion").toEqual("1"));
//     // expect(wrapper.find(Progress).find("#totalQuestion").toEqual("10"));
//   })
})