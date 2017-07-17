import { initSort } from './FilterBar';

export const FETCH_BUSINESSES_REQUEST = 'FETCH_BUSINESSES_REQUEST';
export const FETCH_BUSINESSES_SUCCESS = 'FETCH_BUSINESSES_SUCCESS';
export const FETCH_BUSINESSES_ERROR = 'FETCH_BUSINESSES_ERROR';
export const SET_BUSINESSES_FILTERS = 'SET_BUSINESSES_FILTERS';
export const ALLOW_RESULTS_REFETCH = 'ALLOW_RESULTS_REFETCH';

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

export function setBusinessesFilters(filters) {
	return {
		type: SET_BUSINESSES_FILTERS,
		filters: filters
	};
}

export function fetchBusinesses(terms, location) {
	return (dispatch, getState) => {
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
				// do not initialize sorting state if user is already logged in
				if (getState().businesses.sorting === undefined)
					dispatch(initSort());
				dispatch(fetchBusinessesSuccess(json));
				dispatch(allowResultsRefetch()); // allows user to go back to /foodTypes page
			})
			.catch(error => dispatch(fetchBusinessesError(error)));
	}
}

export function allowResultsRefetch() {
	return {
		type: ALLOW_RESULTS_REFETCH
	}
}