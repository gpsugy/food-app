import '../styles/css/ResultList.css';

import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { convertMetersToMiles, convertDistanceFI_ToMiles } from '../utility/Metrics';
import Business from './Business';
import FilterBarContainer from '../containers/FilterBarContainer';

export default class ResultList extends Component {
	constructor(props) {
		super(props);

		this.renderResults = this.renderResults.bind(this);
	}

	renderResults(results, sorting) {
		let businesses = [];
		if (results === undefined)
			return null;
		// only render results within filtered prices and distance
		for (let result of results) {
			if (sorting.prices[result.price.length-1] != null
				&& convertMetersToMiles(result.distance, 2) <= convertDistanceFI_ToMiles(sorting.distance_fi)) {
					businesses.push(<Business key={result.id} name={result.name} url={result.url} rating={result.rating} review_count={result.review_count} price={result.price} categories={result.categories} distance={result.distance} image_url={result.image_url} />);
			}
			continue;
		}
		return businesses;
	}

	render() {
		const { results, sorting, handleClick } = this.props;
		return (
			<div>
				<header>
					<h2>Here are your personalized results!</h2>
				</header>
				<main>
					<FilterBarContainer />
					<ul className="result-list">
						{this.renderResults(results, sorting)}
					</ul>
				</main>
				<footer>
					<Link to='/foodTypes'>
						<button type="button" onClick={handleClick}>Go Back</button>
					</Link>
				</footer>
			</div>
		)
	}
}
