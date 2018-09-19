const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./__config/database')
const morgan = require('morgan')

const users = require('./__routes/users');
const subjects = require('./__routes/subjects');
const ratings = require('./__routes/ratings');

//connection to the database
mongoose.connect(config.database, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to the database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database ' + err);
});

const app = express();



//port number
const port = 3000;

//Cors middleware
app.use(cors());

//morgan
app.use(morgan('dev'));

//Connect the server to angular file
app.use(express.static(path.join(__dirname,'subject-review')))

//Body parse that allows forms to be accepted as data
app.use(bodyParser.json());

//Initialize the passport
//Use the session
app.use(passport.initialize());
app.use(passport.session());

require('./__config/passport')(passport);

//Provide a route for each of this path
app.use('/users', users);
app.use('/subjects', subjects);
app.use('/ratings',ratings);

//index route
app.get('/', (req,res) => {
    res.send('Invalid end point');
})

//start server
app.listen(port, () => {
    console.log('server is listening on port ' + port);
});