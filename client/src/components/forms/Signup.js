import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { required, minLength6, emailVal } from '../../utility/FormValidate';
import renderField from './RenderField';

class Signup extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<h1>Signup</h1>
				<form onSubmit={handleSubmit}>
					<Field component={renderField} label="Full name" placeholder="John Smith" type="text" name="fullName" validate={required}/>
					<Field component={renderField} label="Email" placeholder="john.smith@gmail.com" type="text" name="email" validate={[ required, emailVal ]} />
					<Field component={renderField} label="Create a password" placeholder="Create a password" type="password" name="password" validate={[ required, minLength6 ]}/>
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