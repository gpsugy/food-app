import React, { Component } from 'react';

export default class Business extends Component {
	constructor(props) {
		super(props);

		this.convertToMiles = this.convertToMiles.bind(this);
	}

	convertToMiles(meters, decimals) {
		let miles = meters / 1609.344;

		return Number(Math.round(miles+'e'+decimals)+'e-'+decimals);
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
					<h3>
						<span>
							<a href={url} target="_blank" rel="noopener noreferrer">
								<span>{name}</span>
							</a>
						</span>
					</h3>
					<div>
						<div>Rated {rating} stars</div>
						<span>{review_count} reviews</span>
					</div>
					<div>
						<span>{price}</span>
						<span>[categories here]</span>
					</div>
				</div>
				<div className="distance-traits">
					<span>{this.convertToMiles(distance, 2)} miles away</span>
				</div>
			</li>
		)
	}
}
