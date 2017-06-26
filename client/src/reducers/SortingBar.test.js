import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { sorting } from './';
import { toggleSort } from '../actions/SortingBar';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('(Reducer) Sorting', () => {
	it('iterate through SORTING_TYPES array on TOGGLE_SORT', () => {
		let state = {
			rating: 1,
			price: 0,
			distance: 2
		};
		expect(
			sorting(state, toggleSort('rating'))
		).toEqual(
			{
				rating: 2,
				price: 0,
				distance: 2
			}
		);

		let state2 = {
			rating: 1,
			price: 0,
			distance: 2
		};
		expect(
			sorting(state2, toggleSort('distance'))
		).toEqual(
			{
				rating: 1,
				price: 0,
				distance: 0
			}
		);

		let state3 = {
			rating: 1,
			price: 0,
			distance: 2
		};
		expect(
			sorting(state3, toggleSort('price'))
		).toEqual(
			{
				rating: 1,
				price: 1,
				distance: 2
			}
		);
	});
});
