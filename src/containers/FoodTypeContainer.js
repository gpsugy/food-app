import { connect } from 'react-redux';

import { updateFoodTypes } from '../actions';
import FoodType from '../components/FoodType';

const mapStateToProps = (state, ownProps) => {
	let index = -1;
	for (let i=0; i<state.user.foodTypes.length; i++) {
		if (state.user.foodTypes[i] === ownProps.foodType) {
			index = i;
			break;
		}
	}

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