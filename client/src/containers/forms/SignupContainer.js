import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import React from 'react';

import { requestSignup } from '../../actions/Account';
import Signup from '../../components/forms/Signup';

let SignupContainer = ({ handleSubmit, jwt_token, values }) =>
	<div>
		{jwt_token !== undefined && jwt_token !== null ? (
			<Redirect to="/settings"/>
		) : (
			<Signup onSubmit={(values) => handleSubmit(values)} />
		)}
	</div>

const mapStateToProps = (state) => {
	console.log(state.user.account.jwt_token);
	return {
		jwt_token: state.user.account.jwt_token
	};
}

const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (values) => dispatch(requestSignup(values))
});

export default reduxForm({
	form: 'SignupContainer'
})(connect(
	mapStateToProps,
	mapDispatchToProps
)(SignupContainer));
