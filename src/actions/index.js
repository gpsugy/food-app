import fetch from 'isomorphic-fetch';

// action types
export const FETCH_USER_LOCATION = 'FETCH_USER_LOCATION';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR';

// action creators
export function fetchLocationSuccess(location) {
	return {
		type: FETCH_LOCATION_SUCCESS,
		location: {
			lat: location.lat,
			lng: location.lng
		}
	}
}

export function fetchLocationError(error) {
	return {
		type: FETCH_LOCATION_ERROR,
		error: error
	}
}

// Google Geolocation API Key: AIzaSyAAhPjB4nv3GV-alzYp6NlGN2dpnjSxHWI

// export function fetchUserLocation() {
// 	return {
// 		type: FETCH_USER_LOCATION
// 	}
// }
