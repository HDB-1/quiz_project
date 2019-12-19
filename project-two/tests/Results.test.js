import React from 'react'
import { shallow } from 'enzyme'

import Results from '../src/containers/Results/Results'

const testUserAnswersForFailing = [{content: "answer1", index : '0'}, {content: "answer2", index: '1'}]
const testUserAnswersForSuccess = [{content: "answer3", index : '0'}, {content: "answer4", index: '1'}]
const testCorrectAnswers = ["answer3", "answer4"]

describe('Shallow Results', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Results userAnswers={testUserAnswersForFailing} correctAnswers={testCorrectAnswers}/>)
    });

    // todo: snapshot test

    it('Should render the user results', () => {
        expect(wrapper.find('#results').length).toEqual(1);
        expect(wrapper.find('#results').text()).toEqual('This is your score: 0 / 2');
    }
    )
    it('should correctly grade user answers', () => {
        let score = wrapper.instance().markQuiz(testUserAnswersForFailing, testCorrectAnswers);
        expect(score).toEqual(0);
        let secondScore = wrapper.instance().markQuiz(testUserAnswersForSuccess, testCorrectAnswers);
        expect(secondScore).toEqual(2);
    })
})