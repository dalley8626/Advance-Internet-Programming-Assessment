const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//using b-crypt to hash the password
const bcrypt = require('bcryptjs');

//linking to the database
const config = require('../__config/database');

//user validators extracted from the validator folder
const validator = require('../__validators/userValidator');

//Declare a user schema
//The schema consists of the following attributes
//- first name
//- last name
//- email
//- username
//- password

const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        validate: validator.firstnameValidators
    },
    last_name: {
        type: String,
        required: true,
        validate: validator.lastnameValidators
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: validator.emailValidators
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: validator.usernameValidators
    },
    password: {
        type: String,
        required: true,
        validate: validator.passwordValidators
    },
    usertype: {
        type: String,
        default: "user",
    }
});

//Expose the mongodb object as a module that would allow request
const User = module.exports = mongoose.model('User', UserSchema);

//Exporting the function to get the user ID from the generated mongodb database
module.exports.getUserByID = (id, callback) => {
    User.findById(id,callback);
}

//Exporting the function to get email address that has been created by the user
module.exports.getUserByEmailAddress = (email,callback) => {
    const query = {email: email}
    User.findOne(query,callback);
}

//middleware to encrypt the password whenever userschema is modified or saved
UserSchema.pre('save', function(next){
    if (!this.isModified('password')){
        return next();
    }
    
    //Hash the user's password with 10 rounds of salt
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) throw err;
            this.password = hash;
            next();
        });
    })
});

//Exporting the function to add user to the mongodb database
module.exports.addUser = (newUser, callback) => {
    newUser.save(callback);
}

//Exporting the function to compare the password with the one stored in the database
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    //Compares if the user's credential in the database matches with the user's current input 
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        //If the password does not match, throw an error
        if(err) throw err;
        callback(null, isMatch);
    });
}
