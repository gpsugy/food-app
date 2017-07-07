import { connect } from 'react-redux';
import React from 'react';

import { reduxForm } from 'redux-form';

import Signup from '../../components/forms/Signup';

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		hi: 'hi'
// 	};
// }

let SignupContainer = ({ handleSubmit, values }) =>
	<Signup onSubmit={(values) => handleSubmit(values)} />

const mapDispatchToProps = (dispatch) => ({
	handleSubmit: (values) => console.log(values.email)
});

export default reduxForm({ form: 'SignupContainer' })(connect(
	null,
	mapDispatchToProps
)(SignupContainer));
