import React, { Component } from 'react';

import FilterDefaultsContainer from
  '../../containers/private/FilterDefaultsContainer';

export default class Settings extends Component {
	constructor(props) {
		super(props);
		
		props.onMount();
	}

	render() {
		const { fetchedDefaults } = this.props;
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
					{fetchedDefaults ? <FilterDefaultsContainer /> : <h4>YOU STINK</h4>}
				</main>
			</div>
		)
	}
}
				// <button type="button" onClick={handleClick}>Test JWT Auth</button>
