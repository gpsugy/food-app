export const FETCH_BUSINESSES_REQUEST = 'FETCH_BUSINESSES_REQUEST';
export const FETCH_BUSINESSES_SUCCESS = 'FETCH_BUSINESSES_SUCCESS';
export const FETCH_BUSINESSES_ERROR = 'FETCH_BUSINESSES_ERROR';

export function fetchBusinessSuccess(businesses) {
	return {
		type: FETCH_BUSINESSES_SUCCESS,
		results: businesses
	}
}

export function fetchBusinessError(error) {
	return {
		type: FETCH_BUSINESSES_ERROR
	}
}

export function fetchBusinessesRequest() {
	return {
		type: FETCH_BUSINESSES_REQUEST
	}
}

export function fetchBusinesses() {
	return (dispatch) => {
		dispatch(fetchBusinessesRequest());
		return fetch(`/businesses/search`)
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
				return response;
			}).then(response => response.json())
			.then(json => dispatch(fetchBusinessSuccess(json)))
			.catch(error => dispatch(fetchBusinessError(error)));

			// .then(json => console.log(json))
			// .catch(error => console.log(error))
	}
}
