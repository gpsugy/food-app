import { connect } from 'react-redux';

import { testJWT } from '../../actions/Account';
import Settings from '../../components/private/Settings';

const mapStateToProps = (state) => {
	return {
		account: state.user.account
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		handleClick: () => {
			dispatchProps.dispatch(testJWT(stateProps.account));
		}
	};
}

const SettingsContainer = connect(
	mapStateToProps,
	null,
	mergeProps
)(Settings)

export default SettingsContainer