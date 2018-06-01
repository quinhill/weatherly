import React from 'react';
import { shallow } from 'enzyme';
import apiCleaner from './apiCleaner';
import mockData from './mockData';

describe('apiCleaner', () => {

  describe('currentCleaner', () => {
    let renderedApiCleaner;
    
    it('should take in data and return an object with the information needed for the Current component', () => {
      const expectedObject = {
        feelsLike: '65.3 F (18.5 C)',
        humidity: '41%',
        visibility: '10.0',
        wind: 1.1,
        location: 'Denver, CO',
        weekday: 'Thu',
        month: 'May',
        day: '24',
        summary: 'Sunny to partly cloudy. High 84F. Winds ENE at 5 to 10 mph.',
        currentTemp: 65.3,
        daysHigh: '84',
        daysLow: '54',
        icon: '/svg/clear.svg'
      }
    
      const actualObject = apiCleaner.currentCleaner(mockData);
    
      expect(actualObject).toEqual(expectedObject);
    })
  })
  
  
  describe('hourlyCleaner', () => {
    
    it('should take in data and return an array of objects with the information needed for the Hourly component', () => {
      const expectedArray = [
        { time: '10:00 AM', temperature: '72.3', icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
        { time: '11:00 AM', temperature: '75.8', icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
        { time: '12:00 PM', temperature: '78.1', icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
        { time: '1:00 PM', temperature: '79.9', icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
        { time: '2:00 PM', temperature: '81.4', icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
        { time: '3:00 PM', temperature: '82.4', icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
        { time: '4:00 PM', temperature: '82.4', icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' }
      ]
    
      const actualArray = apiCleaner.hourlyCleaner(mockData)

      expect(actualArray).toEqual(expectedArray);
    })
  })

  describe('tenDayCleaner', () => {
    
    it('should take in data and return an array of objects with the information needed for the Hourly component', () => {
      const expectedArray = [
        { weekday: 'Thursday', daysHigh: '84', daysLow: '54', icon: 'clear'  },
        { weekday: 'Friday', daysHigh: '88', daysLow: '57', icon: 'clear'  },
        { weekday: 'Saturday', daysHigh: '92', daysLow: '57', icon: 'clear'  },
        { weekday: 'Sunday', daysHigh: '88', daysLow: '56', icon: 'clear'  },
        { weekday: 'Monday', daysHigh: '76', daysLow: '54', icon: 'chancetstorms' },
        { weekday: 'Tuesday', daysHigh: '79', daysLow: '53', icon: 'clear' },
        { weekday: 'Wednesday', daysHigh: '83', daysLow: '55', icon: 'clear' },
        { weekday: 'Thursday', daysHigh: '85', daysLow: '55', icon: 'clear' },
        { weekday: 'Friday', daysHigh: '86', daysLow: '56', icon: 'clear' },
        { weekday: 'Saturday', daysHigh: '79', daysLow: '56', icon: 'clear' }
      ]
      
      const actualArray = apiCleaner.tenDayCleaner(mockData);
      
      expect(actualArray).toEqual(expectedArray);
    })
  })
})