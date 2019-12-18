import React from "react";
import { shallow, mount } from "enzyme";
import Quiz from "../src/containers/Quiz/Quiz";
import { APIRequest } from "../src/containers/Quiz/Quiz";
import Info from "../src/components/Info/Info";
import Navigation from "../src/components/Navigation/Navigation";
import Question from "../src/containers/Question/Question";
import Submit from "../src/components/Submit/Submit";

//dummy data
const quizSetup = { difficulty: "easy", category: "9", numOfQuestions: "5" };
describe("Shallow Quiz", () => {
  let wrapper;

  let questionInfo = [
    {
      category: "General Knowledge",
      difficulty: "easy",
      question: "What is the name of NASA&rsquo;s most famous space telescope?",
      correct_answer: "Hubble Space Telescope",
      incorrect_answers: ["Big Eye", "Death Star", "Millenium Falcon"]
    },
    {
      category: "General Knowledge",
      difficulty: "easy",
      question:
        "The likeness of which president is featured on the rare $2 bill of USA currency?",
      correct_answer: "Thomas Jefferson",
      incorrect_answers: [
        "Martin Van Buren",
        "Ulysses Grant",
        "John Quincy Adams"
      ]
    }
  ];

  const quizInfoTest = {
    difficulty: "easy",
    numOfQuestions: "5",
    category: "9",
    numOfPlayers: "1",
    question: "this is a question"
  };

  beforeEach(() => {
    wrapper = shallow(<Quiz quizInfo={quizInfoTest} />);
    wrapper.setProps({ questions: questionInfo });
    wrapper.setProps({ quizInfo: quizInfoTest });

    // this automatically tests for rendering without crashing.
  });

  it("Should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render Info, Navigation and Question component", () => {
    expect(wrapper.find(Info).length).toEqual(1);
    expect(wrapper.find(Navigation).length).toEqual(1);
    expect(wrapper.find(Question).length).toEqual(1);
  });
});

//test data
const setup = {
  difficulty: "easy",
  numOfQuestions: "5",
  category: "9",
  numOfPlayers: "1"
};

describe("testing API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  //API Request test will fail needs to find way to export function from class
  // it("calls API and returns data to me", () => {
  //   //Mock fetch response data
  //   fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

  //   //assert on the response
  //   APIRequest(setup).then(res => {
  //     expect(res.data).toEqual("12345");
  //   });
  //   //assert on the time called and arguments given to fetch
  //   expect(fetch.mock.calls.length).toEqual(1); // fetch.mock.calls = nested array [[]] which contains the URL.
  //   expect(fetch.mock.calls[0][0]).toEqual(
  //     "https://opentdb.com/api.php?type=multiple&category=9&amount=5&difficulty=easy"
  //   );
  // });
});

describe("Mounted quiz", () => {
  let wrapper;
  beforeEach(() => (wrapper = mount(<Quiz quizInfo={quizSetup} />)));

  it("calls skip function on skip button click", () => {
    const spy = jest.spyOn(wrapper.instance(), "skipQuestion");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(Question)
      .find(Submit)
      .find("#skipBtn")
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it("calls submit function on submit button click", () => {
    const spy = jest.spyOn(wrapper.instance(), "submitQuestion");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find(Question)
      .find(Submit)
      .find("#submitBtn")
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
