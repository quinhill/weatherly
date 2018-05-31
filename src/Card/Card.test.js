import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
  test('Hourly card renders with correct props', () => {

    let mockHourlyData = { time: '3:00 PM',
                           temperature: '73 F',
                           icon: 'Cloudy'
                         }

    let renderedHourCard = shallow(<Card  
                                  temp={mockHourlyData.temperature}
                                  hour={mockHourlyData.time}
                                  icon={mockHourlyData.icon} />)

    const expectedHourCard = 1;
    const actualHourCard = renderedHourCard.find('.hourlyCard').length;

    expect(actualHourCard).toEqual(expectedHourCard)
  })
  test('Daily card renders with correct props', () => {

    let mockDailyData = { weekday: 'Monday',
                          daysHigh: '100 F',
                          daysLow: '20 F',
                          icon: 'Cloudy'
                        }

    let renderedDailyCard = shallow(<Card
                                     weekday={mockDailyData.weekday}
                                     daysHigh={mockDailyData.daysHigh}
                                     daysLow={mockDailyData.daysLow}
                                     icon={mockDailyData.icon} />)

    const expectedDailyCard = 1
    const actualDailyCard = renderedDailyCard.find('.dailyCard').length;

    expect(actualDailyCard).toEqual(expectedDailyCard)
  })
})