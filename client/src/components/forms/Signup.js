import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import renderField from './RenderField';
import { required, minLength6, emailVal } from '../../utility/FormValidate';

class Signup extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<h1>Signup</h1>
				<form onSubmit={handleSubmit}>
					<Field component={renderField} label="Full name" type="text" name="fullName" validate={required}/>
					<Field component={renderField} label="Email" type="text" name="email" validate={[ required, emailVal ]} />
					<Field component={renderField} label="Create a password" type="password" name="password" validate={[ required, minLength6 ]}/>
					<button type="submit" >Submit</button>
				</form>
				<p>Already have an account? <Link to="/login">Login</Link></p>
				<Link to="/">Home</Link>
			</div>
		)
	}
}

export default reduxForm({
	form: 'Signup'
})(Signup)