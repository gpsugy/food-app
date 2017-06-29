import React, { Component } from 'react';

import { ASCENDING, DESCENDING, SORTING_TYPES } from '../utility/SortingTypes';

export default class FilterBar extends Component {
	constructor(props) {
		super(props);

		this.renderArrow = this.renderArrow.bind(this);
		this.renderArrow = this.renderArrow.bind(this);
	}

	renderArrow(sorting) {
		if (!sorting) {
			return null;
		}
		switch (SORTING_TYPES[sorting.rating_si]) {
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

		(typeof sorting !== 'undefined' && sorting.prices[0] != null)
			? priceFilters.push(<li key='1' onClick={() => clickPrice(1)} className="price-selected">$</li>) : priceFilters.push(<li key='1' onClick={() => clickPrice(1)}>$</li>);
		(typeof sorting !== 'undefined' && sorting.prices[1] != null)
			? priceFilters.push(<li key='2' onClick={() => clickPrice(2)} className="price-selected">$$</li>) : priceFilters.push(<li key='2' onClick={() => clickPrice(2)}>$$</li>);
		(typeof sorting !== 'undefined' && sorting.prices[2] != null)
			? priceFilters.push(<li key='3' onClick={() => clickPrice(3)} className="price-selected">$$$</li>) : priceFilters.push(<li key='3' onClick={() => clickPrice(3)}>$$$</li>);
		(typeof sorting !== 'undefined' && sorting.prices[3] != null)
			? priceFilters.push(<li key='4' onClick={() => clickPrice(4)} className="price-selected">$$$$</li>) : priceFilters.push(<li key='4' onClick={() => clickPrice(4)}>$$$$</li>);


		return priceFilters;
	}

	render() {
		const { sorting, clickRating, clickPrice } = this.props;
		return (
			<ul className="filter-list">
				<li className="rating-btn" onClick={clickRating}><span>Rating </span>{this.renderArrow(sorting)}</li>
				<li>
					<ul className="price-filters">
						{this.renderPriceFilters(sorting, clickPrice)}
					</ul>
				</li>
			</ul>
		)
	}
}
