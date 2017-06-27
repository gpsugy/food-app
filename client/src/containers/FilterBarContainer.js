import { connect } from 'react-redux';

import FilterBar from '../components/FilterBar';

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		results: state.businesses.results
// 	};
// }

const mapDispatchToProps = (dispatch) => {
	return {
		clickRating: () => {
			// dispatch(allowRefetch());
			console.log('clicked rating');
		}
	};
}

const FilterBarContainer = connect(
	null,
	mapDispatchToProps
)(FilterBar)

export default FilterBarContainer