import { FETCH_LOCATION_ERROR, FETCH_LOCATION_SUCCESS } from '../actions';

export const user = (state = {}, action) => {
	switch (action.type) {
		case FETCH_LOCATION_SUCCESS:
			return {
				location: action.location
			}
		case FETCH_LOCATION_ERROR:
			console.log(action.error);
			return {
				location: null
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

