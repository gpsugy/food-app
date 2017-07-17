import { getTokenFromCookie } from '../utility/Cookie';
import { redirect } from './Redirect';
import { setBusinessesFilters } from './Results';

export const SETTINGS_REQUEST = 'SETTINGS_REQUEST';
export const SET_USER_FILTERS = 'SET_USER_FILTERS';
export const SETTINGS_ERROR = 'SETTINGS_ERROR';
export const UPDATE_SETTINGS_REQUEST = 'UPDATE_SETTINGS_REQUEST';
export const UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS';
export const UPDATE_SETTINGS_ERROR = 'UPDATE_SETTINGS_ERROR';

export function settingsRequest() {
	return {
		type: SETTINGS_REQUEST
	};
}

export function setUserFilters(user) {
	return {
		type: SET_USER_FILTERS,
		filters: user.default.filters
	};
}

export function settingsError(error) {
	return {
		type: SETTINGS_ERROR,
		error
	};
}

export function updateSettingsRequest() {
	return {
		type: UPDATE_SETTINGS_REQUEST
	};
}

export function updateSettingsSuccess() {
	return {
		type: UPDATE_SETTINGS_SUCCESS
	};
}

export function updateSettingsError(error) {
	return {
		type: UPDATE_SETTINGS_ERROR,
		error
	};
}

export function getUserSettings() {
	return (dispatch, getState) => {
		dispatch(settingsRequest());
		let token = getTokenFromCookie('token');
		console.log('token is: ' + token);

		return fetch(`/settings`, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `JWT ${token}`
			}
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				// unauthorized
				if (response.status === 401)
					dispatch(redirect('/restricted'));
				throw error;
			}
			return response;
		}).then(response => response.json())
		.then(json => dispatch(setUserFilters(json)))
		.catch(error => dispatch(settingsError(error)))
		.then(() => dispatch(setBusinessesFilters(getState().user.account.default.filters)))
		.catch(error => console.log('setBusinessesFilters ' + error));
	}
}

export function updateUserSettings(filters) {
	return (dispatch) => {
		dispatch(updateSettingsRequest());
		let token = getTokenFromCookie('token');
		console.log('token is: ' + token);

		return fetch(`/filter-defaults`, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': `JWT ${token}`
			},
			body: JSON.stringify(filters)
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				// unauthorized
				if (response.status === 401)
					dispatch(redirect('/restricted'));
				throw error;
			}
			return response;
		}).then(response => response.json())
		.then(json => {
			dispatch(updateSettingsSuccess());
			dispatch(setBusinessesFilters(json.filters));
		})
		.catch(error => dispatch(updateSettingsError(error)))
	}
}
