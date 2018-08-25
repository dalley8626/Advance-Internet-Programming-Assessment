const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')

const app = express();

const users = require('./routes/users');

//port number
const port = 3000;

app.use(cors());

//Body parse that allows forms to be accepted as data
app.use(bodyParser.json());

app.use('/users', users);

//index route
app.get('/', () => {
    res.send('hello world');
})

//start server
app.listen(port, () => {
    console.log('server is listening on port ' + port);
});