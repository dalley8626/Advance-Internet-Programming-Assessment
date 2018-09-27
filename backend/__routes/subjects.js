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

router.get('/singleSubject/:id', (req,res) => {

    if (!req.params.id) {
        res.json({ success: false, message: 'No Subject Id has been provided.' });
    } else {
        Subject.findOne({ _id: req.params.id }, (err,subject) => {
            if (err){
                res.json({success: false, message: 'Not a valid Id'});
            } else {
                if (!subject) {
                    res.json({ success: false, message: 'Subject Not Found'});
                } else {
                    res.json({ success: true, subject: subject });
                }
            }
        });
    }
});

router.put('/updateSubject', (req,res) => {
    if (!req.body._id) {
        res.json({ success: false, message: 'No Subject Id has been provided.' });
    } else {
        Subject.findOne({ _id: req.body._id }, (err,subject) => {
            if (err){
                res.json({success: false, message: 'Not a valid Id'});
            } else {
                if (!subject) {
                    res.json({ success: false, message: 'Subject was not found'});
                } else {
                    //admin user?
                    // User.findOne({ _id: req.decoded.userId }, (err, user) => {
                    //     if (err) {
                    //         res.json({ success: false, message: err });
                    //     } else {
                    //         if (!user) {
                    //             res.json({ success: false, message: 'Unable to authenticate user' })
                    //         } else {
                    //             //only if you havea username ro123, you can update the thing
                    //             if (user.username !== "ro123") {
                    //                 res.json ({ success: false, message: 'Not authorized to update the subject' })
                    //             } else {
                                    subject.subjectNumber = req.body.subjectNumber;
                                    subject.subjectName = req.body.subjectName;
                                    subject.description = req.body.description;
                                    subject.numberOfReview = req.body.numberOfReview;
                                    subject.percentageRating = req.body.percentageRating;
                                    subject.save((err) => {
                                        if (err) {
                                            res.json ({ success: false, message: err });
                                            console.log("2")
                                        } else {
                                            res.json ({ success: true, message: 'Subject Updated Successfully' });
                                        }
                                    });
                    //             }
                    //         }
                    //     }

                    // });
                }
            }
        });
    }
})

router.delete('/deleteSubject/:id', (req,res) => {
    if (!req.params.id) {
        res.json({ success: false, message: 'No Subject Id has been provided.' });
    } else {
        Subject.findOne({ _id: req.params.id }, (err,subject) => {
            if (err){
                res.json({success: false, message: 'Not a valid Id'});
            } else {
                if (!subject) {
                    res.json({ success: false, message: 'Subject Not Found'});
                } else {
                    subject.remove((err) => {
                        if (err) {
                            res.json({ success: false, message: err});
                        } else {
                            res.json({ success: true, message: 'Deleted Subject!'});
                        }
                    })
                }
            }
        });
    }
})

router.post('/addReview/:id', (req,res) => {
    if (!req.body.reviewComment) {
        res.json({ success: false, message: 'No review Provided' });
    } else {
        if (!req.body.id) {
            res.json({ success: false, message: 'No id was Provided' });
        } else {
            Subject.findOne({ _id: req.body.id }, (err, subject) => {
                if (err) {
                    res.json({ success: false, message: 'Invalid subject Id' });
                } else {
                    if (!subject) {
                        res.json({ success: false, message: 'Subject not Found.' });
                    } else {
                        User.findOne({ _id: req.params.id}, (err,user) => {
                            if (err) {
                                res.json({success:false, message: 'Something is not right'});
                            } else {
                                if (!user) {
                                    res.json({success:false, message: 'User not found'});
                                } else {
                                    // const review = {
                                    //     reviewComment: req.body.reviewComment,
                                    //     reviewCreator: user.username,
                                    //     reviewDate: Date.now(),
                                    //     reviewRating: req.body.reviewRating};
                                    //     subject.reviews.push(review);
                                        
                                    // subject.numberOfReview = subject.numberOfReview + 1;
                                    // res.send(''+ subject.reviews[reviewRating]);
                                    // subject.rating = subject.rating + subject.reviews[reviewRating];
                                    
                                    // subject.maximumRatingPossible = subject.numberOfReview * 5;
                                    // subject.percentageRating = Math.round((subject.rating/subject.maximumRatingPossible)*10)/10;
                                    subject.save((err) => {
                                        if (err) {
                                            res.json({ success: false, message: err});
                                        } else {
                                            res.json({success: true, message: 'Review Successful' })
                                        }
                                    });
                                }
                            }
                        })
                    }
                }
            })
        }
    }
})

module.exports = router;
