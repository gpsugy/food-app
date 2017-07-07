export const SIGNUP_REQUEST = 'SIGNUP_SEND_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export function signupRequest() {
	return {
		type: SIGNUP_REQUEST
	};
}

export function signupSuccess(user) {
	return {
		type: SIGNUP_SUCCESS,
				email: user.email
	};
}

export function signupError(error) {
	return {
		type: SIGNUP_ERROR,
		error
	};
}

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
