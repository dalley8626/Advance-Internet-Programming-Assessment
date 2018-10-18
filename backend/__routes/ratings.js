const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../__config/database')
const Rating = require('../__models/rating');
const performance = require('performance-now');
//Get request to fetch all the available ratings in the database
router.get('/', (req, res) => {
    mongoose.connect(config.database, { useNewUrlParser: true }, function(err){
        if(err) throw err;
        Rating.find({},[],(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
});
//Get request to fetch all the ratings for the dashboard from the database
router.get('/dashboard', (req,res) => {
    Rating.find({}, (err, ratings) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            if (!ratings) {
                res.json({ success: false, message: 'Unable to fetch the ratings' });
            } else {
                res.json({ success: true, ratings: ratings });
            }
        }
    }).sort({ created: -1 });
})

//Get request to fetch ratings with specific subject id.
router.get('/:id', function(req, res){
    let id = req.params.id;
    const query = {_id: id}
    //Verifies the user email address with the database collection
    //If not found, throw err
    Rating.getRatingsBySubjectID(id, (err, rating) => {
        if (err) throw err;
        if (!rating) {
            return res.json({ success: false, msg: 'Ratings not found' });
        }
            return res.status(200).json({
                status: 'success',
                data: rating
            })
  });
})
//Post request to add a rating
router.post('/add', (req, res) => {
    //create new rating
    const rating = new Rating({
        ratingTitle: req.body.ratingTitle,
        ratingDescription: req.body.ratingDescription,
        subjectID: req.body.subjectID,
        userID: req.body.userID,
        username: req.body.username,
        star: req.body.star,
        created: req.body.created.toString(),
    })
    //save rating to the database
    rating.save((err, doc) => {
        if(err) throw err;
        return res.status(200).json({
            status: 'success',
            data: doc
        })
    })
})
//Get request to get a rating with a specific id
router.get('/detail/:id', function(req, res){
    let id = req.params.id;
    const query = {_id: id}
    //Verifies the user email address with the database collection
    //If not found, throw err
    Rating.getRatingByID(id, (err, rating) => {
        if (err) throw err;
        if (!rating) {
            return res.json({ success: false, msg: 'Rating not found' });
        }
            return res.status(200).json({
                status: 'success',
                rating: doc
            })
  });
})
//Delete rating with a specific id
router.delete('/delete/:id', (req, res) => {
    Rating.findByIdAndRemove(req.params.id,
        (err, doc) => {
        if(err) throw err;
        return res.status(200).json({
            status: 'success'
        })
    })
})
//Put request that updates the rating with different information
router.put('/update', (req, res) => {
    const start = performance();
    console.log(start);
    Rating.update(req.body,
        (err) => {
        if(err) throw err;
        return res.status(200).json({
            status: 'success'
        });
    })
    console.log(performance() -start);
})
module.exports = router;


