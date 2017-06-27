import { connect } from 'react-redux';

import SortingBar from '../components/SortingBar';

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

const SortingBarContainer = connect(
	null,
	mapDispatchToProps
)(SortingBar)

export default SortingBarContainer