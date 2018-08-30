const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Declare a user schema that defines the shape of mongodb collection
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
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



//This function is to ensure that when the user creates an account, no password would be leaked
//Add user to the mongodb database
module.exports.addUser = (newUser, callback) => {
    //Hash the user's password with 10 rounds of salt
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    })
}

//Compares if the user's credential in the database matches in the input 
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
