import { connect } from 'react-redux';

import { allowRefetch } from '../actions/Results';
import ResultList from '../components/ResultList';

// const mapStateToProps = (state, ownProps) => {
// }

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(allowRefetch());
		}
	};
}

const ResultListContainer = connect(
	null,
	mapDispatchToProps
)(ResultList)

export default ResultListContainer