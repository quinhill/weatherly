import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App unit tests', () => {

  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />, { disableLifecycleMethods: true })
  });

  describe('App default state', ()=> {
    test('App has a default state of current', () => {
      const expectedState = {}
      const actualState = renderedApp.state('current')

      expect(actualState).toEqual(expectedState)
    })
  

    test('App has a default state of hourly, hourly, tenDay, welcome, and error', () => {
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

    test('when splitLocation is called it returns an object containing userCity and userState', () => {
      const expectedObj = { userCity: 'denver', userState: 'co'}
      const actualObj = renderedApp.instance().splitLocation('denver, co')

      expect(actualObj).toEqual(expectedObj)


    })
    
  })
})















