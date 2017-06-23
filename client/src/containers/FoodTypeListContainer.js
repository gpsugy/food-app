import { connect } from 'react-redux';

import { fetchBusinesses } from '../actions/Results';
import FoodTypeList from '../components/FoodTypeList';

const mapStateToProps = (state, ownProps) => {
	return {
		fetched: state.businesses.fetched
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		fetched: stateProps.fetched,
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