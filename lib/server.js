import bodyParser from 'body-parser';

import express from 'express';

import request from 'request';

var jsonParser = bodyParser.json();

// var options = {
//   url: 'https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938',
//   headers: {
//     'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx'
//   }
// };

// request(options, (err, res, body) => {
//   console.log(JSON.parse(body));
// });

let app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
else {
	app.use(express.static('public'));
}

app.get('/businesses/search', (request, response) => {
	response.send('I received your GET request');
    // response.json(storage.items);
});

app.listen(process.env.PORT || 8080, process.env.IP);

