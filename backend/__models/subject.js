const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//linking to the database
const config = require('../__config/database');

//Server Side Validations
//email validation
let subjectNumberLengthChecker = (subjectNumber) => {
    if(!subjectNumber){
        return false;
    } else {
        if (subjectNumber.length < 1 || subjectNumber.length > 6) {
            return false;
        } else {
            return true;
        }
    }
};

let validSubjectNumber = (subjectNumber) => {
    if(!subjectNumber){
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(subjectNumber);
    }
};

const subjectNumberValidators = [
    {
        validator: subjectNumberLengthChecker,
        message: 'Subject Number must be 5 numbers'
    },
    {
        validator: validSubjectNumber,
        message: 'Must be a valid Subject Number, No Special Characters'
    }
];

//Username Validation
let subjectNameLengthChecker = (subjectName) => {
    if (!subjectName) {
        return false;
    } else {
        if (subjectName.length < 3 || subjectName.length > 100) {
            return false;
        } else {
            return true;
        }
    }
};

let validSubjectName = (subjectName) => {
    if (!subjectName) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
        return regExp.test(subjectName);
    }
};

const subjectNameValidators = [
    {
        validator: subjectNameLengthChecker,
        message: 'Subject name must be atleast 3 character or less than 100'
    },
    {
        validator: validSubjectName,
        message: 'Subject name is not valid, you can only include special character like . - and \' '
    }
];

//Password Validation
let descriptionLengthChecker = (description) => {
    if (!description) {
        return false;
    } else {
        if (description.length < 8 || description.length > 25000) {
            return false;
        } else {
            return true;
        }
    }
};

const descriptionValidators = [
    {
        validator: descriptionLengthChecker,
        message: 'Description must be atleast 8 character'
    }
];

//f_name validation 
let reviewLengthChecker = (reviewComment) => {
    if(!reviewComment[0]){
        return false;
    } else {
        if (comment[0].length < 1 || f_name.length > 500) {
            return false;
        } else {
            return true;
        }
    }
};

const reviewValidators = [
    {
        validator: reviewLengthChecker,
        message: 'review must not exceed 500'
    }
];


const subjectSchema = mongoose.Schema({
    subjectNumber: {
        type: String,
        required: true,
        validate: subjectNumberValidators
    },
    subjectName: {
        type: String,
        required: true,
        validate: subjectNameValidators
    },
    description: {
        type: String,
        required: true,
        validate: descriptionValidators
    },
    rating: {
        type: Number,
        default: 0
    }
    ,
    reviews: [
        {
            reviewComment: { type: String, validate: reviewValidators },
            reviewCreator: { type: String },
            reviewDate: { type: Date, default: Date.now() },
            reviewRating: { type: Number }
        }
    ]

});

//Expose the mongodb object as a module that would allow request
const Subject = module.exports = mongoose.model('Subject', subjectSchema);

