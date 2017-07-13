import { connect } from 'react-redux';

import Settings from '../../components/private/Settings';
import { getUserSettings } from '../../actions/Account';

const mapStateToProps = (state) => {
	return {
		account: state.user.account
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		onMount: () => {
			dispatchProps.dispatch(getUserSettings(stateProps.account.email));
		}
	}
}

const SettingsContainer = connect(
	mapStateToProps,
	null,
	mergeProps
)(Settings)

export default SettingsContainer