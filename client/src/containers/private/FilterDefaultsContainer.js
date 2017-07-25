import { connect } from 'react-redux';

import { refreshUpdated } from '../../actions/Settings';
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
			dispatch(refreshUpdated());
			dispatch(userToggleRatingSort());
		},
		clickPrice: (price) => {
			dispatch(refreshUpdated());
			dispatch(userUpdatePrices(price));
		},
		clickDistance: () => {
			dispatch(refreshUpdated());
			dispatch(userToggleDistanceFilter());
		},
		onMount: () => {
			dispatch(refreshUpdated());
		}
	};
}

const FilterDefaultsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterBar)

export default FilterDefaultsContainer