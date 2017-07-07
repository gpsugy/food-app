import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

		// const isEnabled = email.length > 0 && password.length > 0;
class Signup extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h1>Signup</h1>
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