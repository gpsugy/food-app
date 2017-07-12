let LocalStrategy = require('passport-local').Strategy;
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

import User from '../models/User';

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: 'someRandomSecret'
};

export { jwtOptions };

export default function passportConfig(passport) {
	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        console.log('serializing user');
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        console.log('deserializing user');
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });


    passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
        console.log('payload received', payload);
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ id :  payload.id }, (err, user) => {
            // if there are any errors, return the error before anything else
            if (err) {
                console.log('db error');
                return done(err);
            }

            // if no user is found, return the message
            if (!user) {
                console.log('no such user found');
                return done(null, false); // req.flash is the way to set flashdata using connect-flash
            }
            // all is well, return successful user
            else {
                console.log('found user!');
                return done(null, user);
            }
        });
    }))


    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    // passport.use('local-signup', new LocalStrategy({
    //     // by default, local strategy uses username and password, we will override with email
    //     usernameField : 'email',
    //     passwordField : 'password',
    //     passReqToCallback : true // allows us to pass back the entire request to the callback
    // },
    // (req, email, password, done) => {

    //     // asynchronous
    //     // User.findOne wont fire unless data is sent back
    //     process.nextTick(() => {

	   //      // find a user whose email is the same as the forms email
	   //      // we are checking to see if the user trying to login already exists
	   //      User.findOne({ 'local.email' :  email }, (err, user) => {
	   //          // if there are any errors, return the error
	   //          if (err)
	   //              return done(err);

	   //          // check to see if theres already a user with that email
	   //          if (user) {
	   //          	console.log('found user with that email');
	   //              return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
	   //          } else {

	   //              // if there is no user with that email
	   //              // create the user
	   //              var newUser = new User();

	   //              // set the user's local credentials
	   //              newUser.local.email = email;
	   //              newUser.local.password = newUser.generateHash(password);

	   //              // save the user
	   //              newUser.save((err) => {
	   //                  if (err)
	   //                      throw err;
	   //                  return done(null, newUser);
	   //              });
	   //          }

	   //      });    

    //     });

    // }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    // passport.use('local-login', new LocalStrategy({
    //     // by default, local strategy uses username and password, we will override with email
    //     usernameField : 'email',
    //     passwordField : 'password',
    //     passReqToCallback : true // allows us to pass back the entire request to the callback
    // },
    // (req, email, password, done) => { // callback with email and password from our form
    //     // find a user whose email is the same as the forms email
    //     // we are checking to see if the user trying to login already exists
    //     User.findOne({ 'local.email' :  email }, (err, user) => {
    //         // if there are any errors, return the error before anything else
    //         if (err)
    //             return done(err);

    //         // if no user is found, return the message
    //         if (!user)
    //             return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

    //         // if the user is found but the password is wrong
    //         if (!user.validPassword(password))
    //             return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

    //         // all is well, return successful user
    //         return done(null, user);
    //     });

    // }));
}