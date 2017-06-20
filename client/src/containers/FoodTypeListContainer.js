import { connect } from 'react-redux';

import { fetchYelp } from '../actions/Results';
import FoodTypeList from '../components/FoodTypeList';

// const mapStateToProps = (state, ownProps) => {
// }

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleClick: () => {
			dispatch(fetchYelp());
		}
	}
}

const FoodTypeListContainer = connect(
	null,
	mapDispatchToProps
)(FoodTypeList)

export default FoodTypeListContainer