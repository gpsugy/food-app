import '../styles/Navbar.css';
import '../styles/font-awesome.css';

import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		const { handleLogout, email } = this.props;
		return (
			<nav>
				<div className="user-container">
					<i className="fa fa-user-circle fa-3x user-icon" aria-hidden="true"></i>
					<ul className="menu-drop-down">
						<li><Link to="/settings">Settings</Link></li>
						<li onClick={handleLogout}>Log Out</li>
					</ul>
				</div>
				{// user has logged out
					email == null ? (<Redirect to="/" />) : null}
			</nav>
		)
	}
}
