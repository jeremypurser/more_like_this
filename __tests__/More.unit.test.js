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
        mosaic: 'prev',
        highlighted: 0
      });

      expect(wrapper.html()).toContain('img');
    });
    done();
  });

  test('renders without crashing', () => {
    shallow(<More />);
  });

  test('renders 7 divs', () => {
    const wrapper = mount(<More />);
    expect(wrapper.find('div')).toHaveLength(7);
  });

  test('renders two <a>', () => {
    const wrapper = mount(<More />);
    expect(wrapper.find('a')).toHaveLength(2);
  });

  test('renders one <h2>', () => {
    const wrapper = mount(<More />);
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('<p> === More Like This', () => {
    const wrapper = render(<More />);
    const h2 = wrapper.find('h2');
    expect(h2.text()).toBe('More Like This');
  });

});

