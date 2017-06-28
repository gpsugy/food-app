import { connect } from 'react-redux';

import { allowRefetch } from '../actions/Results';
import ResultList from '../components/ResultList';

const mapStateToProps = (state, ownProps) => {
	console.log(state.user.location);
	return {
		location: state.user.location,
		results: state.businesses.results
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(allowRefetch());
		}
	};
}

const ResultListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ResultList)

export default ResultListContainer