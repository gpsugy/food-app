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