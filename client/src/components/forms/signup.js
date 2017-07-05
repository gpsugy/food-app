import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('A new user was submitted: ' + this.state.email + this.state.password);
	}

	render() {
		const { email, password } = this.state;
		const isEnabled = email.length > 0 && password.length > 0;
		return (
			<div>
				<h1>Signup</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>
							Email: 
							<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
						</label>
					</div>
					<div>	
						<label>
							Password: 
							<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
						</label>
					</div>
					<input disabled={!isEnabled} type="submit" value="Submit" />
				</form>
				<p>Already have an account? <Link to="/login">Login</Link></p>
				<Link to="/">Home</Link>
			</div>
		)
	}
}
