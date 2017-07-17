import {  } from '../actions/Redirect';

import { connect } from 'react-redux';

import ResultList from '../components/ResultList';

const mapStateToProps = (state, ownProps) => {
	return {
		results: state.businesses.results,
		sorting: state.businesses.sorting
	};
}

const ResultListContainer = connect(
	mapStateToProps,
	null
)(ResultList)

export default ResultListContainer