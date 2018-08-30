const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const User = require('../models/user');


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

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmailAddress(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

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

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}),(req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;
