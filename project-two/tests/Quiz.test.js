import React from "react";
import { shallow, mount } from "enzyme";
import Quiz from "../src/containers/Quiz/Quiz";
import Info from "../src/components/Info/Info";
import Navigation from "../src/components/Navigation/Navigation";
import Question from "../src/containers/Question/Question";
import Answers from "../src/components/Answers/Answers";
import Answer from "../src/containers/Answer/Answer";
import { MemoryRouter, Route, Link } from "react-router-dom";

//dummy data
const quizSetup = { difficulty: "easy", category: "9", numOfQuestions: "5", numOfPlayers : '1' };
const questionsForTesting = [
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

describe("Shallow Quiz", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Quiz quizInfo={quizSetup} />);
    wrapper.setState({ questions: questionsForTesting });

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

  it("Submit question should add a question answer to a user's answer array", () => {
    expect(wrapper.instance().state.userAnswers[0].length).toEqual(0);
    wrapper.instance().submitQuestion("answerOne");
    expect(wrapper.instance().state.userAnswers[0].length).toEqual(1);
    expect(wrapper.instance().state.userAnswers[0]).toEqual([{
      content: "answerOne",
      index: 0
    }]);
  });


});

//test data
const setup = {
  difficulty: "easy",
  numOfQuestions: "5",
  category: "9",
  numOfPlayers: "1"
};

describe("Mounted quiz", () => {
  let wrapper;
  beforeEach(() => {
    let memoryWrapper = mount(
      <MemoryRouter initialEntries={["/quiz"]}>
        <Quiz quizInfo={quizSetup} />
      </MemoryRouter>
    );

    wrapper = memoryWrapper.find(Quiz);
    wrapper.setState({ questions: questionsForTesting });
  });

  // it("calls submit function on answer button click", () => {
  //   const spy = jest.spyOn(wrapper.instance(), "submitQuestion");
  //   wrapper.instance().forceUpdate();
  //   expect(spy).toHaveBeenCalledTimes(0);
  //   wrapper
  //     .find(Question)
  //     .find(Answers)
  //     .find(Answer)
  //     .at(0)
  //     .find("input")
  //     .simulate("click");
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  // it("should render a question based on current question index", () => {
  //   wrapper.setState({
  //     currentQuestionIndex: 1,
  //     questionInfo: questionsForTesting
  //   });
  //   expect(wrapper.find(Question).props()).toHaveProperty(
  //     "questionInfo",
  //     questionsForTesting[1]
  //   );
  //   wrapper.setState({ currentQuestionIndex: 0 });
  //   expect(wrapper.find(Question).props()).toHaveProperty(
  //     "questionInfo",
  //     questionsForTesting[0]
  //   );
  // });

  // it('Calls "next question" function onClick', () => {
  //   const spy = jest.spyOn(wrapper.instance(), "nextQuestion");
  //   wrapper.instance().forceUpdate();
  //   expect(spy).toHaveBeenCalledTimes(0);
  //   wrapper
  //     .find(Navigation)
  //     .find("#nextBtn")
  //     .simulate("click");
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  // it('Calls "previous question" function onClick', () => {
  //   const spy = jest.spyOn(wrapper.instance(), "previousQuestion");
  //   wrapper.instance().forceUpdate();
  //   expect(spy).toHaveBeenCalledTimes(0);
  //   wrapper
  //     .find(Navigation)
  //     .find("#previousBtn")
  //     .simulate("click");
  //   expect(spy).toHaveBeenCalledTimes(1);
  // });
  it("nextQuestion function should increase currentQuestionIndex in quiz.state", () => {
    wrapper.setState({ questionInfo: questionsForTesting }); // Initialises 2 question objects in state.questionInfo array.
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(0);
    wrapper.instance().nextQuestion();
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(1);
  });
  it("previousQuestion function should decrease currentQuestionIndex in quiz.state", () => {
    wrapper.setState({
      questionInfo: questionsForTesting,
      currentQuestionIndex: 1
    }); // Initialises 2 question objects in state.questionInfo array.
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(1);
    wrapper.instance().previousQuestion();
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(0);
  });
  it("previousQuestion function should NOT decrease currentQuestionIndex below 0", () => {
    wrapper.setState({ currentQuestionIndex: 0 });
    wrapper.instance().previousQuestion();
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(0);
  });
  it("nextQuestion function should NOT increase currentQuestionIndex beyond quizInfo.length - 1", () => {
    wrapper.setState({ currentQuestionIndex: 1 });
    wrapper.setState({ questionInfo: questionsForTesting }); // Initialises 2 question objects in state.questionInfo array.
    wrapper.instance().nextQuestion();
    expect(wrapper.instance().state.currentQuestionIndex).toEqual(1);
  });
});

// Testing that resultsPage renders on correct route.


//----------------------------------------------------------------- API TESTS ----------------------------------------
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
