import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import React, { Component } from 'react';

import Business from './Business';
import FilterBarContainer from '../containers/FilterBarContainer';

import { convertMetersToMiles, convertDistanceFI_ToMiles } from '../utility/Metrics';

export default class ResultList extends Component {
	constructor(props) {
		super(props);

		this.renderResults = this.renderResults.bind(this);
	}

	renderResults(results, sorting) {
		let businesses = [];
		// only render results within filtered prices and distance
		for (let result of results) {
			if (sorting.prices[result.price.length-1] !== null
				&& convertMetersToMiles(result.distance, 2) <= convertDistanceFI_ToMiles(sorting.distance_fi)) {
					businesses.push(<Business key={result.id} name={result.name} url={result.url} rating={result.rating} review_count={result.review_count} price={result.price} categories={result.categories} distance={result.distance} image_url={result.image_url} />);
			}
			continue;
		}
		return businesses;
	}

	render() {
		const { location, results, sorting, handleClick } = this.props;
		return (
			<div>
				{location === undefined || location.longitude === undefined || location.latitude === undefined ? (
					<Redirect to="/"/>
				) : (
				<div>
					<header>
						<h2>Here are your personalized results!</h2>
					</header>
					<main>
						<FilterBarContainer />
						<ul>
							{this.renderResults(results, sorting)}
						</ul>
					</main>
					<footer>
						<Link to='/foodTypes'>
							<button type="button" onClick={handleClick}>Go Back</button>
						</Link>
					</footer>
				</div>
				)}
			</div>
		)
	}
}
