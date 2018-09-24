const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//using b-crypt to hash the password
const bcrypt = require('bcryptjs');

//linking to the database
const config = require('../__config/database');


//Server Side Validations
//email validation
let emailLengthChecker = (email) => {
    if(!email){
        return false;
    } else {
        if (email.length < 5 || email.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

let validEmailChecker = (email) => {
    if(!email){
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email);
    }
};

const emailValidators = [
    {
        validator: emailLengthChecker,
        message: 'Email must be atleast 5 character but less than 50'
    },
    {
        validator: validEmailChecker,
        message: 'Must be a valid email'
    }
];

//Username Validation
let usernameLengthChecker = (username) => {
    if (!username) {
        return false;
    } else {
        if (username.length < 5 || username.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

let validUsernameChecker = (username) => {
    if (!username) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
};

const usernameValidators = [
    {
        validator: usernameLengthChecker,
        message: 'Username must be atleast 5 character but less than 50 '
    },
    {
        validator: validUsernameChecker,
        message: 'Username must not have any special characters and white spaces'
    }
];

//Password Validation
let passwordLengthChecker = (password) => {
    if (!password) {
        return false;
    } else {
        if (password.length < 8 || password.length > 80) {
            return false;
        } else {
            return true;
        }
    }
};

let validPasswordChecker = (password) => {
    if (!password) {
        return false;
    } else {
        const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
        return regExp.test(password);
    }
};

const passwordValidators = [
    {
        validator: passwordLengthChecker,
        message: 'Password must be atleast 8 character but less than 80'
    },
    {
        validator: validPasswordChecker,
        message: 'Password must atleast contain a uppercase letter, a lower case letter, a number and a special character'
    }
];

//f_name validation 
let firstnameLengthChecker = (f_name) => {
    if(!f_name){
        return false;
    } else {
        if (f_name.length < 5 || f_name.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

let validfirstnameChecker = (f_name) => {
    if(!f_name){
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(f_name);
    }
};

const firstnameValidators = [
    {
        validator: firstnameLengthChecker,
        message: 'First Name must be atleast 5 character but less than 50'
    },
    {
        validator: validfirstnameChecker,
        message: 'Must be a valid First Name'
    }
];

//l_name validation
let lastnameLengthChecker = (l_name) => {
    if(!l_name){
        return false;
    } else {
        if (l_name.length < 5 || l_name.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

let validlastnameChecker = (l_name) => {
    if(!l_name){
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(l_name);
    }
};

const lastnameValidators = [
    {
        validator: lastnameLengthChecker,
        message: 'Last Name must be atleast 5 character but less than 50'
    },
    {
        validator: validlastnameChecker,
        message: 'Must be a valid Last Name'
    }
];

//Vaidation ends

//Declare a user schema that defines the shape of mongodb collection
const UserSchema = mongoose.Schema({
    f_name: {
        type: String,
        required: true,
        validate: firstnameValidators
    },
    l_name: {
        type: String,
        required: true,
        validate: lastnameValidators
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: emailValidators
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: usernameValidators
    },
    password: {
        type: String,
        required: true,
        validate: passwordValidators
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
