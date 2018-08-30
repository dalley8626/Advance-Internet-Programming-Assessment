const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');


module.exports = function(passport) {
    //This function is used to create the endpoint of JWT token
    //And we use BearerToken to create our JWT with a schema 'bearer'
    //If there is an error, provide false
    //If there is a user, provide the JWT
    //Else, provide nothing
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
        User.getUserByID(jwt_payload.data._id, (err, user) => {
            if(err) {
                return done(err, false);
            }

            if (user) {
                return done(null, user);
            }

            else {
                return done(null,false);
            }
        })
    }));
}