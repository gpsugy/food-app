import { connect } from 'react-redux';

import {
  sortBusinesses,
  toggleRatingSort,
  updatePrices,
} from '../actions/FilterBar';
import FilterBar from '../components/FilterBar';

const mapStateToProps = (state, ownProps) => {
	return {
		sorting: state.businesses.sorting
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickRating: () => {
			dispatch(toggleRatingSort());
			dispatch(sortBusinesses());
		},
		clickPrice: (price) => {
			dispatch(updatePrices(price));
		}
	};
}

const FilterBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterBar)

export default FilterBarContainer