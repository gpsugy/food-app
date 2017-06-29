import { allowRefetch, fetchBusinessesSuccess } from '../actions/Results';
import { businesses } from './';
import {
  initSort,
  sortBusinesses,
  toggleDistanceFilter,
  toggleRatingSort,
  updatePrices,
} from '../actions/FilterBar';

describe('(Reducer) Businesses FETCH', () => {
	it('populate businesses object on FETCH_BUSINESSES_SUCCESS', () => {
		const results = [
			{
				id: 'chelas-ann-arbor',
				name: 'Chela\'s',
				categories: [
					{ alias: 'mexican', title: 'Mexican' },
					{ alias: 'gluten_free', title: 'Gluten-Free' }
				],
				distance: 4364.53571269,
				price: '$',
				rating: 4.5,
				review_count: 230,
				url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
				image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
			}
		]
		const expected = {
			results: [
				{
					id: 'chelas-ann-arbor',
					name: 'Chela\'s',
					categories: [
						{ alias: 'mexican', title: 'Mexican' },
						{ alias: 'gluten_free', title: 'Gluten-Free' }
					],
					distance: 4364.53571269,
					price: '$',
					rating: 4.5,
					review_count: 230,
					url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
				}
			],
			fetched: true
		};
		expect(
			businesses({}, fetchBusinessesSuccess(results))
		).toEqual(expected);
	});

	it('Set fetched flag to false on ALLOW_REFETCH', () => {
		const init = {
			results: [
				{
					id: 'chelas-ann-arbor',
					name: 'Chela\'s',
					categories: [
						{ alias: 'mexican', title: 'Mexican' },
						{ alias: 'gluten_free', title: 'Gluten-Free' }
					],
					distance: 4364.53571269,
					price: '$',
					rating: 4.5,
					review_count: 230,
					url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
				}
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [1, 3],
				distance_fi: 2
			}
		};
		const expected = {
			results: [
				{
					id: 'chelas-ann-arbor',
					name: 'Chela\'s',
					categories: [
						{ alias: 'mexican', title: 'Mexican' },
						{ alias: 'gluten_free', title: 'Gluten-Free' }
					],
					distance: 4364.53571269,
					price: '$',
					rating: 4.5,
					review_count: 230,
					url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
				}
			],
			fetched: false,
			sorting: {
				rating_si: 2,
				prices: [1, 3],
				distance_fi: 2
			}
		};
		expect(
			businesses(init, allowRefetch())
		).toEqual(expected);
	});
});

describe('(Reduxer) Businesses SORTING object changes', () => {
	it('increment rating_si on TOGGLE_RATING_SORT', () => {
		let state = {
			results: [
				{
					id: 'chelas-ann-arbor',
					name: 'Chela\'s',
					categories: [
						{ alias: 'mexican', title: 'Mexican' },
						{ alias: 'gluten_free', title: 'Gluten-Free' }
					],
					distance: 4364.53571269,
					price: '$',
					rating: 4.5,
					review_count: 230,
					url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
				}
			],
			fetched: true,
			sorting: {
				rating_si: 1,
				prices: [1, 3],
				distance_fi: 1
			}
		};
		let expected = {
			results: [
				{
					id: 'chelas-ann-arbor',
					name: 'Chela\'s',
					categories: [
						{ alias: 'mexican', title: 'Mexican' },
						{ alias: 'gluten_free', title: 'Gluten-Free' }
					],
					distance: 4364.53571269,
					price: '$',
					rating: 4.5,
					review_count: 230,
					url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
				}
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [1, 3],
				distance_fi: 1
			}
		};
		expect(
			businesses(state, toggleRatingSort('rating'))
		).toEqual(expected);
	});

	it('init sorting state on INIT_SORT', () => {
		let state = {
			results: [
				{
					id: 'chelas-ann-arbor',
					name: 'Chela\'s',
					categories: [
						{ alias: 'mexican', title: 'Mexican' },
						{ alias: 'gluten_free', title: 'Gluten-Free' }
					],
					distance: 4364.53571269,
					price: '$',
					rating: 4.5,
					review_count: 230,
					url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
				}
			],
			fetched: true,
			sorting: {
				rating_si: 0,
				prices: [1, null, 3, 4],
				distance_fi: 2
			}
		};

		let expected = {
			results: [
				{
					id: 'chelas-ann-arbor',
					name: 'Chela\'s',
					categories: [
						{ alias: 'mexican', title: 'Mexican' },
						{ alias: 'gluten_free', title: 'Gluten-Free' }
					],
					distance: 4364.53571269,
					price: '$',
					rating: 4.5,
					review_count: 230,
					url: 'https://www.yelp.com/biz/chelas-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
					image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/TTf4I5_GLhElpRUH-mXzxw/o.jpg'
				}
			],
			fetched: true,
			sorting: {
				rating_si: 1,
				prices: [1, 2, 3, 4],
				distance_fi: 1
			}
		};
		expect(
			businesses(state, initSort())
		).toEqual(expected);
	});
});

