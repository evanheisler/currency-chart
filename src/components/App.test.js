import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

it('renders hello world', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Hello World</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
