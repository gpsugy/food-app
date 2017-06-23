import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class ResultList extends Component {
	constructor(props) {
		super(props);

		this.renderResults = this.renderResults.bind(this);
	}

	renderResults(results) {
		return (
			results.map((result) => {
				return <li key={result.id}>{result.name}</li>;
			})
		);
	}

	render() {
		const { results, handleClick } = this.props;
		return (
			<div>
				<header>
					<h2>Here are those food places near you!</h2>
				</header>
				<main>
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
