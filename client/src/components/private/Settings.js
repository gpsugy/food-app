import React, { Component } from 'react';

import FilterDefaultsContainer from
  '../../containers/private/FilterDefaultsContainer';

export default class Settings extends Component {
	componentDidMount() {
		this.props.onMount();
	}

		// const { } = this.props;
	render() {
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
			</div>
		)
	}
}
				// <button type="button" onClick={handleClick}>Test JWT Auth</button>
						// <FilterDefaultsContainer />
