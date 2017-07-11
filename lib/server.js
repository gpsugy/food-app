import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import { DATABASE_URL, PORT } from '../config/database';

let port = process.env.PORT || 8080;

let app = express();
let corsOptions = {
	credentials: true,
	maxAge: 24 * 60 * 60 * 1000,
	allowedHeaders: 'Origin, X-Requested-With,X-AUTHENTICATION,X-HTTP-Method-Override,X-IP,Content-Type,Accept'
};
app.use(cors(corsOptions));
// app.use(function(req, res, next) {
// 	console.log(req.headers.origin);
// res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
// res.header('Access-Control-Allow-Credentials', true);
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-HTTP-Method-Override, X-IP, Content-Type, Accept');
// if ('OPTIONS' == req.method) {
//      res.send(200);
//  } else {
//      next();
//  }
// });
import passportConfig from '../config/passport';
passportConfig(passport);
app.use(cookieParser()); // read cookies (needed for auth)
var jsonParser = bodyParser.json();
app.use(jsonParser);
// app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); // log every request to the console
app.use(session({
	secret: 'something secret',
	resave: true,
	saveUninitialized: false
}));
	// cookie: {secure: false, maxAge: 4*60*60*1000, httpOnly: false }
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
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


import routes from './routes';
let router = routes(app, passport); // import function