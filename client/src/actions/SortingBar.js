export const TOGGLE_SORT = 'TOGGLE_SORT';
export const REINIT_SORT = 'REINIT_SORT';

export function toggleSort(category) {
	return {
		type: TOGGLE_SORT,
		category: category
	}
}

// si - "sorting index"
export function reInitSort(rating_si, price_si, distance_si) {
	return {
		type: REINIT_SORT,
		rating_si: rating_si,
		price_si: price_si,
		distance_si: distance_si
	}
}