import { allowRefetch, fetchBusinessesSuccess } from '../actions/Results';
import { businesses } from './';

describe('(Reducer) Businesses', () => {
	it('populate businesses object on FETCH_BUSINESSES_SUCCESS', () => {
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
			businesses({}, fetchBusinessesSuccess(expected.results))
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
			fetched: true
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
			fetched: false
		};
		expect(
			businesses(init, allowRefetch())
		).toEqual(expected);
	})
});