const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//using b-crypt to hash the password
const bcrypt = require('bcryptjs');

//linking to the database
const config = require('../__config/database');

//
const validator = require('../__validators/userValidator');

//Vaidation ends

//Declare a user schema that defines the shape of mongodb collection
const UserSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: true,
        validate: validator.firstnameValidators
    },
    l_name: {
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
    }
});

//Expose the mongodb object as a module that would allow request
const User = module.exports = mongoose.model('User', UserSchema);

//Get the user ID from the generated mongodb database
module.exports.getUserByID = (id, callback) => {
    User.findById(id,callback);
}

//Get email address that has been created by the user
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

//Add user to the mongodb database
module.exports.addUser = (newUser, callback) => {
    newUser.save(callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    //Compares if the user's credential in the database matches with the user's current input 
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        //If the password does not match, throw an error
        if(err) throw err;
        callback(null, isMatch);
    });
}
