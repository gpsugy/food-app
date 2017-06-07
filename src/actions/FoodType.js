// action types
export const ADD_FOOD_TYPE = 'ADD_FOOD_TYPE';

// action creators
export function addFoodType(foodType) {
	return {
		type: ADD_FOOD_TYPE,
		foodType: foodType
	}
}
