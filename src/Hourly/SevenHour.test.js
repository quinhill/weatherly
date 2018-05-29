import React from 'react';
import { shallow } from 'enzyme';
import Hourly from '../Hourly';

describe.skip('Hourly', () => {

  it('should exist', () => {
    const wrapper = shallow(<Hourly />)
    expect(wrapper).toBeDefined()
  })

})