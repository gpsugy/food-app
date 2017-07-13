export const TOGGLE_RATING_SORT = 'TOGGLE_RATING_SORT';
export const INIT_SORT = 'INIT_SORT';
export const SORT_BUSINESSES = 'SORT_BUSINESSES';
export const UPDATE_PRICES = 'UPDATE_PRICES';
export const TOGGLE_DISTANCE_FILTER = 'TOGGLE_DISTANCE_FILTER';
export const USER_TOGGLE_RATING_SORT = 'USER_TOGGLE_RATING_SORT';
export const USER_UPDATE_PRICES = 'USER_UPDATE_PRICES';
export const USER_TOGGLE_DISTANCE_FILTER = 'USER_TOGGLE_DISTANCE_FILTER';

/* Businesses */

export function toggleRatingSort() {
	return {
		type: TOGGLE_RATING_SORT
	}
}

// si - "sorting index"
export function initSort() {
	return {
		type: INIT_SORT
	}
}

export function sortBusinesses() {
	return {
		type: SORT_BUSINESSES
	}
}

export function updatePrices(price) {
	return {
		type: UPDATE_PRICES,
		price: price
	}
}

export function toggleDistanceFilter() {
	return {
		type: TOGGLE_DISTANCE_FILTER
	}
}


/* User Filters */

export function userToggleRatingSort() {
	return {
		type: USER_TOGGLE_RATING_SORT
	}
}

export function userUpdatePrices(price) {
	return {
		type: USER_UPDATE_PRICES,
		price: price
	}
}

export function userToggleDistanceFilter() {
	return {
		type: USER_TOGGLE_DISTANCE_FILTER
	}
}