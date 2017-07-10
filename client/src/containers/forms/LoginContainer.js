import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import React from 'react';

import { requestLogin } from '../../actions/Account';
import Login from '../../components/forms/Login';

let LoginContainer = ({ handleSubmit, values }) =>
	<Login onSubmit={(values) => handleSubmit(values)} />

const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (values) => dispatch(requestLogin(values))
});

export default reduxForm({
	form: 'LoginContainer'
})(connect(
	null,
	mapDispatchToProps
)(LoginContainer));
