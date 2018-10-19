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
//Our parent block to test if there are ratings stored in the database
describe('Ratings', () => {
    beforeEach((done) => { 
        Rating.find({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET rating that loads all the ratings from the database
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
        it('it should GET the ratings of a specific subject', (done) => {
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

        /*
    * Test the /GET/:id route so that it retrieves ratings for the dashboard
    */
   describe('/GET rating', () => {
    it('it should GET the ratings that is to be displayed to the dashboard', (done) => {
    chai.request(app)
        .get('/ratings/dashboard')
        .end((err, res) => {
            chai.should().exist(res.body);
                res.should.have.status(200);
                res.body.ratings.should.be.a('array');
            done();
        });
    });
});

});