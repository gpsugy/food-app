import { fetchLocationError, fetchLocationSuccess } from '../actions';
import { user } from './index';

describe('(Reducer) User', () => {
	it('return user object on FETCH_LOCATION_SUCCESS', () => {
		let loc = {
		    "lat": 51.0,
		    "lng": -0.1
		};
		expect(
			user({}, fetchLocationSuccess(loc))
		).toEqual(
			{
				location: {
					lat: loc.lat,
					lng: loc.lng
				}
			}
		);
	})
});

describe('(Reducer) User', () => {
	it('return user object with null location on FETCH_LOCATION_ERROR', () => {
		let loc = {
		    "lat": 15.9,
		    "lng": -0.3
		};
		expect(
			user({}, fetchLocationError(loc))
		).toEqual(
			{
				location: null
			}
		);
	})
});