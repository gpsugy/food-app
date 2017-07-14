import { account } from './';
import { setUserFilters } from '../actions/Account';
import { userToggleRatingSort } from '../actions/FilterBar';

describe('(Reduxer) User Settings SORTING object changes', () => {
	it('increment rating_si on TOGGLE_RATING_SORT', () => {
		let state = {
			default: {
				filters: {
					rating_si: 1,
					prices: [1, 3],
					distance_fi: 1
				}
			}
		};
		let expected = {
			default: {
				filters: {
					rating_si: 2,
					prices: [1, 3],
					distance_fi: 1
				}
			}
		};
		expect(
			account(state, userToggleRatingSort())
		).toEqual(expected);
	});

	it('init sorting state on SET_USER_FILTERS', () => {
		let state = {
			default: {
				filters: {
					rating_si: 1,
					prices: [1, 3],
					distance_fi: 1
				}
			},
			isFetching: true
		};

		let expected = {
			default: {
				filters: {
					rating_si: 1,
					prices: [1, 2, 3, 4],
					distance_fi: 0
				}
			},
			isFetching: false
		};
		let dbUser = {
			default: {
				filters: {
					prices: []
				}
			}
		};
		expect(
			account(state, setUserFilters(dbUser))
		).toEqual(expected);
	});
});