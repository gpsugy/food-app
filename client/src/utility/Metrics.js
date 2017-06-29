export function convertMetersToMiles(meters, decimals) {
	let miles = meters / 1609.344;

	return Number(Math.round(miles+'e'+decimals)+'e-'+decimals);
}