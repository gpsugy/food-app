export const TOGGLE_RATING_SORT = 'TOGGLE_RATING_SORT';
export const INIT_SORT = 'INIT_SORT';
export const SORT_BUSINESSES = 'SORT_BUSINESSES';

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

export function sortBusinesses(rating_si) {
	return {
		type: SORT_BUSINESSES,
		new_rating_si: rating_si
	}
}