const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../__config/database')
const User = require('../__models/user');

const Subject = require('../__models/subject')

//This function is use for user registration
//It requests the field as a JSON type
//Then it adds the into the database as a new collection
router.post('/register', (req, res, next) => {

    //First, Initialize the input that has been entered as a new user
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email.toLowerCase(),
        username: req.body.username.toLowerCase(),
        password: req.body.password,
        usertype: req.body.usertype,
    });

    //Then, Add the user to the database using a method defined in user model
    //If, there is an error in the database, provide error message
    //else, user is registered
    User.addUser(newUser, (err) => {
        if (err) {
            if (err.code === 11000) {
                res.json({ success: false, message: 'Username or Email already Exists' });
            } else if (err.errors) {
                if (err.errors.email) {
                    res.json({ success: false, message: err.errors.email.message });
                } else if (err.errors.username) {
                    res.json({ success: false, message: err.errors.username.message });
                } else if (err.errors.password) {
                    res.json({ success: false, message: err.errors.password.message });
                } else {
                    res.json({ success: false, message: 'Failed to register user. Error: ' + err });
                }
            }
        } else {
            res.json({ success: true, message: 'Successfully registered account' });
        }
    })
})



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
            return res.json({ success: false, message: 'Username or Password is incorrect' });
        }

        // Verification of password if it match
        // If there is an error, throw err
        // If it match, allow them to access for 1 week
        // Provide the bearer token for access
        // If the password does not match, provide acknowledgement that the password is wrong
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 // after not logging in for 1 week
                });

                res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        usertype: user.usertype,
                    }
                });
            } else {
                return res.json({ success: false, message: 'Username or Password is incorrect' })
            }
        });
    });
});

//This function is to check if there is an email has already been registered in the system
//It checks if you have entered an email address
//Then check if there is an error, or an email has been registered, or available
//Provide back with a response
router.get('/checkEmail/:email', (req, res) => {
    if (!req.params.email) {
        res.json({ success: false, message: 'Email has not been provided' });
    } else {
        User.findOne({ email: req.params.email }, (err, user) => {
            if (err) {
                res.json({ success: false, message: err });
            } else if (user) {
                res.json({ success: false, message: 'E-mail is already registered' });
            } else {
                res.json({ success: true, message: 'E-mail is available' })
            }
        })
    }
})

//This function is to check if there is an username has already been registered in the system
//It checks if you have entered an username
//Then check if there is an error, or an username has been registered, or available
//Provide back with a response
router.get('/checkUsername/:username', (req, res) => {
    if (!req.params.username) {
        res.json({ success: false, message: 'Username has not been provided' });
    } else {
        User.findOne({ username: req.params.username }, (err, user) => {
            if (err) {
                res.json({ success: false, message: err });
            } else if (user) {
                res.json({ success: false, message: 'Username is already registered' });
            } else {
                res.json({ success: true, message: 'Username Available' })
            }

        })
    }
})

//This function is to check if there is an subjectNumber has already been registered in the system
//It checks if you have entered an subjectNumber
//Then check if there is an error, or an subjectNumber has been registered, or available
//Provide back with a response
router.get('/checkSubjectNumber/:subjectNumber', (req, res) => {
    if (!req.params.subjectNumber) {
        res.json({ success: false, message: 'SubjectNumber has not been provided' });
    } else {
        Subject.find({ subjectNumber: req.params.subjectNumber }, (err, subjects) => {
            if (err) {
                res.json({ success: false, message: err });
            } else 
                res.json({success: true, subjects: subjects});
            }
    ).sort({ '_id': -1 });
}
})

//This function is to check if there is an subjectName has already been registered in the system
//It checks if you have entered an subjectName
//Then check if there is an error, or an subjectName has been registered, or available
//Provide back with a response
router.get('/checkSubjectName/:subjectName', (req, res) => {
    if (!req.params.subjectName) {
        res.json({ success: false, message: 'SubjectName has not been provided' });
    } else {
        Subject.find({ subjectName: { "$regex": req.params.subjectName , "$options": "i" }}, (err, subjects) => {
            if (err) {
                res.json({ success: false, message: err });
            } else 
                res.json({success: true, subjects: subjects});
            }
    ).sort({ '_id': -1 });
}
})

//A route way to access the webpage, therefore we have to encrypt with a passport authentication
//If they have the correct authentication(token), therefore it would allow access
//This is just get the user req and goes to authenticate, if authenticate successful
// Allow pass
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ success: true, user: req.user });
});

//Put request to update the profile 
router.put('/profile/updateProfile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.findOne({ _id: req.body._id }, (err, user) => {
        if (err) {
            res.json({ success: false, message: 'Not a authorized user' });
        } else {
            if (err) {
                res.json({ success: false, message: err });
            } else if(user) {
                //updating the user
                user.first_name = req.body.first_name;
                user.last_name = req.body.last_name;
                user.email = req.body.email.toLowerCase();
                user.username = req.body.username.toLowerCase();
                user.password = req.body.password;

                //saving the user
                user.save((err) => {
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {
                        res.json({ success: true, message: 'User Updated Successfully' });
                    }
                });
            } else {
                res.json({ success: false, message: 'User not found' });

                
            }
        }
    });

})




module.exports = router;
