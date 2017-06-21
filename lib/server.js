import bodyParser from 'body-parser';

import express from 'express';

import request from 'request';

import path from 'path';

var jsonParser = bodyParser.json();



let app = express();

if (process.env.NODE_ENV === 'production') {
	console.log('loading production static files');
	app.use(express.static(path.join(__dirname, '../client/build'));
}
else {
	console.log('loading dev static files');
	app.use(express.static(path.join(__dirname, '../client/src')));
}

app.get('/businesses/search', (req, response) => {
	// response.send('I received your GET request');
	var options = {
	  url: 'https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938',
	  headers: {
	    'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx'
	  }
	};

	request(options, (err, res, body) => {
	  response.send(JSON.parse(body));
	});
    // response.json(storage.items);
});



app.listen(process.env.PORT || 8080, process.env.IP);

