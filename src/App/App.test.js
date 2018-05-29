import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App unit tests', () => {

  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />)
  });

  describe('App default state', ()=> {
    test('App has a default state of current, hourly, tenDay, welcome, and error', () => {
      const expectedState = {}
      const actualState = renderedApp.state('current')

      expect(actualState).toEqual(expectedState)
    })

    test('App has a default state of current, hourly, tenDay, welcome, and error', () => {
      const expectedState = []
      const actualState = renderedApp.state('hourly')

      expect(actualState).toEqual(expectedState)
    })

    test('App has a default state of current, hourly, tenDay, welcome, and error', () => {
      const expectedState = []
      const actualState = renderedApp.state('tenDay')

      expect(actualState).toEqual(expectedState)
    })
    
    test('App has a default state of current, hourly, tenDay, welcome, and error', () => {
      const expectedState = true
      const actualState = renderedApp.state('welcome')

      expect(actualState).toEqual(expectedState)

    })

    test('App has a default state of current, hourly, tenDay, welcome, and error', () => {
      const expectedState = false
      const actualState = renderedApp.state('error')

      expect(actualState).toEqual(expectedState)
    })
  })
  describe('getWeather method', ()=> {
    test('should toggle state.welcome to false', () => {
      const expected = false;

      renderedApp.instance().getWeather('userInput');

      const actual = renderedApp.state('welcome');

      expect(actual).toBe(expected);
    })

    test('when getWeather is called it should populate state', () => {
      const expectedCurrent = expect.objectContaining({
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
      })
      
      renderedApp.instance().getWeather('denver, co');

      const actualState = renderedApp.state('current')

      expect(actualState).toBe(expectedCurrent)
    })
    
  })
})