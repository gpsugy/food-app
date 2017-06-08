import { combineReducers } from 'redux';

import {
  ADD_FOOD_TYPE,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from '../actions';

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
		case ADD_FOOD_TYPE:
			// the foodType should not already exist
			if (state.indexOf(action.foodType) === -1) {
				return [
					...state, action.foodType
				]
			}
			/* falls through */
		default:
			return state;
	}
}

export const appReducer = combineReducers({
	user: combineReducers({
		location,
		foodTypes
	})
})
