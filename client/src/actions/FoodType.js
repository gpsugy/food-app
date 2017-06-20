// action types
export const UPDATE_FOOD_TYPE = 'UPDATE_FOOD_TYPE';

// action creators
export function updateFoodTypes(foodType) {
	return {
		type: UPDATE_FOOD_TYPE,
		foodType: foodType
	}
}