describe('(Reducer) Businesses SORTING BUSINESSES', () => {
	it('sort DESCENDING', () => {
		let state = {
			results: [
			   { id: 'chia-shiang-restaurant-ann-arbor-2',
			     name: 'Chia Shiang Restaurant',
			     categories: [ 'Chinese' ],
			     distance: 318.8331549082,
			     price: '$$',
			     rating: 3,
			     review_count: 94,
			     url: 'https://www.yelp.com/biz/chia-shiang-restaurant-ann-arbor-2?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/vuMYp4llVKcycQySoEAurA/o.jpg' },
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' },
			   { id: 'freshii-ann-arbor',
			     name: 'Freshii',
			     categories: [ 'Asian' ],
			     distance: 2058.44724842,
			     price: '$$',
			     rating: 4,
			     review_count: 15,
			     url: 'https://www.yelp.com/biz/freshii-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/WhSn71EmGDWESD3RThgDDg/o.jpg' },
			   { id: 'banditos-restaurant-ann-arbor',
			     name: 'Bandito\'s Restaurant',
			     categories: [ 'Mexican' ],
			     distance: 2744.61993488,
			     price: '$$',
			     rating: 5,
			     review_count: 137,
			     url: 'https://www.yelp.com/biz/banditos-restaurant-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/7IZYUxVEJ3YzTN0wKy-zjQ/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 0,
				prices: [1,3],
				distance_fi: 1
			}
		};

		let newRatingSI = businesses(state, toggleRatingSort());
		let newBusinesses = businesses(newRatingSI, sortBusinesses(1));
		expect(newBusinesses.results[0].id).toEqual('banditos-restaurant-ann-arbor');
		expect(newBusinesses.results[1].id).toEqual('freshii-ann-arbor');
		expect(newBusinesses.results[2].id).toEqual('chia-shiang-restaurant-ann-arbor-2');
		expect(newBusinesses.results[3].id).toEqual('no-thai-ann-arbor');
		expect(newBusinesses.sorting.rating_si).toEqual(1);
	});

	it('sort ASCENDING', () => {
		let descendingState = {
			results: [
			   { id: 'banditos-restaurant-ann-arbor',
			     name: 'Bandito\'s Restaurant',
			     categories: [ 'Mexican' ],
			     distance: 2744.61993488,
			     price: '$$',
			     rating: 5,
			     review_count: 137,
			     url: 'https://www.yelp.com/biz/banditos-restaurant-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/7IZYUxVEJ3YzTN0wKy-zjQ/o.jpg' },
			   { id: 'freshii-ann-arbor',
			     name: 'Freshii',
			     categories: [ 'Asian' ],
			     distance: 2058.44724842,
			     price: '$$',
			     rating: 4,
			     review_count: 15,
			     url: 'https://www.yelp.com/biz/freshii-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/WhSn71EmGDWESD3RThgDDg/o.jpg' },
			   { id: 'chia-shiang-restaurant-ann-arbor-2',
			     name: 'Chia Shiang Restaurant',
			     categories: [ 'Chinese' ],
			     distance: 318.8331549082,
			     price: '$$',
			     rating: 3,
			     review_count: 94,
			     url: 'https://www.yelp.com/biz/chia-shiang-restaurant-ann-arbor-2?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/vuMYp4llVKcycQySoEAurA/o.jpg' },
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 1,
				prices: [1,3],
				distance_fi: 1
			}
		};

		let newRatingSI = businesses(descendingState, toggleRatingSort());
		let newBusinesses = businesses(newRatingSI, sortBusinesses());
		expect(newBusinesses.results[0].id).toEqual('no-thai-ann-arbor');
		expect(newBusinesses.results[1].id).toEqual('chia-shiang-restaurant-ann-arbor-2');
		expect(newBusinesses.results[2].id).toEqual('freshii-ann-arbor');
		expect(newBusinesses.results[3].id).toEqual('banditos-restaurant-ann-arbor');
		expect(newBusinesses.sorting.rating_si).toEqual(2);
	});

	it('sort NO_SORT', () => {
		let ascendingState = {
			results: [
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' },
			   { id: 'chia-shiang-restaurant-ann-arbor-2',
			     name: 'Chia Shiang Restaurant',
			     categories: [ 'Chinese' ],
			     distance: 318.8331549082,
			     price: '$$',
			     rating: 3,
			     review_count: 94,
			     url: 'https://www.yelp.com/biz/chia-shiang-restaurant-ann-arbor-2?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/vuMYp4llVKcycQySoEAurA/o.jpg' },
			   { id: 'freshii-ann-arbor',
			     name: 'Freshii',
			     categories: [ 'Asian' ],
			     distance: 2058.44724842,
			     price: '$$',
			     rating: 4,
			     review_count: 15,
			     url: 'https://www.yelp.com/biz/freshii-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/WhSn71EmGDWESD3RThgDDg/o.jpg' },
			   { id: 'banditos-restaurant-ann-arbor',
			     name: 'Bandito\'s Restaurant',
			     categories: [ 'Mexican' ],
			     distance: 2744.61993488,
			     price: '$$',
			     rating: 5,
			     review_count: 137,
			     url: 'https://www.yelp.com/biz/banditos-restaurant-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/7IZYUxVEJ3YzTN0wKy-zjQ/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [2,3],
				distance_fi: 1
			}
		};

		let newRatingSI = businesses(ascendingState, toggleRatingSort());
		let newBusinesses = businesses(newRatingSI, sortBusinesses());
		expect(newBusinesses.results[0].id).toEqual('banditos-restaurant-ann-arbor');
		expect(newBusinesses.results[1].id).toEqual('chia-shiang-restaurant-ann-arbor-2');
		expect(newBusinesses.results[2].id).toEqual('freshii-ann-arbor');
		expect(newBusinesses.results[3].id).toEqual('no-thai-ann-arbor');
		expect(newBusinesses.sorting.rating_si).toEqual(0);
	});
});

describe('(Reducer) Businesses FILTER PRICES', () => {
	it('add new price', () => {
		let state = {
			results: [
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [null, 2, 3, null],
				distance_fi: 1
			}
		};

		let newPrices = businesses(state, updatePrices(1));
		expect(newPrices.sorting.prices).toEqual([1, 2, 3, null]);
	});

	it('add new price when empty', () => {
		let state = {
			results: [
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [null, null, null, null],
				distance_fi: 1
			}
		};

		let newPrices = businesses(state, updatePrices(3));
		expect(newPrices.sorting.prices).toEqual([null, null, 3, null]);
	});

	it('remove price', () => {
		let state = {
			results: [
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [1,2,3, null],
				distance_fi: 1
			}
		};

		let newPrices = businesses(state, updatePrices(2));
		expect(newPrices.sorting.prices).toEqual([1, null, 3, null]);
	});

	it('remove price when only 1 elt', () => {
		let state = {
			results: [
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [null, null, 3, null],
				distance_fi: 1
			}
		};

		let newPrices = businesses(state, updatePrices(3));
		expect(newPrices.sorting.prices).toEqual([null, null, null, null]);
	});
});

describe('(Reducer) Businesses FILTER DISTANCE', () => {
	it('toggle price', () => {
		let state = {
			results: [
			   { id: 'no-thai-ann-arbor',
			     name: 'No Thai!',
			     categories: [ 'Thai' ],
			     distance: 1813.8360979219997,
			     price: '$',
			     rating: 2.5,
			     review_count: 159,
			     url: 'https://www.yelp.com/biz/no-thai-ann-arbor?adjust_creative=3MSgslm41uAxRsSzTz1H9Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=3MSgslm41uAxRsSzTz1H9Q',
			     image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/uO4qodWRlx1e_wqFhZRrzg/o.jpg' }
			],
			fetched: true,
			sorting: {
				rating_si: 2,
				prices: [null, null, 3, null],
				distance_fi: 2
			}
		};

		let newDistance = businesses(state, toggleDistanceFilter());
		expect(newDistance.sorting.distance_fi).toEqual(0);
	});
});
