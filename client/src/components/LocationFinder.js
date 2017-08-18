import '../styles/css/LocationFinder.css';
import '../styles/css/Spinner.css';

import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import React, { Component } from 'react';

import Spinner from './Spinner';

export default class LocationFinder extends Component {
	constructor(props) {
		super(props);

		this.renderButton = this.renderButton.bind(this);
	}

	componentDidMount() {
		this.props.onMount();
	}

	renderButton(handleClick, fetching, fetched) {
		if (!fetching && !fetched) {
			console.log('not fetching');
			return(<button className="location-btn" key="location-btn" type="button" onClick={handleClick}>Find My Location</button>);
		}
		else {
			console.log('fetching');
			return(<Spinner key="spinner" />);
		}
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
						<h2>Hi! I am a Food Bot. I'm here to help you find what <em>you</em> want to eat!</h2>
						<h2>First, I'll need to know where you are!</h2>
						<CSSTransitionGroup
							component="div"
							className="fade-container"
							transitionName="fade"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}>
							{this.renderButton(handleClick, fetching, fetched)}
						</CSSTransitionGroup>
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
