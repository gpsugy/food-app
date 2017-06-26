export const TOGGLE_SORT = 'TOGGLE_SORT';
export const CONSTRUCT_SORT = 'CONSTRUCT_SORT';

export function toggleSort(category) {
	return {
		type: TOGGLE_SORT,
		category: category
	}
}

// si - "sorting index"
export function constructSort(rating_si, price_si, distance_si) {
	return {
		type: CONSTRUCT_SORT,
		rating_si: rating_si,
		price_si: price_si,
		distance_si: distance_si
	}
}