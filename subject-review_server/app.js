const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://user123:user123@ds253871.mlab.com:53871/learning-node';
const User = require('./model/user');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.get('/api/user/login', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url,{ useMongoClient: true }, function(err){
        console.log(req.body);
    if(err) throw err;
    User.find({
        username : req.body.username, password : req.body.password
    }, function(err, user){
        if(err) throw err;
        if(user.length === 1){
            return res.status(200).json({
                status: 'success',
                data: user
            })
        } else {
            return res.status(200).json({
                status: 'fail',
                message: 'Login Failed'
            })
        }

    })
});
})





app.listen(3000, () => console.log('subject server running on port 3000!'))