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
		const { fetchedDefaults, redirect, handleClick } = this.props;
		return (
			<div>
				{redirect === undefined || redirect == null ? (
					<div>
					{fetchedDefaults &&
						<div>
							<header>
								<h1>Settings</h1>
								<h2>gpsugy@gmail.com</h2>
							</header>
							<main>
								<div>
									<h3>Default Filters</h3>
								</div>
								<FilterDefaultsContainer />
								<button type="button" onClick={handleClick}>Update Settings</button>
							</main>
						</div>
					}
					</div>
				) : (
					<Redirect to={redirect}/>
				)}
			</div>
		)
	}
}