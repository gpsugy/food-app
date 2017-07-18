import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class UnAuthorized extends Component {
	componentDidMount() {
		this.props.onMount();
	}

	render() {
		return (
			<div>
				<h2>Sorry, please <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to view this page.</h2>
			</div>
		)
	}
}