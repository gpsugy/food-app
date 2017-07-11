import request from 'request';
import User from '../models/User';
import express from 'express';
import path from 'path';

let businesses = [];

function authenticated (req, res, next) {
	// console.log(req.session);
	console.log('trying to authenticate');
	console.log('****req.user****');
	console.log(req.user);
	console.log('****req.session****');
	console.log(req.session);
	// next();
	if (req.isAuthenticated()) {
		next();
	}
	else {
		res.redirect('/signup');
	}
}

export default function routes(app, passport) {
	app.get('/businesses/search', authenticated, (req, response) => {
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

	app.post('/signup', passport.authenticate('local-signup', {
		session: true
	}), (req, res) => {
		console.log(req.user);
		console.log(req.user.local.email + ' successfully signed up!');
		res.json({
			email: req.user.local.email
		});
	});

	app.post('/login', passport.authenticate('local-login', {
		session: true
	}), (req, res) => {
		console.log('****req.user****');
		console.log(req.user);
		console.log('****req.session****');
		console.log(req.session);
		console.log(req.user.local.email + ' successfully logged in!');
		res.json({
			email: req.user.local.email
		});
	});

	app.post('/filter-defaults', (req, res) => {
		User.findOneAndUpdate({
			'local.email': req.body.email
		}, {
			$set: {
				default: {
					filters: {
						rating_si: req.body.filters.rating_si,
						prices: [
							req.body.filters.prices[0],
							req.body.filters.prices[1],
							req.body.filters.prices[2],
							req.body.filters.prices[3],
						],
						distance_fi: req.body.filters.distance_fi
					}
				}
			}
		}, {
			new: true,
			upsert: true
		}, (err, result) => {
			console.log('starting callback');
			console.log(result);
			if (err) console.error(err);
			res.json({
				email: result.local.email,
				default: result.default
			});
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

