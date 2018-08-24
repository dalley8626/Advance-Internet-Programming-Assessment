var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')
var mongoose = require('mongoose')

var app = express()

const port = 3000;

app.get('/', () =>{
    res.send('hello world');
})

app.listen(port, () => {
    console.log('server is listening on port ' + port)
})