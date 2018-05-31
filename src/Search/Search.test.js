import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import Trie from '@quinhill/complete-me';

describe('Welcome', () => {

  let renderedSearch;
  let mockGetWeather;

  beforeEach(() => { 
    mockGetWeather = jest.fn();
    renderedSearch = shallow(<Search getWeather={ mockGetWeather } />);
  })

  describe('updateInput', () => {
    test('when updatedInput is invoked, that lit ass state should be updated', () => {
      const expectedState = 'denver, co';
      const mockEvent = { target: { value: 'denver, co'}};

      renderedSearch.instance().updateInput(mockEvent);

      const actualState = renderedSearch.state('userLocation');
      expect(actualState).toEqual(expectedState);
    })

    test('when submit button is clicked, getWeather is called with the correct args', () => {
      renderedSearch.setState({ userLocation: 'Denver, co'});
      const expectedArguments = renderedSearch.state('userLocation');
      const mockEvent = { preventDefault: jest.fn() };

      renderedSearch.instance().submitLocation(mockEvent);

      expect(mockGetWeather).toHaveBeenCalledWith(expectedArguments);
    })

  })

})