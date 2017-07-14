import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import FilterDefaultsContainer from
  '../../containers/private/FilterDefaultsContainer';

export default class Settings extends Component {
	constructor(props) {
		super(props);
		
		props.onMount();
	}

	render() {
		const { fetchedDefaults, redirect } = this.props;
		return (
			<div>
				{redirect === undefined || redirect === null ? (
					<div>
						<header>
							<h1>Settings</h1>
							<h2>gpsugy@gmail.com</h2>
						</header>
						<main>
							<div>
								<h3>Default Filters</h3>
							</div>
							{fetchedDefaults && <FilterDefaultsContainer />}
						</main>
					</div>
				) : (
					<Redirect to="/unauthorized"/>
				)}
			</div>
		)
	}
}