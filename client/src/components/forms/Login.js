import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

		// const isEnabled = email.length > 0 && password.length > 0;
class Login extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">	
						<label>
							Email: 
							<Field component="input" type="text" name="email" />
						</label>
					</div>
					<div>
						<label>
							Password: 
							<Field component="input" type="password" name="password" />
						</label>
					</div>
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