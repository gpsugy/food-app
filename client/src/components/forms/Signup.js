import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class Signup extends Component {
	render() {
		const { handleSubmit, email } = this.props;
		let isLoggedOut = (email === undefined || email == null);
		return (
			<div>
				{isLoggedOut ? (
					<div>
						<h1>Signup</h1>
						<form onSubmit={handleSubmit}>
							<div className="form-group">	
								<label>
									First Name: 
									<Field component="input" type="text" name="firstName" />
								</label>
							</div>
							<div className="form-group">	
								<label>
									Last Name: 
									<Field component="input" type="text" name="lastName" />
								</label>
							</div>
							<div className="form-group">	
								<label>
									Email: 
									<Field component="input" type="text" name="email" />
								</label>
							</div>
							<div className="form-group">
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
				) : (
					<Redirect to="/already"/>
				)}
			</div>
		)
	}
}

export default reduxForm({
	form: 'Signup'
})(Signup)