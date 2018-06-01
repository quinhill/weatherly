import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App unit tests', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />, { disableLifecycleMethods: true });
  });

  describe('App default state', () => {
    test('App has a default state of current', () => {
      const expectedState = {};
      const actualState = renderedApp.state('current');

      expect(actualState).toEqual(expectedState);
    });


    test('App has a default state of hourly', () => {
      const expectedState = [];
      const actualState = renderedApp.state('hourly');

      expect(actualState).toEqual(expectedState);
    });

    test('App has a default state of tenDay', () => {
      const expectedState = [];
      const actualState = renderedApp.state('tenDay');

      expect(actualState).toEqual(expectedState);
    });

    test('App has a default state of welcome', () => {
      const expectedState = true;
      const actualState = renderedApp.state('welcome');

      expect(actualState).toEqual(expectedState);
    });

  });
  describe('splitLocation method', () => {

    test('when splitLocation is called it returns an object containing userCity and userState', () => {
      const expectedObj = { userCity: 'denver', userState: 'co' };
      const actualObj = renderedApp.instance().splitLocation('denver, co');

      expect(actualObj).toEqual(expectedObj);
    });
  });
});

