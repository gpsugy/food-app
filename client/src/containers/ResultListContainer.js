import { connect } from 'react-redux';

import { allowRefetch } from '../actions/Results';
import ResultList from '../components/ResultList';

const mapStateToProps = (state, ownProps) => {
	return {
		location: state.user.location,
		results: state.businesses.results,
		sorting: state.businesses.sorting
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