export const FETCH_BUSINESSES_REQUEST = 'FETCH_BUSINESSES_REQUEST';
export const FETCH_BUSINESSES_SUCCESS = 'FETCH_BUSINESSES_SUCCESS';
export const FETCH_BUSINESSES_ERROR = 'FETCH_BUSINESSES_ERROR';

export function fetchBusinessSuccess(results) {
	return {
		type: FETCH_BUSINESSES_SUCCESS,
		results: results
	}
}

export function fetchBusinessError(error) {
	return {
		type: FETCH_BUSINESSES_ERROR
	}
}

export function fetchBusinessesRequest() {
	return {
		type: FETCH_BUSINESSES_REQUEST
	}
}

export function fetchYelp() {
	return function(dispatch) {
		// var options = {
		//   url: 'https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938',
		//   headers: {
		//     'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx'
		//   }
		// };

		// request(options, (err, res, body) => {
		//   console.log(JSON.parse(body));
		// });

		// let options = {
		// 	method: 'GET',
		// 	// headers: new Headers({
		// 	// 	'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx',
		// 	// })

		// }
		


		// let url = 'https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938';
		return fetch(`/businesses/search`)
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
				return response;
		// 	}).then(response => response.json())
		// 	.then(json => console.log(json))
		// 	.catch(error => console.log(error))
			}).then(res => console.log(res))
			.catch(err => console.log(err));
			
			// .then(json => dispatch(fetchDescriptionSuccess(repo, json.description)))
			// .catch(error => dispatch(fetchDescriptionError(repo, error)))
	}
}
