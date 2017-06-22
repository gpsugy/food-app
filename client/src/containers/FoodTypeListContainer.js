import { connect } from 'react-redux';

import { fetchBusinesses } from '../actions/Results';
import FoodTypeList from '../components/FoodTypeList';

const mapStateToProps = (state, ownProps) => {
	return {
		businesses: state.businesses
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		businesses: stateProps.businesses,
		handleClick: () => {
			dispatchProps.dispatch(fetchBusinesses());
		}
	};
}

const FoodTypeListContainer = connect(
	mapStateToProps,
	null,
	mergeProps
)(FoodTypeList)

export default FoodTypeListContainer