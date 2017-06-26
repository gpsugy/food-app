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
import { SORTING_TYPES } from '../utility/SortingTypes';
import { UPDATE_FOOD_TYPE } from '../actions/FoodType';
import { TOGGLE_SORT } from '../actions/SortingBar';
import { findIndexOf, removeFromArr } from '../utility/arrayMethods';

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
				fetched: false
			};
		default:
			return state;
	}
}

// sorting: {
// 	rating_si: 1,
// 	price_si: 0,
// 	distance_si: 2 
// }
export const sorting = (state = {}, action) => {
	switch (action.type) {
		case TOGGLE_SORT:
			return {
				...state,
				[action.category + '_si']: (state[action.category + '_si'] + 1) % SORTING_TYPES.length
			}
		// case CONSTRUCT_SORT:
		// 	return {

		// 	}
		default:
			return state;
		}
}

export const appReducer = combineReducers({
	businesses: businesses,
	user: combineReducers({
		location,
		foodTypes
	}),
	sorting: sorting
})
