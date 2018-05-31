import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../Welcome';

describe('Welcome', () => {
  it('should exist', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toBeDefined();
  });
});
