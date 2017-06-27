import { connect } from 'react-redux';

import { toggleRatingSort } from '../actions/FilterBar';
import FilterBar from '../components/FilterBar';

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		results: state.businesses.results
// 	};
// }

const mapDispatchToProps = (dispatch) => {
	return {
		clickRating: () => {
			dispatch(toggleRatingSort());
		}
	};
}

const FilterBarContainer = connect(
	null,
	mapDispatchToProps
)(FilterBar)

export default FilterBarContainer