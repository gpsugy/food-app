import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  ALLOW_LOCATION_REFETCH,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from '../actions/Location';
import {
  ALLOW_RESULTS_REFETCH,
  FETCH_BUSINESSES_ERROR,
  FETCH_BUSINESSES_REQUEST,
  FETCH_BUSINESSES_SUCCESS,
  SET_BUSINESSES_FILTERS,
} from '../actions/Results';
import { CLEAR_REDIRECT, REDIRECT } from '../actions/Redirect';
import {
  DISTANCE_FILTER_TYPES,
  RATING_SORT_TYPES,
} from '../utility/FilterTypes';
import { INIT_FETCHING } from '../actions';
import {
  INIT_SORT,
  SORT_BUSINESSES,
  TOGGLE_DISTANCE_FILTER,
  TOGGLE_RATING_SORT,
  UPDATE_PRICES,
  USER_TOGGLE_DISTANCE_FILTER,
  USER_TOGGLE_RATING_SORT,
  USER_UPDATE_PRICES,
} from '../actions/FilterBar';
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../actions/Account';
import {
  REFRESH_UPDATED,
  SETTINGS_ERROR,
  SETTINGS_REQUEST,
  SET_USER_FILTERS,
  UPDATE_SETTINGS_ERROR,
  UPDATE_SETTINGS_REQUEST,
  UPDATE_SETTINGS_SUCCESS,
} from '../actions/Settings';
import { UPDATE_FOOD_TYPE } from '../actions/FoodType';
import { destroyCookie, setTokenInCookie } from '../utility/Cookie';
import { findIndexOf, removeFromArr, sortArr } from '../utility/arrayMethods';

export const location = (state = {}, action) => {
	switch (action.type) {
		case FETCH_LOCATION_SUCCESS:
			return {
				...action.location,
				fetching: false,
				fetched: true
			};
		case FETCH_LOCATION_ERROR:
			console.log(action.error);
			return {
				longitude: null, latitude: null, fetching: false
			};
		case FETCH_LOCATION_REQUEST:
			return {
				longitude: null, latitude: null, fetching: true
			};
		case ALLOW_LOCATION_REFETCH:
			return {
				...state,
				fetched: refetch(state.fetched, action),
				fetching: false
			};
		// needs to be used onMount of component for spinner to be removed on page refresh
		case INIT_FETCHING:
			return {
				...state,
				fetching: false
			};
		case 'persist/REHYDRATE':
			return (action.payload.user !== undefined
				&& action.payload.user.location !== undefined) ? action.payload.user.location : state;
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
		case 'persist/REHYDRATE':
			return (action.payload.user !== undefined
				&& action.payload.user.foodTypes !== undefined) ? action.payload.user.foodTypes : state;
		default:
			return state;
	}
}

export const account = (state = {}, action) => {
	switch (action.type) {
		case SIGNUP_REQUEST:
		case LOGIN_REQUEST:
		case SETTINGS_REQUEST:
		case UPDATE_SETTINGS_REQUEST:
			return {
				...state,
				isFetching: true
			};
		case SIGNUP_SUCCESS:
		case LOGIN_SUCCESS:
			setTokenInCookie(action.token);
			return {
				...state,
				isFetching: false,
				email: action.email,
				fullName: action.fullName
			};
		case UPDATE_SETTINGS_SUCCESS:
			return {
				...state,
				isFetching: false,
				updated: true
			};
		case SET_USER_FILTERS:
			return {
				...state,
				isFetching: false,
				default: {
					filters: (state.default === undefined) ? filters({}, action) : filters(state.default.filters, action)
				}
			};
		// needs to be used onMount of component for spinner to be removed on page refresh
		case INIT_FETCHING:
			return {
				...state,
				isFetching: false
			};
		case USER_TOGGLE_RATING_SORT:
		case USER_UPDATE_PRICES:
		case USER_TOGGLE_DISTANCE_FILTER:
			return {
				...state,
				default: {
					filters: filters(state.default.filters, action)
				}
			}
		case LOGOUT:
			destroyCookie('token');
			return {
				...state,
				email: null
			};
		case SIGNUP_ERROR:
		case LOGIN_ERROR:
		case SETTINGS_ERROR:
		case UPDATE_SETTINGS_ERROR:
			console.log(action.error);
			return state;
		case REFRESH_UPDATED:
			console.log('refresh updated');
			return {
				...state,
				updated: false
			};
		case 'persist/REHYDRATE':
			return (action.payload.user !== undefined
				&& action.payload.user.account !== undefined) ? action.payload.user.account : state;
		default:
			return state;
	}
}

