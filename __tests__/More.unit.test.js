import React from 'react';
import { shallow, mount, render } from 'enzyme';
import More from '../client/src/components/More.jsx';

describe('<More />', () => {
  test('renders without crashing', () => {
    shallow(<More />);
  });

  test('renders a div', () => {
    const wrapper = shallow(<More />);
    expect(wrapper.find('div').length).toBe(1);
  });

  test('renders two <a>', () => {
    const wrapper = mount(<More />);
    expect(wrapper.find('a').length).toBe(2);
  });

  test('renders one <p>', () => {
    const wrapper = mount(<More />);
    expect(wrapper.find('p').length).toBe(1);
  });
});

