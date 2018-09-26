const express = require('express');
const router = express.Router();

const config = require('../__config/database');

const User = require('../__models/user');

const Subject = require('../__models/subject');


router.post('/addSubject', (req, res, next) => {
    if (!req.body.subjectNumber) {
        res.json({ success: false, message: 'Subject Number is required' });
    } else {
        if (!req.body.subjectName) {
            res.json({ success: false, message: 'Subject Name is required' });
        } else {
            if (!req.body.description) {
                res.json({ success: false, message: 'Description is required' });
            } else {
                const subject = new Subject({
                    subjectNumber: req.body.subjectNumber,
                    subjectName: req.body.subjectName,
                    description: req.body.description
                });

                subject.save((err) => {
                    if (err) {
                        if (err.errors.subjectNumber) {
                            res.json({ sucess: false, message: err.errors.subjectNumber.message });
                        } else {
                            if (err.errors.subjectName) {
                                res.json({ success: false, message: err.errors.subjectName.message })
                            } else {
                                if (err.errors.description) {
                                    res.json({ success: false, message: err.errors.description.message })
                                } else {
                                    res.json({ success: false, message: 'qweqwe' })
                                }
                            }
                        }
                    } else {
                        res.json({ success: true, message: 'Successfully added a subject' })
                    }
                });
            }
        }
    }
})

router.get('/allSubjects', (req,res) => {
    Subject.find({}, (err, subjects) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            if (!subjects) {
                res.json({ success: false, message: 'Unable to fetch the subjects' });
            } else {
                res.json({ success: true, subjects: subjects });
            }
        }
    }).sort({ '_id': -1 });
})

module.exports = router;
