import React from 'react';
import { Redirect } from 'react-router'

const LocationFinder = ({ location, handleClick }) => (
	<div>
		{location !== undefined && location.longitude !== null && location.latitude !== undefined ? (
			<Redirect to="/foodTypes"/>
		) : (
			<div>
				<h2>Hi! I am a Food Bot. I'm here to help you find what <em>you</em> want to eat!</h2>
				<h2>First, I'll need to know where you are!</h2>
				<button type="button" onClick={handleClick}>Find My Location</button>
			</div>
		)}
	</div>
)

export default LocationFinder;
