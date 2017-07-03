import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import { DATABASE_URL, PORT } from '../config/database';

let port = process.env.PORT || 8080;

let app = express();
app.use(cors());
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({
	secret: 'e{2cf7B*bg(%P<c#',
	resave: false,
	saveUninitialized: false
}));
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

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
	mongoose.connect(DATABASE_URL, (err) => {
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

require('./routes')(app); // import function