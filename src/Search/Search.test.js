import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('Welcome', () => {

  let renderedSearch;

  beforeEach(() => { 
    renderedSearch = shallow(<Search />)
  })

  describe('updateInput', () => {
    test('when updatedInput is invoked, that lit ass state should be updated', () => {
      const expectedState = 'denver, co';
      
      const mockEvent = { target: { value: 'denver, co'}}

      renderedSearch.instance().updateInput(mockEvent)

      const actualState = renderedSearch.state('userLocation')

      expect(actualState).toEqual(expectedState)
    })

    test('when submit button is clicked, getWeather is called', () => {
      
    })

  })

})