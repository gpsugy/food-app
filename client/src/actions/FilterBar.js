export const TOGGLE_RATING_SORT = 'TOGGLE_RATING_SORT';
export const INIT_SORT = 'INIT_SORT';
export const SORT_BUSINESSES = 'SORT_BUSINESSES';
export const UPDATE_PRICES = 'UPDATE_PRICES';
export const TOGGLE_DISTANCE_FILTER = 'TOGGLE_DISTANCE_FILTER';

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