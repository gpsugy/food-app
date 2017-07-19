import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import React from 'react';

import { requestSignup } from '../../actions/Account';
import Signup from '../../components/forms/Signup';

let SignupContainer = ({ handleSubmit, jwt_token, values, email }) =>
	<div>
		{jwt_token !== undefined && jwt_token !== null ? (
			<Redirect to="/settings"/>
		) : (
			<Signup onSubmit={(values) => handleSubmit(values)} email={email} />
		)}
	</div>

const mapStateToProps = (state) => {
	return {
		jwt_token: state.user.account.jwt_token,
		email: state.user.account.email
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
