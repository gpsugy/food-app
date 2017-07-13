import { connect } from 'react-redux';

import Settings from '../../components/private/Settings';
import { getUserSettings } from '../../actions/Account';

const mapStateToProps = (state) => {
	let fetchedDefaults = false;
	if (state.user.account.default !== undefined && state.user.account.default.filters !== undefined) {
		fetchedDefaults = state.user.account.default.filters.rating_si !== undefined;
	}
	return {
		account: state.user.account,
		fetchedDefaults: fetchedDefaults
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		fetchedDefaults: stateProps.fetchedDefaults,
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