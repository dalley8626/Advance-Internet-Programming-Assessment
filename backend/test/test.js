//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Rating = require('../__models/rating');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Ratings', () => {
    beforeEach((done) => { //Before each test we empty the database
        Rating.find({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET rating', () => {
      it('it should GET all the ratings', (done) => {
        chai.request(app)
            .get('/ratings')
            .end((err, res) => {
                chai.should().exist(res.body);
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
              done();
            });
      });
  });
    /*
    * Test the /GET/:id route so that it retrieves ratings of the subject by passing subject id
    */
    describe('/GET rating', () => {
        it('it should GET all the ratings', (done) => {
        chai.request(app)
            .get('/ratings/5bc84cd02fdf4b30abd8d41d')
            .end((err, res) => {
                chai.should().exist(res.body);
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                done();
            });
        });
    });

    
});