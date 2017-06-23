import { connect } from 'react-redux';

import { allowRefetch } from '../actions/Results';
import ResultList from '../components/ResultList';

const mapStateToProps = (state, ownProps) => {
	return {
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