import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import React from 'react';

import { requestLogin } from '../../actions/Account';
import Login from '../../components/forms/Login';

let LoginContainer = ({ handleSubmit, email, values }) =>
	<div>
		{email !== undefined && email != null ? (
			<Redirect to="/"/>
		) : (
			<Login onSubmit={(values) => handleSubmit(values)} />
		)}
	</div>

const mapStateToProps = (state) => {
	return {
		email: state.user.account.email
	};
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	return {
		email: stateProps.email,
		handleSubmit: (values) => {
			dispatchProps.dispatch(requestLogin(values));
		}
	};
}

export default reduxForm({
	form: 'LoginContainer'
})(connect(
	mapStateToProps,
	null,
	mergeProps
)(LoginContainer));
