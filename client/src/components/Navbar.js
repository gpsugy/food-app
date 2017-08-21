import '../styles/css/Navbar.css';
import '../styles/css/font-awesome.css';

import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import loginSmiley from '../styles/icons/logged-in-smiley.png';
import loggedOutSmiley from '../styles/icons/logged-out-smiley.png';

export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.renderMenu = this.renderMenu.bind(this);
	}

	renderMenu(isLoggedOut, handleLogout) {
		let menuItems = [];
		menuItems.push(<li key='home'><Link to="/">Home</Link></li>);
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
					{isLoggedOut ? <img className="user-icon" src={loggedOutSmiley} alt="Sleepy face when logged out"/> : <img className="user-icon" src={loginSmiley} alt="Smiley face when logged in"/>}
					<ul className="menu-drop-down">
						{this.renderMenu(isLoggedOut, handleLogout)}
					</ul>
				</div>
				{redirect ? (<Redirect to={redirect} />) : null}
			</nav>
		)
	}
}
