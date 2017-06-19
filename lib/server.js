import bodyParser from 'body-parser';

import express from 'express';

import request from 'request';

var jsonParser = bodyParser.json();

var options = {
  url: 'https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938',
  headers: {
    'Authorization': 'Bearer B71cf9eZq7_sj_X2p8axs-7rdYcqLR91pgWAb-xpfwQrpgEee9SRzIYaqkElP0xM1jhmQlw515nRnUGddYc7ilYPhKw0jpk_UVa7UDXV8XYW6kHtH3CUeNeg9VE4WXYx'
  }
};

request(options, (err, res, body) => {
  console.log(JSON.parse(body));
});

//var client = request.createClient(process.env.PORT || 8080, process.env.IP);

//client.get('https://api.yelp.com/v3/businesses/search?term=Mexican Asian&latitude=42.25830870000001&longitude=-83.7312938', (err, res, body) => {
 // console.log('got something!')
  //return console.log(res.statusCode);
//});

let app = express();
app.use(express.static('public'));

app.get('/items', (request, response) => {
    response.json(storage.items);
});

app.listen(process.env.PORT || 8080, process.env.IP);