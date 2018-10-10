//creating secret randomly rather than writing it manually.
const crypto = require('crypto').randomBytes(256).toString('hex');

//exporting the database url and a secret for the database
module.exports = {
    database: 'mongodb://admin:admin123@ds111963.mlab.com:11963/rohit-aip-users',
    secret: crypto
}