import React from 'react';

import { shallow } from 'enzyme';

import LocationFinder from './LocationFinder';

const wrapper = shallow(<LocationFinder/>);

describe('(Component) <LocationFinder />', () => {
	it('renders without exploding', () => {
	  expect(wrapper).toHaveLength(1);
	});
});