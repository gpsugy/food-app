import React from 'react';

import { shallow } from 'enzyme';

import FoodTypeList from './FoodTypeList';

const wrapper = shallow(<FoodTypeList/>);

describe('(Component) <FoodTypeList />', () => {
	it('renders without exploding', () => {
	  expect(wrapper).toHaveLength(1);
	});
});