import '../styles/css/LocationFinder.css';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import React, { Component } from 'react';

export default class LocationFinder extends Component {
	componentDidMount() {
		this.props.onMount();
	}
	render() {
		const { fetched, handleClick, email } = this.props;
		let isLoggedOut = (email === undefined || email == null);
		return (
			<div>
				{fetched ? (
					<Redirect to="/foodTypes"/>
				) : (
					<div>
						<h2>Hi! I am a Food Bot. I'm here to help you find what <em>you</em> want to eat!</h2>
						<h2>First, I'll need to know where you are!</h2>
						<button className="location-btn" type="button" onClick={handleClick}>Find My Location</button>
						{isLoggedOut ? (
							<div>
								<Link to="/login" className="link">Log In</Link>
								<Link to="/signup" className="link">Sign Up</Link>
							</div>
							) : null
						}
					</div>
				)}
			</div>
		)
	}
}
