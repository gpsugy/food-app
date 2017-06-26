import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { constructSort, toggleSort } from '../actions/SortingBar';
import { sorting } from './';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('(Reducer) Sorting', () => {
	it('iterate through SORTING_TYPES array on TOGGLE_SORT', () => {
		let state = {
			rating_si: 1,
			price_si: 0,
			distance_si: 2
		};
		expect(
			sorting(state, toggleSort('rating'))
		).toEqual(
			{
				rating_si: 2,
				price_si: 0,
				distance_si: 2
			}
		);

		let state2 = {
			rating_si: 1,
			price_si: 0,
			distance_si: 2
		};
		expect(
			sorting(state2, toggleSort('distance'))
		).toEqual(
			{
				rating_si: 1,
				price_si: 0,
				distance_si: 0
			}
		);

		let state3 = {
			rating_si: 1,
			price_si: 0,
			distance_si: 2
		};
		expect(
			sorting(state3, toggleSort('price'))
		).toEqual(
			{
				rating_si: 1,
				price_si: 1,
				distance_si: 2
			}
		);
	});

	it('construct sorting state on CONSTRUCT_SORT', () => {
		expect(
			sorting({}, constructSort(1, 0, 2))
		).toEqual(
			{
				rating_si: 1,
				price_si: 0,
				distance_si: 2
			}
		);
	});
});
