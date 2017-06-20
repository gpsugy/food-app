import { connect } from 'react-redux';

import { fetchUserLocation } from '../actions';
import LocationFinder from '../components/LocationFinder';

const mapStateToProps = (state, ownProps) => {
	return {
		location: state.user.location
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