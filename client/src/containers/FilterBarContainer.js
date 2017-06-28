import { connect } from 'react-redux';

import { sortBusinesses, toggleRatingSort } from '../actions/FilterBar';
import FilterBar from '../components/FilterBar';

const mapStateToProps = (state, ownProps) => {
	console.log(state.businesses.sorting);
	return {
		sorting: state.businesses.sorting
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickRating: () => {
			dispatch(toggleRatingSort());
			dispatch(sortBusinesses());
		}
	};
}

const FilterBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterBar)

export default FilterBarContainer