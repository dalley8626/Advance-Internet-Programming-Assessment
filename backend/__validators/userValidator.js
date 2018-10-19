//Server Side Validations
//email validation
//email length checker
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

//valid email checker
let validEmailChecker = (email) => {
    if(!email){
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email);
    }
};

//variable to store the validator
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
//username length checker
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

//valid username checker
let validUsernameChecker = (username) => {
    if (!username) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
};

//variable to store username validators
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
//passowrd length checker
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

//valid password checker
let validPasswordChecker = (password) => {
    if (!password) {
        return false;
    } else {
        const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
        return regExp.test(password);
    }
};

//variable to store the validators
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

//first_name validation 
//firstname length checker
let firstnameLengthChecker = (first_name) => {
    if(!first_name){
        return false;
    } else {
        if (first_name.length < 2 || first_name.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

//valid first name checker
let validfirstnameChecker = (first_name) => {
    if(!first_name){
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(first_name);
    }
};

//variable to store the validators
const firstnameValidators = [
    {
        validator: firstnameLengthChecker,
        message: 'First Name must be atleast 2 character but less than 50'
    },
    {
        validator: validfirstnameChecker,
        message: 'Must be a valid First Name'
    }
];

//last_name validation
let lastnameLengthChecker = (last_name) => {
    if(!last_name){
        return false;
    } else {
        if (last_name.length < 2 || last_name.length > 50) {
            return false;
        } else {
            return true;
        }
    }
};

//valid last name
let validlastnameChecker = (last_name) => {
    if(!last_name){
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z]+$/);
        return regExp.test(last_name);
    }
};

//storing last name validator
const lastnameValidators = [
    {
        validator: lastnameLengthChecker,
        message: 'Last Name must be atleast 2 character but less than 50'
    },
    {
        validator: validlastnameChecker,
        message: 'Must be a valid Last Name'
    }
];

//exporting the user validators
const validator = module.exports = { lastnameValidators, firstnameValidators, passwordValidators, usernameValidators, emailValidators, validEmailChecker }