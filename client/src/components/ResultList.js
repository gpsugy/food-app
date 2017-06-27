import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Business from './Business';
import FilterBarContainer from '../containers/FilterBarContainer';

export default class ResultList extends Component {
	constructor(props) {
		super(props);

		this.renderResults = this.renderResults.bind(this);
	}

	renderResults(results) {
		if (results) {
			return (
				results.map((result) => {
					return <Business key={result.id} name={result.name} url={result.url} rating={result.rating} review_count={result.review_count} price={result.price} categories={result.categories} distance={result.distance} image_url={result.image_url} />;
				})
			);
		}
	}

	render() {
		const { results, handleClick } = this.props;
		return (
			<div>
				<header>
					<h2>Here are your personalized results!</h2>
				</header>
				<main>
					<FilterBarContainer />
					<ul>
						{this.renderResults(results)}
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
