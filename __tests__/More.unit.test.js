import React from 'react';
import { shallow, mount, render } from 'enzyme';
import More from '../client/src/components/More.jsx';
import data from '../__mocks__/fetchDataMock.js';

describe('<More />', () => {
  test('fetches data from server', async done => {
    const wrapper = shallow(<More />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(await global.fetch()).toEqual(data);

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        movies: data,
        prev: data.slice(0, 6),
        next: data.slice(6),
        mosaic: 'prev'
      });

      expect(wrapper.html()).toContain('img');
    });
    done();
  });

  test('renders without crashing', () => {
    shallow(<More />);
  });

  test('renders a div', () => {
    const wrapper = shallow(<More />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  test('renders two <a>', () => {
    const wrapper = mount(<More />);
    expect(wrapper.find('a')).toHaveLength(2);
  });

  test('renders one <p>', () => {
    const wrapper = mount(<More />);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('<p> === More Like This', () => {
    const wrapper = render(<More />);
    const p = wrapper.find('p');
    expect(p.text()).toBe('More Like This');
  });

});

