const mongoose = require('mongoose');
const config = require('../__config/database');

//Declare a subject schema that defines the shape of mongodb collection
const SubjectSchema = mongoose.Schema({
    subjectCode: {
        type: String,
        require: true
    },
    subjectName: {
        type: String,
        required: true
    }
});

//Expose the mongodb object as a module that would allow request
const Subject = module.exports = mongoose.model('Subject', SubjectSchema);


module.exports.getSubjectBySubjectCode = (subjectCode,callback) => {
    const query = {subjectCode: subjectCode }
    Subject.findOne({subjectCode: subjectCode },callback);
}
module.exports.update = (subject, callback) => {
    let myquery = { _id : subject._id }
    let newvalues = { $set: { subjectCode: subject.subjectCode, subjectName: subject.subjectName}}
    Subject.updateOne(myquery, newvalues, callback);

}
module.exports.findByIdAndRemove = (subject_id, callback) => {
    let myquery = { _id : subject_id }
    Subject.deleteOne(myquery, callback);
}