import React from 'react';

const Business = ({ name, url, rating, review_count, price, categories, distance, image_url }) => (
	<li className="biz">
		<img src={image_url} alt={name} />
		<div className="biz-main-info">
			<h3>{name}</h3>
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
			<span>{distance / 1609.344} miles away</span>
		</div>
	</li>
)

export default Business;
