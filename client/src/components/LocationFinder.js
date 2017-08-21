import '../styles/css/LocationFinder.css';
import '../styles/css/Spinner.css';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import React, { Component } from 'react';

import AsyncButton from './AsyncButton';

export default class LocationFinder extends Component {
	componentDidMount() {
		this.props.onMount();
	}

	render() {
		const { fetched, fetching, handleClick, email } = this.props;
		let isLoggedOut = (email === undefined || email == null);
		return (
			<div>
				{fetched ? (
					<Redirect to="/foodTypes"/>
				) : (
					<div>
						<h2>Hi, I am a Food Bot!</h2>
						<h2>Let's get started!</h2>
						<AsyncButton handleClick={handleClick} fetching={fetching} fetched={fetched} btnText="Find My Location"/>
						{isLoggedOut ? (
							<div className="account-links-container">
								<Link to="/login" className="login-link">Log In</Link>
								<Link to="/signup">Sign Up</Link>
							</div>
							) : null
						}
					</div>
				)}
			</div>
		)
	}
}
