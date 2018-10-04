const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//linking to the database
const config = require('../__config/database');

//validators
const subjectValidator = require('../__validators/subjectValidator');

const subjectSchema = new mongoose.Schema({
    subjectNumber: {
        type: String,
        required: true,
        validate: subjectValidator.subjectNumberValidators
    },
    subjectName: {
        type: String,
        required: true,
        validate: subjectValidator.subjectNameValidators
    },
    description: {
        type: String,
        required: true,
        validate: subjectValidator.descriptionValidators
    },
    numberOfReview: {
        type: Number,
        default: 0
    },
    percentageRating:{
        type: Number,
        default: 0
    }

});

//Expose the mongodb object as a module that would allow request
const Subject = module.exports = mongoose.model('Subject', subjectSchema);

