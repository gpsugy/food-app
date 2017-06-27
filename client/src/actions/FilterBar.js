export const TOGGLE_RATING_SORT = 'TOGGLE_RATING_SORT';
export const INIT_SORT = 'INIT_SORT';

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