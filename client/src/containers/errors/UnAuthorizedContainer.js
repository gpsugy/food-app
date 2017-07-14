import { connect } from 'react-redux';

import { clearRedirect } from '../../actions/Redirect';
import UnAuthorized from '../../components/errors/UnAuthorized';

const mapDispatchToProps = (dispatch) => ({
	onMount: () => {
		dispatch(clearRedirect());
	}
});

const UnAuthorizedContainer = connect(
	null,
	mapDispatchToProps
)(UnAuthorized)

export default UnAuthorizedContainer