const mongoose = require('mongoose');
const config = require('../config/database');

//Declare a subject schema that defines the shape of mongodb collection
const CounterSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        required: true
    }
});

//Expose the mongodb object as a module that would allow request
const Counter = module.exports = mongoose.model('Counter', CounterSchema);
