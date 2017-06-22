import bodyParser from 'body-parser';
import express from 'express';
import request from 'request';
import path from 'path';
import cors from 'cors';

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

app.get('/businesses/search', (req, response) => {
	var options = {
	  url: 'https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938',
	  headers: {
	    'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx'
	  }
	};

	request(options, (err, res, body) => {
		businesses = filterResults((JSON.parse(body)).businesses);
	  	response.send(businesses);
	});
});



app.listen(process.env.PORT || 8080, process.env.IP);

