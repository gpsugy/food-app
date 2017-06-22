import { connect } from 'react-redux';

import { fetchBusinesses } from '../actions/Results';
import FoodTypeList from '../components/FoodTypeList';

const mapStateToProps = (state, ownProps) => {
	return {
		businesses: state.businesses
	};
}

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		handleClick: () => {
// 			dispatch(fetchBusinesses());
// 		}
// 	}
// }

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		businesses: stateProps.businesses,
		handleClick: () => {
			console.log(stateProps.businesses);
			console.log('interesting');
		}
	};
}

const FoodTypeListContainer = connect(
	mapStateToProps,
	null,
	mergeProps
)(FoodTypeList)

export default FoodTypeListContainer