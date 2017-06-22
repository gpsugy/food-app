import { connect } from 'react-redux';

import { fetchBusinesses } from '../actions/Results';
import FoodTypeList from '../components/FoodTypeList';

// const mapStateToProps = (state, ownProps) => {
// 	console.log(state);
// 	return {
// 		businesses: state.businesses
// 	};
// }

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick: () => {
			dispatch(fetchBusinesses());
		}
	}
}

const FoodTypeListContainer = connect(
	null,
	mapDispatchToProps
)(FoodTypeList)

export default FoodTypeListContainer