import React from 'react'
import { shallow } from 'enzyme'

import Results from '../src/containers/Results/Results'

describe('Shallow Results', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Results />)
    });

    // todo: snapshot test

    it('Should render the user results', () => {
        expect(wrapper.find('#results').length).toEqual(1);
    }
    )

})