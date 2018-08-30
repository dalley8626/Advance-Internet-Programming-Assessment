const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');


module.exports = function(passport) {
    //This function is used to create the endpoint of JWT token
    //And we use BearerToken to create our JWT with a schema 'bearer'
    //If there is a user ID match, therefore we provide them with a Json web token
    
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        //Get the user by the ID 
        User.getUserByID(jwt_payload.data._id, (err, user) => {
            //If there is an error, provide false
            if(err) {
                return done(err, false);
            }
            //If there is a user, provide the JWT
            if (user) {
                return done(null, user);
            }
            //Else, provide nothing
            else {
                return done(null,false);
            }
        })
    }));
}