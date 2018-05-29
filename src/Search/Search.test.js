import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('Welcome', () => {

  it('should exist', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper).toBeDefined()
  })

})