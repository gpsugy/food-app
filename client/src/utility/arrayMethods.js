import { ASCENDING, DESCENDING, NO_SORT, RATING_SORT_TYPES } from './FilterTypes';

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
	switch (RATING_SORT_TYPES[sortType_i]) {
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
		// sort by distance
		case NO_SORT:
			newArr = arr.slice();
			newArr.sort((a, b) => {
				let d1 = a.distance;
				let d2 = b.distance;
				if (d1 < d2) {
					return -1;
				}
				if (d1 > d2) {
					return 1;
				}
				return 0;
			});
			return newArr;
		default:
			return arr;
	}
}