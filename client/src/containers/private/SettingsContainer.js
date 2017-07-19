import { connect } from 'react-redux';

import { getUserSettings, updateUserSettings } from '../../actions/Settings';
import Settings from '../../components/private/Settings';

const mapStateToProps = (state) => {
	let fetchedDefaults = false;
	let filters = null;
	if (state.user.account.default !== undefined && state.user.account.default.filters !== undefined) {
		fetchedDefaults = state.user.account.default.filters.rating_si !== undefined;
		filters = state.user.account.default.filters
	}

	return {
		fetchedDefaults: fetchedDefaults,
		redirect: state.redirect,
		filters: filters,
		fullName: state.user.account.fullName
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		fetchedDefaults: stateProps.fetchedDefaults,
		redirect: stateProps.redirect,
		fullName: stateProps.fullName,
		onMount: () => {
			dispatchProps.dispatch(getUserSettings());
		},
		handleClick: () => {
			dispatchProps.dispatch(updateUserSettings(stateProps.filters));
		}
	}
}

const SettingsContainer = connect(
	mapStateToProps,
	null,
	mergeProps
)(Settings)

export default SettingsContainer