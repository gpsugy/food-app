import React, { Component } from 'react';

import { FOOD_TYPES } from '../utility/FoodTypes';
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
