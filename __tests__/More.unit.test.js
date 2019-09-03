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

  test('onPointerEnter changes state in first view', async done => {
    const wrapper = mount(<More />);
    expect(await global.fetch()).toEqual(data);

    wrapper.update();
    expect(wrapper.find('Img')).toHaveLength(12);
    const e = {target: {id: 2}};
    const ImgWrapper = wrapper.find('Img').at(0);
    ImgWrapper.prop('onPointerEnter')(e);

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        movies: data,
        prev: data.slice(0, 6),
        next: data.slice(6),
        mosaic: 'prev',
        highlighted: 2
      });
    });
    done();
  });

  test('onPointerEnter changes state in second view', async done => {
    const wrapper = mount(<More />);
    expect(await global.fetch()).toEqual(data);

    wrapper.update();
    expect(wrapper.find('Img')).toHaveLength(12);
    const e = {target: {id: 9}};
    const ImgWrapper = wrapper.find('Img').at(7);
    ImgWrapper.prop('onPointerEnter')(e);

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        movies: data,
        prev: data.slice(0, 6),
        next: data.slice(6),
        mosaic: 'prev',
        highlighted: 9
      });
    });
    done();
  });

  test('Prev onClick changes state', async done => {
    const wrapper = mount(<More />);
    expect(await global.fetch()).toEqual(data);
    const PrevWrapper = wrapper.find('Prev');
    PrevWrapper.prop('onClick')();

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        movies: data,
        prev: data.slice(0, 6),
        next: data.slice(6),
        mosaic: 'prev',
        highlighted: 0
      });
    });
    done();
  });

  test('Next onClick changes state', async done => {
    const wrapper = mount(<More />);
    await global.fetch();
    const NextWrapper = wrapper.find('Next');
    NextWrapper.prop('onClick')();

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        movies: data,
        prev: data.slice(0, 6),
        next: data.slice(6),
        mosaic: 'next',
        highlighted: 6
      });
    });
    done();
  });

  test('Next onClick changes state', () => {
    const wrapper = mount(<More />);
    wrapper.setState({
      movies: data,
      prev: data.slice(0, 6),
      next: data.slice(6),
      mosaic: 'next',
      highlighted: 11
    });
    wrapper.update();
    const HighlightWrapper = wrapper.find('Highlight');
    HighlightWrapper.prop('increment')();
    wrapper.update();
    expect(wrapper.state()).toEqual({
      movies: data,
      prev: data.slice(0, 6),
      next: data.slice(6),
      mosaic: 'prev',
      highlighted: 0
    });
  });
});

