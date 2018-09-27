const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../__config/database')
const Rating = require('../__models/rating');

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

        console.log(res)
            return res.status(200).json({
                status: 'success',
                data: rating
            })
  });
})
router.post('/add', (req, res) => {
    mongoose.connect(config.database, { useNewUrlParser: true }, function(err) {
        if(err) throw err;
        const rating = new Rating({
            ratingTitle: req.body.ratingTitle,
            ratingDescription: req.body.ratingDescription,
            subjectID: req.body.subjectID,
            userID: req.body.userID,
        })
        rating.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    })
})
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
router.delete('/delete/:id', (req, res) => {
    mongoose.connect(config.database, { useNewUrlParser: true }, function(err){
        console.log(req.params.id);
        if(err) throw err;
        Rating.findByIdAndRemove(req.params.id,
            (err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})
router.put('/update', (req, res) => {
    mongoose.connect(config.database, { useNewUrlParser: true }, function(err){
        if(err) throw err;
        Rating.update(req.body,
            (err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})
module.exports = router;


