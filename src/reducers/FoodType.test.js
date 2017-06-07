import { addFoodType } from '../actions/FoodType';
import { foodTypes } from './';

describe('(Reducer) FoodType', () => {
	it('return foodTypes list on ADD_FOOD_TYPE', () => {
		const expected = ['Asian'];
		expect(
			foodTypes([], addFoodType('Asian'))
		).toEqual(
			expect.arrayContaining(expected)
		);
	})
});
