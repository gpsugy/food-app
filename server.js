import bodyParser from 'body-parser';

import express from 'express';

var jsonParser = bodyParser.json();

let app = express();
// app.use(express.static('public'));

app.get('/items', (request, response) => {
    response.json(storage.items);
});

app.listen(process.env.PORT || 8080, process.env.IP);




