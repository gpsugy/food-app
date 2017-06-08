import { foodTypes } from './';
import { updateFoodTypes } from '../actions/FoodType';

describe('(Reducer) FoodType', () => {
	it('add element on UPDATE_FOOD_TYPE', () => {
		const expected = ['Asian'];
		expect(
			foodTypes([], updateFoodTypes('Asian'))
		).toEqual(
			expect.arrayContaining(expected)
		);
	})

	it('remove already existing element in UPDATE_FOOD_TYPE', () => {
		let state = ['Asian']

		const expected = [];
		expect(
			foodTypes([], updateFoodTypes('Asian'))
		).toEqual(
			expect.arrayContaining(expected)
		);
	})
});
