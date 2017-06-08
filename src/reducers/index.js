import { combineReducers } from 'redux';

import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from '../actions';
import { UPDATE_FOOD_TYPE } from '../actions/FoodType';

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

const findIndexOf = (arr, elt) => {
	let index = -1;
	for (let i=0; i<arr.length; i++) {
		if (arr[i] === elt) {
			index = i;
			break;
		}
	}

	return index;
}

const removeFromArr = (arr, index) => {
	let before = arr.slice(0, index);
	let after = arr.slice(index + 1);
	return before.concat(after);
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

export const appReducer = combineReducers({
	user: combineReducers({
		location,
		foodTypes
	})
})
