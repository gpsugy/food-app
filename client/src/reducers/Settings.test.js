import { account } from './';
import {
  setUserFilters,
  updateSettingsRequest,
  updateSettingsSuccess,
} from '../actions/Settings';
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

		it('Set new user filters on SET_USER_FILTERS', () => {
		let state = {
			default: {
				filters: {
					rating_si: 1,
					prices: [1, null, 3, 4],
					distance_fi: 1
				}
			},
			isFetching: true
		};

		let filters = {
			rating_si: 0,
			prices: [null, null, null, 4],
			distance_fi: 2
		}
		let expected = {
			default: {
				filters: {
					rating_si: 0,
					prices: [null, null, null, 4],
					distance_fi: 2
				}
			},
			isFetching: false
		};
		expect(
			account(state, setUserFilters(filters))
		).toEqual(expected);
	});
	});
});

describe('(Reduxer) Update Settings', () => {
	it('Set isFetching on REQUEST', () => {
		let expected = {
			isFetching: true
		};
		expect(
			account({}, updateSettingsRequest())
		).toEqual(expected);
	});

	it('Set new user filters on SUCCESS', () => {
		let state = {
			isFetching: true
		};
		let expected = {
			isFetching: false
		};
		expect(
			account(state, updateSettingsSuccess())
		).toEqual(expected);
	});
});