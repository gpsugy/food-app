import '../../styles/css/private/Settings.css';

import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import FilterDefaultsContainer from
  '../../containers/private/FilterDefaultsContainer';

export default class Settings extends Component {
	constructor(props) {
		super(props);
		
		props.onMount();
		this.getFirstName = this.getFirstName.bind(this);
	}

	getFirstName(fullName) {
		if (fullName !== undefined) {
			let i = fullName.indexOf(' ');
			// return fullName if no last name exists
			return (i !== -1) ? fullName.substring(0, fullName.indexOf(' ')) : fullName;
		}
		else {
			return 'there';
		}
	}

	render() {
		const { fetchedDefaults, redirect, handleClick, fullName, updated } = this.props;
		return (
			<div>
				{redirect === undefined || redirect == null ? (
					<div>
					{fetchedDefaults &&
						<div>
							<header>
								<h1>Settings</h1>
								<h2 className="greeting">Hi {this.getFirstName(fullName)}, here are your settings! Update them as you please!</h2>
							</header>
							<main>
								<div>
									<h2 className="category">Default Filters</h2>
								</div>
								<FilterDefaultsContainer />
								<button type="button" onClick={handleClick}>Update Settings</button>
								{updated ? <h3 className="success-msg">Your default settings have been updated!</h3> : null}
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