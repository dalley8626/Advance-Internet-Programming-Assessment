const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../__config/database')
const User = require('../__models/user');


//This function is use for user registration
//It requests the field as a JSON type
//Then it adds the into the database as a new collection
router.post('/register', (req, res, next) => {
//First, Initialize the input that has been entered as a new user
let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
//Then, Add the user to the database
//If, there is an error in the database, provide error message
//else, user is registered
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        }
        else {
            res.json({ success: true, msg: 'User is registered' })
        }
    });
});

//This function is to authenticate that this is the real user that has been registered
//It checks if the email address and password match the collection
//If it does, provide a token that allows access
router.post('/authenticate', (req, res, next) => {
    //Get the email and password as JSON type
    const email = req.body.email;
    const password = req.body.password;

    //Verifies the user email address with the database collection
    //If not found, throw err
    User.getUserByEmailAddress(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        // Verification of password if it match
        // If there is an error, throw err
        // If it match, allow them to access for 1 week
        // Provide the bearer token for access
        // If the password does not match, provide acknowledgement that the password is wrong
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({data:user}, config.secret, {
                    expiresIn: 604800 // after not logging in for 1 week
                });

                res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong Password' })
            }
        });
    });
});

//A route way to access the webpage, therefore we have to encrypt with a passport authentication
//If they have the correct authentication(token), therefore it would allow access
//This is just get the user req and goes to authenticate, if authenticate successful
// Allow pass
router.get('/profile', passport.authenticate('jwt', {session:false}),(req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
