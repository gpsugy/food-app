export const TOGGLE_SORT = 'TOGGLE_SORT';
export const INIT_SORT = 'INIT_SORT';

export function toggleSort(category) {
	return {
		type: TOGGLE_SORT,
		category: category
	}
}

// si - "sorting index"
export function initSort() {
	return {
		type: INIT_SORT
	}
}