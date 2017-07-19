import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import React from 'react';

import { requestSignup } from '../../actions/Account';
import Signup from '../../components/forms/Signup';


let renderSignup = (redirect, email, handleSubmit, values) => {
	if (redirect !== undefined && redirect != null)
		return <Redirect to={redirect} />;
	else if (email !== undefined && email != null)
		return <Redirect to='/already' />;
	else
		return <Signup onSubmit={(values) => handleSubmit(values)} />;
}

let SignupContainer = ({ handleSubmit, values, redirect, email }) =>
	<div>
		{renderSignup(redirect, email, handleSubmit, values)}
	</div>

const mapStateToProps = (state) => {
	return {
		redirect: state.redirect,
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
