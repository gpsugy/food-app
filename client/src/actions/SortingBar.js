export const TOGGLE_SORT = 'TOGGLE_SORT';

export function toggleSort(category) {
	return {
		type: TOGGLE_SORT,
		category: category
	}
}
