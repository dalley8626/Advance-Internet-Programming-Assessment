const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
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
// app.use(cors({
//     origin: "http://localhost:4200"
// }));//cors middleware

//Initialize the passport
//Use the session
app.use(passport.initialize());
app.use(passport.session());

require('./__config/passport')(passport);

//all routes passed
app.use('/users', users);
app.use('/subjects', subjects);
app.use('/ratings', ratings);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

//start server
app.listen(port, () => {
    console.log('server is listening on port ' + port);
});