const mongoose = require('mongoose');
const schema = mongoose.schema;
const bcrypt = require('bcryptjs');
const config = require('../__config/database');

//Declare a user schema that defines the shape of mongodb collection
const RatingSchema = mongoose.Schema({
    comments: {type:String},
    // userId: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    // subjectId: {type:mongoose.Schema.Types.ObjectId, ref:'Subject'},
    star: {type:Number}

})

module.exports = Rating = mongoose.model('Rating', RatingSchema);