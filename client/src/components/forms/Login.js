import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { emailVal, required } from '../../utility/FormValidate';
import renderField from './RenderField';

class Login extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<Field component={renderField} label="Email" type="text" name="email" validate={[ required, emailVal ]}/>
					<Field component={renderField} label="Password" type="password" name="password" validate={required}/>
					<button type="submit" >Login</button>
				</form>
				<p>Need an account? <Link to="/signup">Signup</Link></p>
				<Link to="/">Home</Link>
			</div>
		)
	}
}

export default reduxForm({
	form: 'Login'
})(Login)