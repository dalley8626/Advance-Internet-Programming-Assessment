const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database')
const Subject = require('../models/subject');

router.get('/', (req, res) => {
    mongoose.connect(config.database, { useMongoClient: true } , function(err){
        if(err) throw err;
        Subject.find({},[],(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
});
router.post('/add', (req, res) => {
    mongoose.connect(config.database, { useMongoClient: true }, function(err) {
        if(err) throw err;
        const subject = new Subject({
            subjectCode: req.body.subjectCode,
            subjectName: req.body.subjectName
        })
        subject.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    })
})
router.get('/detail/:id', async function(req, res){
    let id = req.params.id;
    //Verifies the user email address with the database collection
    //If not found, throw err
    Subject.getSubjectBySubjectCode(id, (err, subject) => {
        if (err) throw err;
        if (!subject) {
            return res.json({ success: false, msg: 'Subject not found' });
        }
  });
})
module.exports = router;