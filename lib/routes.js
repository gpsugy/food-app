import request from 'request';
import User from '../models/User';
import express from 'express';
import path from 'path';
import { jwtOptions } from '../config/passport';
import jwt from 'jsonwebtoken';
let businesses = [];

export default function routes(app, passport) {
	app.get('/businesses/search', (req, response) => {
		// ~10 miles
		let radius = 16093;
		let limitResults = 40;
		let open_now = true;
		var options = {
		  url: `https://api.yelp.com/v3/businesses/search?term=${req.query.term}&latitude=${req.query.latitude}&longitude=${req.query.longitude}&radius=${radius}&limit=${limitResults}`,
		  headers: {
		    'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx'
		  }
		};

		request(options, (err, res, body) => {
			console.log(options.url);
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

	app.post('/signup', (req, res) => {
		if (!req.body.email || !req.body.password)
			res.status(400).send('Blank email or password');

		// find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  req.body.email }, (err, user) => {
            // if there are any errors, return the error
            if (err) {
            	console.log('db error');
                res.status(500).send(err);
            }

            // check to see if theres already a user with that email
            if (user) {
            	console.log('found user with that email');
                res.status(400).send('That email is already taken.');
            } else {
                // if there is no user with that email
                // create the user
                var newUser = new User();

                // set the user's local credentials
                newUser.local.email = req.body.email;
                newUser.local.password = newUser.generateHash(req.body.password);
                newUser.fullName = req.body.fullName;

                // save the user
                newUser.save((err) => {
                    if (err)
                        throw err;

                    console.log('starting jwt signing');
                    console.log(newUser);
		            // all is well, return successful user
		            let payload = { id: newUser.id };
		            let token = jwt.sign(payload, jwtOptions.secretOrKey);
		            console.log(`token: ${token}`);

                    res.json({
                    	message: 'OK',
                    	token: token,
                    	email: newUser.local.email,
                    	fullName: newUser.fullName
                    });
                });
            }
        });
	});

	app.post('/login', (req, res) => {
		console.log('got login request');
		if (req.body.email && req.body.password) {
			console.log(req.body);
			User.findOne({ 'local.email' :  req.body.email }, (err, user) => {
	            // if there are any errors, return the error before anything else
	            if (err) {
	            	console.log('db error');
	                res.status(500).send(err);
	            }

	            // if no user is found, return the message
	            if (!user) {
	            	console.log('no user');
	                res.status(401).send('No such user found.');
	            }

	            // if the user is found but the password is wrong
	            if (!user.validPassword(req.body.password)) {
	            	console.log('wrong pass');
	                res.status(401).send('Wrong password.');
	            }
	            else {
		            console.log('starting jwt signing');
		            // all is well, return successful user
		            let payload = { id: user.id };
		            let token = jwt.sign(payload, jwtOptions.secretOrKey);
		            console.log(`token: ${token}`);
		            res.json({
		            	message: 'OK',
		            	token: token,
		            	email: user.local.email,
		            	fullName: user.fullName
		            });
	            }
	        });
		}
		else {
			res.status(400).send('Blank email or password');
		}
	});

	// REQUIRES: JWT token in Authorization Header
	// RETURNS: user's email, default
	app.get('/settings', passport.authenticate('jwt', { session: false }),
		(req, res) => {
			console.log('/settings');
			console.log('You are authorized, ' + req.user.local.email);
			User.findOne({ _id :  req.user._id }, (err, user) => {
	            // if there are any errors, return the error before anything else
	            if (err) {
	            	console.log('db error');
	                res.status(500).send(err);
	            }

	            // if no user is found, return the message
	            if (!user) {
	            	console.log('no user');
	                res.status(401).send('No such user found.');
	            }
	            else {
	            	console.log('Everything good: sending response with user.default');
		            res.json({
		            	email: user.email,
		            	default: user.default
		            });
	            }
	        });
		}
	);

	// REQUIRES: 1) JWT token in Authorization Header, 2) Filters
	// RETURNS: user's filters
	app.post('/filter-defaults', passport.authenticate('jwt', { session: false }),
		(req, res) => {
			console.log('/filter-defaults');
			console.log('You are authorized, ' + req.user.local.email);
			User.findOneAndUpdate({
				_id: req.user._id
			}, {
				$set: {
					default: {
						filters: {
							rating_si: req.body.rating_si,
							prices: [
								req.body.prices[0],
								req.body.prices[1],
								req.body.prices[2],
								req.body.prices[3],
							],
							distance_fi: req.body.distance_fi
						}
					}
				}
			}, {
				new: true,
				upsert: true
			}, (err, user) => {
				// if there are any errors, return the error before anything else
				if (err) {
					console.log('db error');
	                res.status(500).send(err);
				}
				// if no user is found, return the message
	            if (!user) {
	            	console.log('no user found');
	                res.status(401).send('No such user found.');
	            }
	            else {
					res.json({
						filters: user.default.filters
					});
	            }
			});
		}
	);
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

