import { initSort } from './FilterBar';

export const FETCH_BUSINESSES_REQUEST = 'FETCH_BUSINESSES_REQUEST';
export const FETCH_BUSINESSES_SUCCESS = 'FETCH_BUSINESSES_SUCCESS';
export const FETCH_BUSINESSES_ERROR = 'FETCH_BUSINESSES_ERROR';
export const ALLOW_REFETCH = 'ALLOW_REFETCH';

export function fetchBusinessesSuccess(businesses) {
	return {
		type: FETCH_BUSINESSES_SUCCESS,
		results: businesses
	}
}

export function fetchBusinessesError(error) {
	return {
		type: FETCH_BUSINESSES_ERROR
	}
}

export function fetchBusinessesRequest() {
	return {
		type: FETCH_BUSINESSES_REQUEST
	}
}

export function fetchBusinesses(terms, location) {
	return (dispatch) => {
		dispatch(fetchBusinessesRequest());
		return fetch(`/businesses/search?term=${terms.join('+')}&latitude=${location.latitude}&longitude=${location.longitude}`,
			{credentials: 'include'})
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
				return response;
			}).then(response => response.json())
			.then(json => {
				dispatch(initSort());
				dispatch(fetchBusinessesSuccess(json));
			})
			.catch(error => dispatch(fetchBusinessesError(error)));
	}
}

export function allowRefetch() {
	return {
		type: ALLOW_REFETCH
	}
}