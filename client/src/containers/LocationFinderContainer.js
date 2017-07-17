import { connect } from 'react-redux';

import { fetchUserLocation } from '../actions';
import LocationFinder from '../components/LocationFinder';

const mapStateToProps = (state, ownProps) => {
	let fetched = (state.user.location.fetched !== undefined) ? state.user.location.fetched : false;
	console.log(fetched);
	return {
		fetched: fetched
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(fetchUserLocation());
		}
	}
}

const LocationFinderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationFinder)

export default LocationFinderContainer