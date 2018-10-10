const express = require('express')
const path = require('path')

//body parser middle ware
const bodyParser = require('body-parser')

//middleware for development mode
const cors = require('cors')

const passport = require('passport')

//mongoose
const mongoose = require('mongoose')

//database config
const config = require('./__config/database')

//connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {useNewUrlParser: true}, (err)=>{
    if(err){
        console.log('Could not connect to the database : ', err);
    } else {
        console.log('Connected to the database: '+ config.database);
    }
});

const app = express();

//defining routes
const users = require('./__routes/users');
const subjects = require('./__routes/subjects');
const ratings = require('./__routes/ratings');
const dollarDefender = require('dollar-defender-middleware');

//port number
var port = process.env.PORT || 8080;

//prociding a static directory for front-end
app.use(express.static(path.join(__dirname,'public')))

//middleware
app.use(bodyParser.json()); //Body parse that allows forms to be accepted as data
app.use(dollarDefender(/* optionional config object */));
app.use(cors({
    origin: "http://localhost:4200"
}));//cors middleware

//Initialize the passport
//Use the session
app.use(passport.initialize());
app.use(passport.session());
require('./__config/passport')(passport);


//all routes passed through the following 
app.use('/users', users);
app.use('/subjects', subjects);
app.use('/ratings', ratings);

//anything other than the above routes would lead to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

//start server
app.listen(port, () => {
    console.log('server is listening on port ' + port);
});