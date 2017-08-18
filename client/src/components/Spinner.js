import React from 'react';
import spinner from '../styles/icons/spinner.gif';

const Spinner = () => (
	<div className="spinner-container">
		<img src={spinner} alt="Loading..." className="spinner"/>
	</div>
)

export default Spinner;
