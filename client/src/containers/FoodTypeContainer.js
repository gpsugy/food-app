import { connect } from 'react-redux';

import { findIndexOf } from '../utility/arrayMethods';
import { updateFoodTypes } from '../actions/FoodType';
import FoodType from '../components/FoodType';

const mapStateToProps = (state, ownProps) => {
	let index = findIndexOf(state.user.foodTypes, ownProps.foodType);

	return {
		classSelected: index !== -1 ? 'selected' : ''
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick: () => {
			dispatch(updateFoodTypes(ownProps.foodType));
		}
	}
}

const FoodTypeContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FoodType)

export default FoodTypeContainer