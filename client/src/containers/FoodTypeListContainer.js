import { connect } from 'react-redux';

import { fetchBusinesses } from '../actions/Results';
import FoodTypeList from '../components/FoodTypeList';

const mapStateToProps = (state, ownProps) => {
	return {
		fetchedBusinesses: (state.businesses !== undefined && state.businesses.length !== 0) ? true : false
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick: () => {
			dispatch(fetchBusinesses());
		}
	}
}

const FoodTypeListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FoodTypeList)

export default FoodTypeListContainer