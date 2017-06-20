import { Link } from 'react-router-dom';
import React from 'react';

const ResultList = () => (
	<div>
		<h1>I am a results list</h1>
		<Link to='/foodTypes'>
			<button type="button">Go Back</button>
		</Link>
	</div>
)

export default ResultList;
