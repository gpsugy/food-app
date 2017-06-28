import { combineReducers } from 'redux';

import {
  ALLOW_REFETCH,
  FETCH_BUSINESSES_ERROR,
  FETCH_BUSINESSES_REQUEST,
  FETCH_BUSINESSES_SUCCESS,
} from '../actions/Results';
import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from '../actions';
import {
  INIT_SORT,
  SORT_BUSINESSES,
  TOGGLE_RATING_SORT,
  UPDATE_PRICES,
} from '../actions/FilterBar';
import { SORTING_TYPES } from '../utility/SortingTypes';
import { UPDATE_FOOD_TYPE } from '../actions/FoodType';
import { findIndexOf, removeFromArr, sortArr } from '../utility/arrayMethods';

export const location = (state = {}, action) => {
	switch (action.type) {
		case FETCH_LOCATION_SUCCESS:
			return {
				...action.location, fetching: false
			}
		case FETCH_LOCATION_ERROR:
			console.log(action.error);
			return {
				longitude: null, latitude: null, fetching: false
			}
		case FETCH_LOCATION_REQUEST:
			return {
				longitude: null, latitude: null, fetching: true
			}
		default:
			return state;
	}
}

export const foodTypes = (state = [], action) => {
	switch (action.type) {
		case UPDATE_FOOD_TYPE:
			// does not exist: add new foodType
			if (state.indexOf(action.foodType) === -1) {
				return [
					...state, action.foodType
				]
			}
			// exists: remove foodType
			else {
				let index = findIndexOf(state, action.foodType);
				return removeFromArr(state, index);
			}
		default:
			return state;
	}
}

export const businesses = (state = {}, action) => {
	switch (action.type) {
		case FETCH_BUSINESSES_SUCCESS:
			return {
				results: action.results,
				fetched: true
			};
		case FETCH_BUSINESSES_ERROR:
			console.log(action.error);
			return state;
		case FETCH_BUSINESSES_REQUEST:
			return state;
		case ALLOW_REFETCH:
			return {
				...state,
				fetched: false,
			};
		case SORT_BUSINESSES:
			return {
				...state,
				results: sortArr(state.results, state.sorting.rating_si)
			};
		case TOGGLE_RATING_SORT:
			let updatedSorting = {
				...state.sorting,
				rating_si: (state.sorting.rating_si + 1) % SORTING_TYPES.length
			};
			return {
				...state,
				sorting: updatedSorting
			};
		case INIT_SORT:
			return {
				...state,
				sorting: {
					rating_si: 1,
					prices: [1, 2, 3, 4]
				}
			};
		case UPDATE_PRICES:
			if (state.sorting === 'undefined') {
				return state;
			}
			// 0-indexing
			let i = action.price - 1;
			// remove price
			if (state.sorting.prices[i] != null) {
				let newPrices = state.sorting.prices.slice();
				// 0-indexing
				newPrices[i] = null;
				return {
					...state,
					sorting: {
						...state.sorting,
						prices: newPrices
					}
				}
			}
			// add price
			else {
				let newPrices = state.sorting.prices.slice();
				newPrices[i] = action.price;
				return {
					...state,
					sorting: {
						...state.sorting,
						prices: newPrices
					}
				}
			}
		default:
			return state;
	}
}

export const appReducer = combineReducers({
	businesses: businesses,
	user: combineReducers({
		location,
		foodTypes
	})
})

// Sort by rating. Choose category of price. Always sort by distance.


