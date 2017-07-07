import { connect } from 'react-redux';
import React from 'react';

import { reduxForm } from 'redux-form';

import { requestSignup } from '../../actions/Account';
import Signup from '../../components/forms/Signup';

let SignupContainer = ({ handleSubmit, values }) =>
	<Signup onSubmit={(values) => handleSubmit(values)} />

const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (values) => dispatch(requestSignup(values))
});

export default reduxForm({
	form: 'SignupContainer'
})(connect(
	null,
	mapDispatchToProps
)(SignupContainer));
