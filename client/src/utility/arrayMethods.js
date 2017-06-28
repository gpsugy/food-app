import { ASCENDING, DESCENDING, NO_SORT, SORTING_TYPES } from './SortingTypes';

export function findIndexOf(arr, elt) {
	let index = -1;
	for (let i=0; i<arr.length; i++) {
		if (arr[i] === elt) {
			index = i;
			break;
		}
	}
	return index;
}

export function removeFromArr(arr, index) {
	let before = arr.slice(0, index);
	let after = arr.slice(index + 1);
	return before.concat(after);
}

export function sortArr(arr, sortType_i) {
	let newArr = [];
	switch (SORTING_TYPES[sortType_i]) {
		// previously DESCENDING - simply reverse
		case ASCENDING:
			for (let i = arr.length - 1; i >= 0; i--) {
				newArr.push(arr[i]);
			}
			return newArr;
		case DESCENDING:
			newArr = arr.slice();
			newArr.sort((a, b) => {
				return b.rating - a.rating;
			});
			return newArr;
		// sort by id
		case NO_SORT:
			newArr = arr.slice();
			newArr.sort((a, b) => {
				let id1 = a.id.toLowerCase();
				let id2 = b.id.toLowerCase();
				if (id1 < id2) {
					return -1;
				}
				if (id1 > id2) {
					return 1;
				}
				return 0;
			});
			return newArr;
		default:
			return arr;
	}
}