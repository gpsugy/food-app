import React from 'react';

const FoodType = ({ foodType, classSelected, handleClick }) => (
	<li className={'food-type ' + classSelected} onClick={handleClick}>
		{foodType}
	</li>
)

export default FoodType;
