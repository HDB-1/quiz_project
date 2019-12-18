import React from "react";
import { shallow, mount } from "enzyme";
import Quiz from "../src/containers/Quiz/Quiz";
import Info from "../src/components/Info/Info";
import Navigation from "../src/components/Navigation/Navigation";
import Question from "../src/containers/Question/Question";
import Submit from "../src/components/Submit/Submit";

//dummy data
const quizSetup = { difficulty: "easy", category: "9", numOfQuestions: "5" };
describe("Shallow Quiz", () => {
  let wrapper;


  let questionTesting = [{
    category: "General Knowledge",
    difficulty: "easy",
    question: "What is the name of NASA&rsquo;s most famous space telescope?",
    correct_answer: "Hubble Space Telescope",
    incorrect_answers: [
    "Big Eye",
    "Death Star",
    "Millenium Falcon"
    ]

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
      }]
  
  beforeEach(() => {wrapper = shallow(<Quiz quizInfo={quizSetup}/>)
                    wrapper.setProps({ questions: questionTesting })

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

//function to test api call
const APIRequest = quizInfo => {
  const baseUrl = "https://opentdb.com/api.php?type=multiple&";
  let url =
    baseUrl +
    `category=${quizInfo.category}&` +
    `amount=${quizInfo.numOfQuestions}&` +
    `difficulty=${quizInfo.difficulty}`;
  return fetch(url).then(res => res.json());
};

let questionsForTesting = [
  {
  category: "General Knowledge",
  type: "multiple",
  difficulty: "easy",
  question: "The likeness of which president is featured on the rare $2 bill of USA currency?",
  correct_answer: "Thomas Jefferson",
  incorrect_answers: [
  "Martin Van Buren",
  "Ulysses Grant",
  "John Quincy Adams"
  ]
  },
  {
  category: "General Knowledge",
  type: "multiple",
  difficulty: "easy",
  question: "What is the name of NASA&rsquo;s most famous space telescope?",
  correct_answer: "Hubble Space Telescope",
  incorrect_answers: [
  "Big Eye",
  "Death Star",
  "Millenium Falcon"
  ]
  }
  ]

describe('Mounted quiz', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Quiz quizInfo={quizSetup} />);
  });
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
  it('should render a question based on current question index', () => {
    wrapper.setState({currentQuestionIndex: 1, questionInfo: questionsForTesting});
    expect(wrapper.find(Question).props()).toHaveProperty('questionInfo', questionsForTesting[1])
    wrapper.setState({currentQuestionIndex: 0});
    expect(wrapper.find(Question).props()).toHaveProperty('questionInfo', questionsForTesting[0])
  })

  it('Calls "next question" function onClick', () => {
    const spy = jest.spyOn(wrapper.instance(), "nextQuestion");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Navigation).find('#nextBtn').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  })
  it('Calls "previous question" function onClick', () => {
    const spy = jest.spyOn(wrapper.instance(), "previousQuestion");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Navigation).find('#previousBtn').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  })
  it('nextQuestion function should increase currentQuestionIndex in quiz.state', () => {
    wrapper.setState({questionInfo: questionsForTesting}) // Initialises 2 question objects in state.questionInfo array.
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(0);
    wrapper.instance().nextQuestion();
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(1);
  })
  it('nextQuestion function should increase currentQuestionIndex in quiz.state', () => {
    wrapper.setState({questionInfo: questionsForTesting, currentQuestionIndex : 1}) // Initialises 2 question objects in state.questionInfo array.
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(1);
    wrapper.instance().previousQuestion();
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(0);
  })

});

describe("testing API", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  // API Request test will fail needs to find way to export function from class
  it("calls API and returns data to me", () => {
    //Mock fetch response data
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

    //assert on the response
    APIRequest(setup).then(res => {
      expect(res.data).toEqual("12345");
    });
    //assert on the time called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1); // fetch.mock.calls = nested array [[]] which contains the URL.
    expect(fetch.mock.calls[0][0]).toEqual(
      "https://opentdb.com/api.php?type=multiple&category=9&amount=5&difficulty=easy"
    );
  });
});
