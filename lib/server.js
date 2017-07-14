import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import morgan from 'morgan';
import session from 'express-session';
import { DATABASE_URL, PORT } from '../config/database';

let port = process.env.PORT || 8080;

let app = express();
app.use(cors());
import passportConfig from '../config/passport';
passportConfig(passport);
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); // log every request to the console
app.use(passport.initialize());

//serve static files
if (process.env.NODE_ENV === 'production') {
	console.log('loading production static files on PORT 8080');
	app.use(express.static(path.join(__dirname, '../client/build')));
}
else {
	console.log('loading dev static files on PORT 8080');
	app.use(express.static(path.join(__dirname, '../client/src')));
}

let runServer = (callback) => {
	mongoose.connect(DATABASE_URL, { useMongoClient: true }, (err) => {
		if (err && callback) {
			return callback(err);
		}

		app.listen(port, process.env.IP, () => {
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


import routes from './routes';
let router = routes(app, passport); // import function