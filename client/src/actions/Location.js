// action types
export const FETCH_USER_LOCATION = 'FETCH_USER_LOCATION';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR';
export const FETCH_LOCATION_REQUEST = 'FETCH_LOCATION_REQUEST';
export const ALLOW_LOCATION_REFETCH = 'ALLOW_LOCATION_REFETCH';

// action creators
export function fetchLocationSuccess(location) {
	return {
		type: FETCH_LOCATION_SUCCESS,
		location: {
			latitude: location.latitude,
			longitude: location.longitude
		}
	}
}

export function fetchLocationError(error) {
	return {
		type: FETCH_LOCATION_ERROR,
		error: error
	}
}

export function fetchLocationRequest() {
	return {
		type: FETCH_LOCATION_REQUEST
	}
}

export function allowLocationRefetch() {
	return {
		type: ALLOW_LOCATION_REFETCH
	};
}

export function fetchUserLocation() {
	return (dispatch) => {
		var options = {
			enableHighAccuracy: true,
			timeout: 15000,
			maximumAge: 0
		};

		// set fetching state to true
		dispatch(fetchLocationRequest());

		navigator.geolocation.getCurrentPosition((pos) => {
				var crd = pos.coords;
				console.log('Your current position is:');
				console.log(`Latitude : ${crd.latitude}`);
				console.log(`Longitude: ${crd.longitude}`);
				console.log(`More or less ${crd.accuracy} meters.`);
				dispatch(fetchLocationSuccess(crd));
				dispatch(allowLocationRefetch());
			}, (err) => {
				// alert(`ERROR(${err.code}): ${err.message}`);
				dispatch(fetchLocationError(err.message));
			}, options
		);
	}
}

