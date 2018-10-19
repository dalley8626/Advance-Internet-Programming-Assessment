const assert = require('chai').assert;
const validEmailChecker = require('../__validators/userValidator').validEmailChecker
const validSubjectNumber = require('../__validators/subjectValidator').validSubjectNumber


//This test validates the email address if it is a legitimate email
describe('validateEmail',function(){
    it('validate email should return true', function(){
        let result = true;
        assert.equal(result,validEmailChecker('senghuotlay86@gmail.com'));
    });
});

//This test will fail because the input is incorrect type of email address
describe('validateEmail',function(){
    it('validate email should return false', function(){
        let result = true;
        assert.equal(result,validEmailChecker('asdf'));
    });
});

//This test validates if the inputed subject number is number
describe('validateSubjectNumber',function(){
    it('validate subject number should return true', function(){
        let result = true;
        assert.equal(result,validSubjectNumber(1213));
    });
});
