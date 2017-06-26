import { connect } from 'react-redux';

import SortingBar from '../components/SortingBar';

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

const SortingBarContainer = connect(
	null,
	null
)(SortingBar)

export default SortingBarContainer