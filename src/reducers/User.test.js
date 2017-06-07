import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  fetchLocationError,
  fetchLocationRequest,
  fetchLocationSuccess,
} from '../actions';
import { location } from './index';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('(Reducer) Location', () => {
	it('return location object on FETCH_LOCATION_SUCCESS', () => {
		let loc = {
		    "latitude": 51.0,
		    "longitude": -0.1
		};
		expect(
			location({}, fetchLocationSuccess(loc))
		).toEqual(
			{
				latitude: loc.latitude,
				longitude: loc.longitude,
				fetching: false
			}
		);
	})
});

describe('(Reducer) Location', () => {
	it('return location object with null location on FETCH_LOCATION_ERROR', () => {
		let loc = {
		    "latitude": 15.9,
		    "longitude": -0.3
		};
		expect(
			location({}, fetchLocationError(loc))
		).toEqual(
			{
				latitude: null,
				longitude: null,
				fetching: false
			}
		);
	})
});

describe('(Reducer) Location', () => {
	it('return location object with on fetching = true on FETCH_LOCATION_REQUEST', () => {
		expect(
			location({}, fetchLocationRequest())
		).toEqual(
			{
				latitude: null,
				longitude: null,
				fetching: true
			}
		);
	})
});