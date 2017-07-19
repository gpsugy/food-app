import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class AlreadySignedup extends Component {
	render() {
		return (
			<div>
				<p>You're already signed up! Logout to create a new user,
				or <Link to="/">Start finding where to eat!</Link>
				</p>
			</div>
		)
	}
}