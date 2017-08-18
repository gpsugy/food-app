import { clearRedirect } from './Redirect';

export * from './Location'
export * from './FoodType'
export * from './Results'

export const INIT_FETCHING = 'INIT_FETCHING';

// action creators
export function initFetching() {
	return {
		type: INIT_FETCHING
	};
}

// initialize background state in case of page refresh
export function initBkgdState() {
	return (dispatch) => {
		dispatch(clearRedirect());
		dispatch(initFetching());
	};
}