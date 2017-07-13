import { connect } from 'react-redux';

import {
  userToggleDistanceFilter,
  userToggleRatingSort,
  userUpdatePrices,
} from '../../actions/FilterBar';
import FilterBar from '../../components/FilterBar';

const mapStateToProps = (state, ownProps) => {
	return {
		sorting: state.user.account.default.filters
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickRating: () => {
			dispatch(userToggleRatingSort());
		},
		clickPrice: (price) => {
			dispatch(userUpdatePrices(price));
		},
		clickDistance: () => {
			// console.log('clicked distance');
			dispatch(userToggleDistanceFilter());
		}
	};
}

const FilterDefaultsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterBar)

export default FilterDefaultsContainer