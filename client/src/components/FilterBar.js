import '../styles/css/FilterBar.css';

import React, { Component } from 'react';

import {
  ASCENDING,
  DESCENDING,
  DISTANCE_FILTER_TYPES,
  DRIVING,
  ROAD_TRIP,
  RATING_SORT_TYPES,
} from '../utility/FilterTypes';

export default class FilterBar extends Component {
	constructor(props) {
		super(props);

		this.renderArrow = this.renderArrow.bind(this);
		this.renderDistanceFilter = this.renderDistanceFilter.bind(this);
	}

	renderArrow(sorting) {
		if (sorting === undefined)
			return null;

		switch (RATING_SORT_TYPES[sorting.rating_si]) {
			case ASCENDING:
				return <span className="arrow-up">&uarr;</span>;
			case DESCENDING:
				return <span className="arrow-down">&darr;</span>;
			default:
				return <span className="space-lg">&nbsp;</span>;
		}
	}

	renderPriceFilters(sorting, clickPrice) {
		let priceFilters = [];
		if (sorting === undefined)
			return null;

		(sorting.prices[0] != null)
			? priceFilters.push(<li key='1' onClick={() => clickPrice(1)} className="filter-btn price-selected first">$</li>) : priceFilters.push(<li key='1' className="filter-btn first" onClick={() => clickPrice(1)}>$</li>);
		(sorting.prices[1] != null)
			? priceFilters.push(<li key='2' onClick={() => clickPrice(2)} className="filter-btn price-selected">$$</li>) : priceFilters.push(<li key='2' className="filter-btn" onClick={() => clickPrice(2)}>$$</li>);
		(sorting.prices[2] != null)
			? priceFilters.push(<li key='3' onClick={() => clickPrice(3)} className="filter-btn price-selected">$$$</li>) : priceFilters.push(<li key='3' className="filter-btn" onClick={() => clickPrice(3)}>$$$</li>);
		(sorting.prices[3] != null)
			? priceFilters.push(<li key='4' onClick={() => clickPrice(4)} className="filter-btn price-selected last">$$$$</li>) : priceFilters.push(<li key='4' className="filter-btn last" onClick={() => clickPrice(4)}>$$$$</li>);


		return priceFilters;
	}

	renderDistanceFilter(sorting, clickDistance) {
		if (sorting === undefined)
			return null;

		switch (DISTANCE_FILTER_TYPES[sorting.distance_fi]) {
			case DRIVING:
				return <span onClick={clickDistance}>Driving</span>;
			case ROAD_TRIP:
				return <span onClick={clickDistance}>Road Trip</span>;
			default:
				return <span onClick={clickDistance}>Walking</span>;
		}
	}

	render() {
		const { sorting, clickRating, clickPrice, clickDistance } = this.props;
		return (
			<ul className="filter-list">
				<li className="filter-btn rating-btn" onClick={clickRating}><span>Rating </span>{this.renderArrow(sorting)}</li>
				<li>
					<ul className="price-filters">
						{this.renderPriceFilters(sorting, clickPrice)}
					</ul>
				</li>
				<li className="filter-btn distance-btn">{this.renderDistanceFilter(sorting, clickDistance)}</li>
			</ul>
		)
	}
}
