import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Current from '../Current';
import renderer from 'react-test-renderer';

describe('Current', () => {

  test('card renders with correct props', () => {
    
    const mockProps = {
      feelslike: '65.3 F (18.5 C)',
      humidity: '41%',
      visibility: '10.0',
      location: 'Denver, CO',
      weekday: 'Thursday',
      month: 'May',
      day: '24',
      summary: 'Sunny to partly cloudy. High 84F. Winds ENE at 5 to 10 mph.',
      currentTemp: 65.3,
      wind: 1.1,
      daysHigh: '84',
      daysLow: '54'
    }
    const renderedCurrent = shallow(<Current current={mockProps}/>)
    
    expect(renderedCurrent).toHaveLength(1)
  })
})