export const REDIRECT = 'REDIRECT';
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT';

export function redirect(route) {
	return {
		type: REDIRECT,
		route
	};
}

export function clearRedirect() {
	return {
		type: CLEAR_REDIRECT
	}
}