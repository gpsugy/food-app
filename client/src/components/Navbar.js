import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import '../styles/Navbar.css';
import '../styles/font-awesome.css';

export default class Navbar extends Component {
	render() {
		const { handleLogout } = this.props;
		return (
			<nav>
				<div className="user-container">
					<i className="fa fa-user-circle fa-3x user-icon" aria-hidden="true"></i>
					<ul className="menu-drop-down">
						<li><Link to="/settings">Settings</Link></li>
						<li onClick={handleLogout}>Log Out</li>
					</ul>
				</div>
			</nav>
		)
	}
}
