import React, { Component } from 'react';

export default class UnAuthorized extends Component {
	constructor(props) {
		super(props);
		props.onMount();
	}

	render() {
		return (
			<div>
				<h2>Sorry, please Login or Signup to view this page.</h2>
			</div>
		)
	}
}