const mongoose = require('mongoose');
const config = require('../__config/database');
const Subject = require('./subject')

//Rating Schema
//Schema would have the following attributes
//-Rating Title
//-Rating Description
//-Subject Id
//-User Id 
//-Username (who created the rating)
//-star
//-created (created date)
const RatingSchema = mongoose.Schema({
    ratingTitle: {
        type: String,
        require: true
    },
    ratingDescription: {
        type: String,
        require: true
    },
    subjectID: {
        type: String,
        require: true
    },
    userID: {
       type:mongoose.Schema.Types.ObjectId, ref:'User', require:true
   },
   username: {
       type: String,
       require: true
   },
   star: {
       type: Number,
       require: true
   },
   created:  {
       type: Date, 
       require: true
    },
})

//Expose the mongodb object as a module that would allow request
const Rating = module.exports = mongoose.model('Rating', RatingSchema);

//Exporting the function to getRatings according to user ID
module.exports.getRatingByID = (id,callback) => {
    const query = {id: id }
    Rating.findOne({id: id },callback);
}

//Exporting the function to get Ratings according to the subject ID
module.exports.getRatingsBySubjectID = (subjectID,callback) => {
    const query = {subjectID: subjectID }
    Rating.find({subjectID: subjectID },callback);
}

//Exporting the function to update the rating done by the user
module.exports.update = (rating, callback) => {
    let myquery = { _id : rating._id }
    let newvalues = { $set: { ratingTitle: rating.ratingTitle, ratingDescription: rating.ratingDescription}}
    Rating.updateOne(myquery, newvalues, callback);
}

//Exporting the function to delete the rating
module.exports.findByIdAndRemove = (rating_id, callback) => {
    let myquery = { _id : rating_id }
    Rating.deleteOne(myquery, callback);
}