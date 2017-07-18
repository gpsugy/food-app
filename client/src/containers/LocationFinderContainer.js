import { connect } from 'react-redux';

import { clearRedirect } from '../actions/Redirect';
import { fetchUserLocation } from '../actions';
import LocationFinder from '../components/LocationFinder';

const mapStateToProps = (state, ownProps) => {
	return {
		fetched: state.user.location.fetched
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(fetchUserLocation());
		},
		onMount: () => {
			dispatch(clearRedirect());
		}
	}
}

const LocationFinderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationFinder)

export default LocationFinderContainer