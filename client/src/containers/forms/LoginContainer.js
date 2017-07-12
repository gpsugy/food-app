import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import React from 'react';

import { requestLogin } from '../../actions/Account';
import Login from '../../components/forms/Login';

let LoginContainer = ({ handleSubmit, jwt_token, values }) =>
	<div>
		{jwt_token !== undefined && jwt_token !== null ? (
			<Redirect to="/settings"/>
		) : (
			<Login onSubmit={(values) => handleSubmit(values)} />
		)}
	</div>

const mapStateToProps = (state) => {
	return {
		jwt_token: state.user.account.jwt_token
	};
}

const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (values) => dispatch(requestLogin(values))
});

export default reduxForm({
	form: 'LoginContainer'
})(connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginContainer));
