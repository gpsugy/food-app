import express from 'express';
import { userDB } from '../models/User';
let router = express.Router();

router.get('/test', (req, res) => {
	res.send('test');
});

router.get('/businesses/search', (req, response) => {
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

router.post('/test', (req, res) => {
	console.log('got test post');
	res.send('post test works with: ' + req.body.name);
});


router.post('/user', (req, res) => {
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
		res.status(201).json(item);
	});
});

export default router;