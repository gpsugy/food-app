import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from '../actions';

export const user = (state = {}, action) => {
	switch (action.type) {
		case FETCH_LOCATION_SUCCESS:
			return {
				...state,
				location: { ...action.location, fetching: false }
			}
		case FETCH_LOCATION_ERROR:
			console.log(action.error);
			return {
				...state,
				location: { longitude: null, latitude: null, fetching: false }
			}
		case FETCH_LOCATION_REQUEST:
			return {
				...state,
				location: { longitude: null, latitude: null, fetching: true }
			}
		default:
			return state;
	}
}

export function appReducer(state = {}, action) {
	return {
		user: user(state.user, action)
	}
}

