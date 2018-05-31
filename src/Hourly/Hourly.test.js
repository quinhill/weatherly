import React from 'react';
import { shallow } from 'enzyme';
import Hourly from '../Hourly';

describe('Hourly', () => {
  let renderedHourly;

  const mockData = [{ time: '3:00 PM', temperature: '79.1', icon: '/svg/cloudy.svg' },
    { time: '4:00 PM', temperature: '74.1', icon: '/svg/cloudy.svg' }];
  beforeEach(() => renderedHourly = shallow(<Hourly hourly={mockData} />));

  it('given an array of objects, Hourly should return a card for each object', () => {
    const expectedHourlyLength = 2;
    const actualHourlyLength = renderedHourly.find('Card').length;

    expect(actualHourlyLength).toBe(expectedHourlyLength);
  });
});
