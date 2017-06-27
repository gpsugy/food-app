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
import { REINIT_SORT, TOGGLE_SORT } from '../actions/SortingBar';
import { SORTING_TYPES } from '../utility/SortingTypes';
import { UPDATE_FOOD_TYPE } from '../actions/FoodType';
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
				fetched: true,
				sorting: {
					rating_si: 2,
					price_si: 0,
					distance_si: 0
				}
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
		case TOGGLE_SORT:
			let updatedSorting = {
				...state.sorting,
				[action.category + '_si']: (state.sorting[action.category + '_si'] + 1) % SORTING_TYPES.length
			};
			return {
				...state,
				sorting: updatedSorting
			};
		case REINIT_SORT:
			return {
				...state,
				sorting: {
					rating_si: action.rating_si,
					price_si: action.price_si,
					distance_si: action.distance_si
				}
			};
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
