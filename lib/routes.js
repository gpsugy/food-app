import request from 'request';
import { userDB } from '../models/User';
import express from 'express';
import path from 'path';

let businesses = [];

export default function routes(app, passport) {
	app.get('/login', (req, res) => {
		console.log('serving login');
		res.send('login');
		app.use(express.static(path.join(__dirname, '../client/src')));
	})

	app.get('/businesses/search', (req, response) => {
		// ~10 miles
		let radius = 16093;
		let limitResults = 40;
		let open_now = true;
		var options = {
		  url: `https://api.yelp.com/v3/businesses/search?term=${req.query.term}&latitude=${req.query.latitude}&longitude=${req.query.longitude}&radius=${radius}&limit=${limitResults}&open_now=${open_now}`,
		  headers: {
		    'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx'
		  }
		};

		request(options, (err, res, body) => {
			businesses = filterResults((JSON.parse(body)).businesses);
			// console.log(businesses);
		  	// businesses.map((business) => {
		  	// 	console.log(business.name);
		  	// 	business.categories.map((category) => {
		  	// 		console.log(category);
		  	// 	});
		  	// });
		  	response.send(businesses);
		});
	});

	app.get('/test', (req, res) => {
		res.send('test');
	});

	app.post('/test', (req, res) => {
		console.log('got test post');
		res.send('post test works with: ' + req.body.name);
	});


	app.post('/user', (req, res) => {
		console.log('got user post');
		userDB.create({
			id: 1,
			name: req.body.name,
			email: req.body.email
		}, (err, item) => {
			if (err) {
				return res.status(500).json({
					message: 'Internal Server Error'
				});
			}
			console.log('posting user');
			res.status(201).json(item);
		});
	});
};

function filterResults(results) {
	results.map((business) => {
		businesses.push({
			"id": business.id,
			"name": business.name,
			"categories": business.categories,
			"distance": business.distance,
			"price": business.price,
			"rating": business.rating,
			"review_count": business.review_count,
			"url": business.url,
			"image_url": business.image_url
		});
	});

	// large results: truncate beyond first 20 'best-match' businesses
	if (businesses.length > 20) {
		businesses.length = 20;
	}

	businesses.sort((a, b) => {
		return b.rating - a.rating;
	});

	return businesses;
}

