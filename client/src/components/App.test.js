import React from 'react';

import { shallow } from 'enzyme';

import App from './App';

const wrapper = shallow(<App/>);

describe('(Component) <App />', () => {
	it('renders without exploding', () => {
	  expect(wrapper).toHaveLength(1);
	});
});