import React from "react";
import { shallow } from "enzyme";
import Answer from "../src/containers/Answer/Answer";

let submitMock = jest.fn()
describe("Shallow Answer", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Answer answer={"Answer 1"} submit={submitMock} />))); // this automatically tests for rendering without crashing.
  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render a radio button and a label the correct information", () => {
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("input").props()).toHaveProperty('value' , 'Answer 1');
  });

  it('Answer button should call submit function', () => {
    wrapper.find('input').simulate('click')
    expect(submitMock).toHaveBeenCalled()
  });
});
