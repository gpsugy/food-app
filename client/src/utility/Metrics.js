import { DISTANCE_FILTER_TYPES, DRIVING, WALKING } from './FilterTypes';

export function convertMetersToMiles(meters, decimals) {
	let miles = meters / 1609.344;

	return Number(Math.round(miles+'e'+decimals)+'e-'+decimals);
}

export function convertDistanceFI_ToMiles(distance_fi) {
	switch (DISTANCE_FILTER_TYPES[distance_fi]) {
		case WALKING:
			return 1.0;
		case DRIVING:
			return 5.0;
		default:
			return 10.0;
	}
};