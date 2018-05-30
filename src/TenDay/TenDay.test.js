import React from 'react';
import { shallow } from 'enzyme';
import TenDay from '../TenDay';

describe('Hourly', () => {
  let renderedTenDay;

  let mockData = [{},{},{}]
  beforeEach(() => renderedTenDay = shallow(<TenDay tenDay={ mockData } />))

  it('given an array of objects, TenDay should return a card for each object', () => {
    const expectedTenDayLength = 3;
    const actualTenDayLength = renderedTenDay.find('Card').length

    expect(actualTenDayLength).toBe(expectedTenDayLength)
  })

})