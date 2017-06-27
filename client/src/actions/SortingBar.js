export const TOGGLE_RATING_SORT = 'TOGGLE_RATING_SORT';
export const INIT_SORT = 'INIT_SORT';

export function toggleRatingSort(category) {
	return {
		type: TOGGLE_RATING_SORT,
		category: category
	}
}

// si - "sorting index"
export function initSort() {
	return {
		type: INIT_SORT
	}
}