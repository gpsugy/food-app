import { connect } from 'react-redux';

import { clearRedirect } from '../../actions/Redirect';
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
		fullName: state.user.account.fullName,
		updated: state.user.account.updated
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		fetchedDefaults: stateProps.fetchedDefaults,
		redirect: stateProps.redirect,
		fullName: stateProps.fullName,
		updated: stateProps.updated,
		onMount: () => {
			dispatchProps.dispatch(clearRedirect());
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