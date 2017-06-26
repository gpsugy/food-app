import { connect } from 'react-redux';

import FilterBar from '../components/FilterBar';

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		results: state.businesses.results
// 	};
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		handleClick: () => {
// 			dispatch(allowRefetch());
// 		}
// 	};
// }

const FilterBarContainer = connect(
	null,
	null
)(FilterBar)

export default FilterBarContainer