import React, { Component } from 'react';

export default class Settings extends Component {
	render() {
		const { handleClick } = this.props;
		return (
			<div>
				<header>
					<h1>Settings</h1>
					<h2>gpsugy@gmail.com</h2>
				</header>
				<main>
					<div>
						<h3>Default Filters</h3>
					</div>
				</main>
				<button type="button" onClick={handleClick}>Test JWT Auth</button>
			</div>
		)
	}
}
