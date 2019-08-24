import React from 'react';
import { shallow } from 'enzyme';
import More from '../client/src/components/More';

describe('First Enzyme test', () => {
  test('renders without crashing', () => {
    shallow(<More />);
  });
});