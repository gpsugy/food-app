export const NO_SORT = 'NO_SORT';
export const DESCENDING = 'DESCENDING';
export const ASCENDING = 'ASCENDING';

export const WALKING = 'WALKING';
export const DRIVING = 'DRIVING';
export const ROAD_TRIP = 'ROAD_TRIP';

// IMPORTANT: Assumed to be this order in utility/arrayMethods.js
export const RATING_SORT_TYPES = [
	NO_SORT,
	DESCENDING,
	ASCENDING
];

export const DISTANCE_FILTER_TYPES = [
	WALKING,
	DRIVING,
	ROAD_TRIP
];

export function convertDistanceFI_ToMiles(distance_fi) {
	switch (DISTANCE_FILTER_TYPES[distance_fi]) {
		case WALKING:
			return 1.0;
		case DRIVING:
			return 5.0;
		default:
			return 15.0;
	}
};