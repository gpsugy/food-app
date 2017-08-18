import { connect } from 'react-redux';

import { initBkgdState } from '../../actions';
import UnAuthorized from '../../components/errors/UnAuthorized';

const mapDispatchToProps = (dispatch) => ({
	onMount: () => {
		dispatch(initBkgdState());
	}
});

const UnAuthorizedContainer = connect(
	null,
	mapDispatchToProps
)(UnAuthorized)

export default UnAuthorizedContainer