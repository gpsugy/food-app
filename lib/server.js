import bodyParser from 'body-parser';
import express from 'express';
import request from 'request';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import { DATABASE_URL, PORT } from '../config';

// var jsonParser = bodyParser.json();
let app = express();
app.use(cors());

let businesses = [];

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

// serve static files
if (process.env.NODE_ENV === 'production') {
	console.log('loading production static files on PORT 8080');
	app.use(express.static(path.join(__dirname, '../client/build')));
}
else {
	console.log('loading dev static files on PORT 8080');
	app.use(express.static(path.join(__dirname, '../client/src')));
}

let runServer = (callback) => {
	mongoose.connect(DATABASE_URL, (err) => {
		if (err && callback) {
			return callback(err);
		}

		app.listen(process.env.PORT || 8080, process.env.IP, () => {
			console.log('Listening on PORT 8080');
			if (callback) {
				callback();
			}
		});
	})
}

if (require.main === module) {
	runServer((err) => {
		if (err) {
			console.error(err);
		}
	});
}

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
