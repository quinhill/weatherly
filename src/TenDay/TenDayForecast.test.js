import React from 'react';
import { shallow } from 'enzyme';
import TenDayForecast from '../TenDay';

describe('TenDay', () => {

  it.skip('should exist', () => {
    const wrapper = shallow(<TenDayForecast />)
    expect(wrapper).toBeDefined()
  })

})