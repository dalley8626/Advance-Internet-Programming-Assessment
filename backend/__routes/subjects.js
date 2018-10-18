const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

//link to the database
const config = require('../__config/database');

//link to the user model
const User = require('../__models/user');

//link to the subject model
const Subject = require('../__models/subject');

//Post request to add a subject
router.post('/addSubject',passport.authenticate('jwt', { session: false }), (req, res, next) => {

    //Required Validations
    if (!req.body.subjectNumber) {
        res.json({ success: false, message: 'Subject Number is required' });
    } else if (!req.body.subjectName) {
        res.json({ success: false, message: 'Subject Name is required' });
    } else if (!req.body.description) {
        res.json({ success: false, message: 'Description is required' });
    } else {

        //Creating a new subject
        const subject = new Subject({
            subjectNumber: req.body.subjectNumber,
            subjectName: req.body.subjectName,
            description: req.body.description
        });

        //Saving the subject to the database
        subject.save((err) => {
            //display errors if there is any error
            if (err) {
                if (err.errors.subjectNumber) {
                    res.json({ sucess: false, message: err.errors.subjectNumber.message });
                } else if (err.errors.subjectName) {
                    res.json({ success: false, message: err.errors.subjectName.message })
                } else if (err.errors.description) {
                    res.json({ success: false, message: err.errors.description.message })
                } else {
                    res.json({ success: false, message: 'qweqwe' })
                }
                //success
            } else {
                res.json({ success: true, message: 'Successfully added a subject' })
            }
        });
    }
})

//Get request to fetch all the available subjects in the database
router.get('/allSubjects',passport.authenticate('jwt', { session: false }), (req, res) => {
    //fetching all the subject and sorting the subjects
    Subject.find({}, (err, subjects) => {
        //displaying errors (if any)
        if (err) {
            res.json({ success: false, message: err });
        } else if (!subjects) {
            res.json({ success: false, message: 'Unable to fetch the subjects' });
        } else if(subjects){
            res.json({ success: true, subjects: subjects });
        } else {
            res.json({success:false, message:'Unable to fetch the subjects'})
        }

    }).sort({ 'subjectName': 1 });
})

//Get request to fetch subjects for the dashboard which will be sorted according to the highest percentage rating
router.get('/dashboard',passport.authenticate('jwt', { session: false }), (req, res) => {
    Subject.find({}, (err, subjects) => {
        //display errors
        if (err) {
            res.json({ success: false, message: err });
        } else if (!subjects) {
            res.json({ success: false, message: 'Unable to fetch the subjects' });
        } else if(subjects){
            res.json({ success: true, subjects: subjects });
        } else {
            res.json({success:false, message:'Unable to fetch the subjects'})
        }

    }).sort({ percentageRating: -1 });
})

//get request to fetach a subject according to the passed id
router.get('/singleSubject/:id',passport.authenticate('jwt', { session: false }), (req, res) => {
    //validation to see of there is any subject id provided
    if (!req.params.id) {
        res.json({ success: false, message: 'No Subject Id has been provided.' });
    } else {
        Subject.findOne({ _id: req.params.id }, (err, subject) => {
            //displaying errors while finding the subjects
            if (err) {
                res.json({ success: false, message: 'Not a valid Id' });
            } else if (!subject) {
                res.json({ success: false, message: 'Subject Not Found' });
            } else {
                res.json({ success: true, subject: subject });
            }
        });
    }
});

//Put request to update the subject
router.put('/updateSubject',passport.authenticate('jwt', { session: false }), (req, res) => {
    //if no id
    if (!req.body._id) {
        res.json({ success: false, message: 'No Subject Id has been provided.' });
    } else {
        //If id is provided, we find the subject
        Subject.findOne({ _id: req.body._id }, (err, subject) => {
            //if errors while requesting data from the database
            if (err) {
                res.json({ success: false, message: 'Not a valid Id' });
            } else if (!subject) {
                res.json({ success: false, message: 'Subject was not found' });
            } else {
                //assigning the respective values to the subject that has been found
                subject.subjectNumber = req.body.subjectNumber;
                subject.subjectName = req.body.subjectName;
                subject.description = req.body.description;
                subject.numberOfReview = req.body.numberOfReview;
                subject.percentageRating = req.body.percentageRating;

                //saving the subject
                subject.save((err) => {
                    //displaying errors
                    if (err) {
                        res.json({ success: false, message: err });
                    } else { //success
                        res.json({ success: true, message: 'Subject Updated Successfully' });
                    }
                });
            }
        });
    }
})

//delete request to delete the subject
router.delete('/deleteSubject/:id',passport.authenticate('jwt', { session: false }), (req, res) => {
    //if id parameter is not provided
    if (!req.params.id) {
        res.json({ success: false, message: 'No Subject Id has been provided.' });
    } else {
        Subject.findOne({ _id: req.params.id }, (err, subject) => {
            //display error when finding the subject
            if (err) {
                res.json({ success: false, message: 'Not a valid Id' });
            } else if (!subject) {
                res.json({ success: false, message: 'Subject Not Found' });
            } else {
                //success
                subject.remove((err) => {
                    //display error if there is any while requesting the service from the datbase
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {
                        res.json({ success: true, message: 'Deleted Subject!' });
                    }
                })
            }
        });
    }
})

module.exports = router;
