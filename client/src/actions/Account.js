import { getTokenFromCookie } from '../utility/Cookie';
import { redirect } from './Redirect';
import { setBusinessesFilters } from './Results';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SETTINGS_REQUEST = 'SETTINGS_REQUEST';
export const SET_USER_FILTERS = 'SET_USER_FILTERS';
export const SETTINGS_ERROR = 'SETTINGS_ERROR';

/* Signup */

export function signupRequest() {
	return {
		type: SIGNUP_REQUEST
	};
}

export function signupSuccess(user) {
	return {
		type: SIGNUP_SUCCESS,
		token: user.token,
		email: user.email
	};
}

export function signupError(error) {
	return {
		type: SIGNUP_ERROR,
		error
	};
}

/* Login */

export function loginRequest() {
	return {
		type: LOGIN_REQUEST
	};
}

export function loginSuccess(user) {
	return {
		type: LOGIN_SUCCESS,
		token: user.token,
		email: user.email
	};
}

export function loginError(error) {
	return {
		type: LOGIN_ERROR,
		error
	};
}

/* Settings */

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

/* API Calls */

export function requestSignup(user) {
	return (dispatch) => {
		dispatch(signupRequest());
		return fetch("/signup", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
				return response;
			}).then(response => response.json())
			.then(json => dispatch(signupSuccess(json)))
			.catch(error => dispatch(signupError(error)));
	}
}

export function requestLogin(user) {
	return (dispatch) => {
		dispatch(loginRequest());
		return fetch("/login", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
				return response;
			}).then(response => response.json())
			.then(json => dispatch(loginSuccess(json)))
			.catch(error => dispatch(loginError(error)));
	}
}

export function getUserSettings(email) {
	return (dispatch, getState) => {
		dispatch(settingsRequest());
		let token = getTokenFromCookie('token');
		console.log('token is: ' + token);

		return fetch(`/settings?email=${email}`, {
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
