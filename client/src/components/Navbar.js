import '../styles/Navbar.css';
import '../styles/font-awesome.css';

import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import Smiley from '../icons/Smiley';

export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.renderMenu = this.renderMenu.bind(this);
	}

	renderMenu(isLoggedOut, handleLogout) {
		let menuItems = [];
		if (isLoggedOut) {
			menuItems.push(<li key='login'><Link to="/login">Login</Link></li>);
			menuItems.push(<li key='signup'><Link to="/signup">Signup</Link></li>);
		}
		else {
			menuItems.push(<li key='settings'><Link to="/settings">Settings</Link></li>);
			menuItems.push(<li key='logout' onClick={handleLogout}>Log Out</li>);
		}

		return menuItems;
	}

	render() {
		const { handleLogout, email, redirect } = this.props;
		let isLoggedOut = (email === undefined || email == null);
		return (
			<nav>
				<div className="user-container">
					<Smiley />
					<ul className="menu-drop-down">
						{this.renderMenu(isLoggedOut, handleLogout)}
					</ul>
				</div>
				{redirect ? (<Redirect to={redirect} />) : null}
			</nav>
		)
	}
}
