import { connect } from 'react-redux';

import { fetchUserLocation } from '../actions/Location';
import { initBkgdState } from '../actions';
import LocationFinder from '../components/LocationFinder';

const mapStateToProps = (state, ownProps) => {
	return {
		fetched: state.user.location.fetched,
		fetching: state.user.location.fetching,
		email: state.user.account.email
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(fetchUserLocation());
		},
		onMount: () => {
			dispatch(initBkgdState());
		}
	}
}

const LocationFinderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationFinder)

export default LocationFinderContainer