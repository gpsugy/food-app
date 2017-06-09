import React, { Component } from 'react';

import { FOOD_TYPES } from '../utility/FoodTypes';
import FoodTypeContainer from '../containers/FoodTypeContainer';

export default class FoodTypeList extends Component {
	constructor(props) {
		super(props);

		this.renderFoodTypes = this.renderFoodTypes.bind(this);
		// this.myCallback = this.myCallback.bind(this);
	}

	renderFoodTypes() {
		return (
			FOOD_TYPES.map((type, index) => {
				return <FoodTypeContainer key={index} foodType={type} />;
			})
		)
	}

	// myCallback(data) {
	// 	let text = '';
	// 	console.log(data);
	// }

	componentWillMount() {
		// $.ajax({
		// 	url: 'https:api.yelp.com/businesses/search',
		// 	dataType: 'jsonp',
		// 	data: {
		// 		term: 'Asian',
		// 		latitude: '42.3322333232323',
		// 		longitude: '-83.7312938'
		// 	},
		// 	success: function(data) {
		// 		console.log('received jsonp');
		// 	}
		// });
		// $.getJSON('https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938&callback=?', function(result) {
						// alert(result)});
  // 		const script = document.createElement('script');

		// script.src = 'https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938&callback=myCallback';
		// script.async = true;

		// document.body.appendChild(script);
	}

	render() {
		const { handleClick } = this.props;
		return (
			<div>
				<header>
					<h2>What types of food are you in the mood for?</h2>
					<h3>Select at least one of the following:</h3>
				</header>
				<main>
					<ul className="food-types">
						{this.renderFoodTypes()}
					</ul>
				</main>
				<footer>
					<button type="button" onClick={handleClick}>Show Me Where I Can Eat!</button>
				</footer>
			</div>
		)
	}
}
