import React, { Component } from 'react';

import { FOOD_TYPES } from '../FoodTypes';
import FoodTypeContainer from '../containers/FoodTypeContainer';

export default class FoodTypeList extends Component {
	constructor(props) {
		super(props);

		this.renderFoodTypes = this.renderFoodTypes.bind(this);
	}

	renderFoodTypes() {
		return (
			FOOD_TYPES.map((type, index) => {
				return <FoodTypeContainer key={index} foodType={type} />;
			})
		)
	}

	render() {
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
			</div>
		)
	}
}
