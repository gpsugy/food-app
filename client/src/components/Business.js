import '../styles/css/Business.css';

import React, { Component } from 'react';

import { convertMetersToMiles } from '../utility/Metrics';

export default class Business extends Component {
	constructor(props) {
		super(props);

		this.renderCategories = this.renderCategories.bind(this);
	}

	renderCategories(categories) {
		let list = '';
		for (let category of categories) {
			list += category.title + ', ';
		};

		// truncate last comma and space
		list = list.substring(0, list.length-2);

		return <span>{list}</span>;
	}

	render() {
		const { name, url, rating, review_count, price, categories, distance, image_url } = this.props;
		return (
			<li className="biz">
				<div className="img-box">
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={image_url} alt={name} />
					</a>
				</div>
				<div className="biz-main-info">
					<h3 className="biz-name">
						<span>
							<a href={url} target="_blank" rel="noopener noreferrer">
								<span>{name}</span>
							</a>
						</span>
					</h3>
					<div className="biz-rating-info">
						<div>Rated {rating} stars</div>
						<span>{review_count} reviews</span>
					</div>
					<div className="biz-price-info">
						<span>{price}  -  </span>
						{this.renderCategories(categories)}
					</div>
				</div>
				<div className="distance-traits">
					<span>{convertMetersToMiles(distance, 2)} miles away</span>
				</div>
			</li>
		)
	}
}
