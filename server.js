const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./config/database')

//connection to the database
mongoose.connect(config.database, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to the database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database ' + err);
});

const app = express();

const users = require('./routes/users');

//port number
const port = 3000;

//Cors middleware
app.use(cors());

//Connect the server to angular file
app.use(express.static(path.join(__dirname,'subject-review')))

//Body parse that allows forms to be accepted as data
app.use(bodyParser.json());

//Passport 
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//index route
app.get('/', (req,res) => {
    res.send('Invalid end point');
})

//start server
app.listen(port, () => {
    console.log('server is listening on port ' + port);
});