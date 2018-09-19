const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

const Rating = require('../__models/rating')

router.get('/', (req,res) => {
    Rating.find()
        .then(rating => res.json(rating))
});

router.post('/', (req,res) => {
    const newRating = new Rating({
        comments: req.body.comments,
        // userId: req.body.status,
        // subjectId: req.body.userId,
        star:req.body.star,
    });

    newRating
        .save()
        .then(rating => {
            res.json(rating)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        })
});

router.get('/:ratingId',(req,res,next) => {
    const id = req.params.ratingId;
    Rating.findById(id, (err,Rating) => {
        if (err) {
            res.status(404).json({message:'Card cannot be found'})
        }
    }).then(rating => res.json(rating))
})

module.exports = router;