export const filters = (state = {}, action) => {
	switch (action.type) {
		case TOGGLE_RATING_SORT:
		case USER_TOGGLE_RATING_SORT:
			return {
				...state,
				rating_si: (state.rating_si + 1) % RATING_SORT_TYPES.length
			};
		case INIT_SORT:
			return {
				rating_si: 1,
				prices: [1, 2, 3, 4],
				distance_fi: 0
			};
		case SET_USER_FILTERS:
		case SET_BUSINESSES_FILTERS:
			// default settings has never been set for this user - initialize
			if (action.filters.rating_si === undefined) {
				return {
					rating_si: 1,
					prices: [1, 2, 3, 4],
					distance_fi: 0
				}
			}
			else {
				return action.filters
			}
		case UPDATE_PRICES:
		case USER_UPDATE_PRICES:
			if (state === 'undefined') {
				return state;
			}
			// 0-indexing
			let i = action.price - 1;
			// remove price
			if (state.prices[i] != null) {
				let newPrices = state.prices.slice();
				// 0-indexing
				newPrices[i] = null;
				return {
					...state,
					prices: newPrices
				};
			}
			// add price
			else {
				let newPrices = state.prices.slice();
				newPrices[i] = action.price;
				return {
					...state,
					prices: newPrices
				}
			}
		case TOGGLE_DISTANCE_FILTER:
		case USER_TOGGLE_DISTANCE_FILTER:
			return {
				...state,
				distance_fi: (state.distance_fi + 1) % DISTANCE_FILTER_TYPES.length
			};
		default:
			return state;
	}
}

export const businesses = (state = {}, action) => {
	switch (action.type) {
		case FETCH_BUSINESSES_SUCCESS:
			return {
				...state, 
				results: action.results,
				fetched: true,
				fetching: false
			};
		case FETCH_BUSINESSES_ERROR:
			console.log(action.error);
			return {
				...state,
				fetching: false
			};
		case FETCH_BUSINESSES_REQUEST:
			return {
				...state,
				fetching: true
			}
		case ALLOW_RESULTS_REFETCH:
			return {
				...state,
				fetched: refetch(state.fetched, action),
				fetching: false
			};
		// needs to be used onMount of component for spinner to be removed on page refresh
		case INIT_FETCHING:
			return {
				...state,
				fetching: false
			};
		case SORT_BUSINESSES:
			return {
				...state,
				results: sortArr(state.results, state.sorting.rating_si)
			};
		case TOGGLE_RATING_SORT:
		case INIT_SORT:
		case UPDATE_PRICES:
		case TOGGLE_DISTANCE_FILTER:
			return {
				...state,
				sorting: filters(state.sorting, action)
			};
		case SET_BUSINESSES_FILTERS:
			return {
				...state,
				sorting: filters(state.sorting, action)
			}
		case 'persist/REHYDRATE':
			return (action.payload.businesses !== undefined) ? action.payload.businesses : state;
		default:
			return state;
	}
}

export const redirect = (state = null, action) => {
	switch (action.type) {
		case REDIRECT:
			return action.route;
		case CLEAR_REDIRECT:
			return null;
		default:
			return state;
	}
}

export const refetch = (state = null, action) => {
	switch (action.type) {
		case ALLOW_LOCATION_REFETCH:
		case ALLOW_RESULTS_REFETCH:
			return false;
		default:
			return state;
	}
}

export const appReducer = combineReducers({
	businesses: businesses,
	user: combineReducers({
		location,
		foodTypes,
		account
	}),
	redirect: redirect,
	form: formReducer
})

