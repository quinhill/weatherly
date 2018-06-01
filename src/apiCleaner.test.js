import React from 'react';
import { shallow } from 'enzyme';
import { currentCleaner, hourlyCleaner, tenDayCleaner } from './apiCleaner';
import data from './mockData';

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
        weekday: 'Thursday',
        month: 'May',
        day: '24',
        summary: 'Sunny to partly cloudy. High 84F. Winds ENE at 5 to 10 mph.',
        currentTemp: 65.3,
        daysHigh: '84',
        daysLow: '54',
        icon: '/svg/clear.svg'
      }
    
      const actualObject = currentCleaner(data);
    
      expect(actualObject).toEqual(expectedObject);
    })
  })
  
  
  describe('hourlyCleaner', () => {
    
    it('should take in data and return an array of objects with the information needed for the Hourly component', () => {
      const expectedArray = [
        { time: '10:00 AM', temperature: '72.3', icon: '/svg/clear.svg' },
        { time: '11:00 AM', temperature: '75.8', icon: '/svg/clear.svg' },
        { time: '12:00 PM', temperature: '78.1', icon: '/svg/clear.svg' },
        { time: '1:00 PM', temperature: '79.9', icon: '/svg/clear.svg' },
        { time: '2:00 PM', temperature: '81.4', icon: '/svg/partlycloudy.svg' },
        { time: '3:00 PM', temperature: '82.4', icon: '/svg/partlycloudy.svg' },
        { time: '4:00 PM', temperature: '82.4', icon: '/svg/partlycloudy.svg' }
      ]
    
      const actualArray = hourlyCleaner(data)

      expect(actualArray).toEqual(expectedArray);
    })
  })

  describe('tenDayCleaner', () => {
    
    it('should take in data and return an array of objects with the information needed for the Hourly component', () => {
      const expectedArray = [
        { weekday: 'Thursday', daysHigh: '84', daysLow: '54', icon: '/svg/clear.svg'  },
        { weekday: 'Friday', daysHigh: '88', daysLow: '57', icon: '/svg/clear.svg'  },
        { weekday: 'Saturday', daysHigh: '92', daysLow: '57', icon: '/svg/clear.svg'  },
        { weekday: 'Sunday', daysHigh: '88', daysLow: '56', icon: '/svg/clear.svg'  },
        { weekday: 'Monday', daysHigh: '76', daysLow: '54', icon: '/svg/chancetstorms.svg' },
        { weekday: 'Tuesday', daysHigh: '79', daysLow: '53', icon: '/svg/clear.svg' },
        { weekday: 'Wednesday', daysHigh: '83', daysLow: '55', icon: '/svg/clear.svg' },
        { weekday: 'Thursday', daysHigh: '85', daysLow: '55', icon: '/svg/clear.svg' },
        { weekday: 'Friday', daysHigh: '86', daysLow: '56', icon: '/svg/clear.svg' },
        { weekday: 'Saturday', daysHigh: '79', daysLow: '56', icon: '/svg/clear.svg' }
      ]
      
      const actualArray = tenDayCleaner(data);
      
      expect(actualArray).toEqual(expectedArray);
    })
  })
})