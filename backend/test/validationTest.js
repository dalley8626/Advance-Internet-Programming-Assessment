const assert = require('chai').assert;
const validEmailChecker = require('../__validators/userValidator').validEmailChecker
const validSubjectNumber = require('../__validators/subjectValidator').validSubjectNumber



describe('validateEmail',function(){
    it('validate email should return true', function(){
        let result = true;
        assert.equal(result,validEmailChecker('senghuotlay86@gmail.com'));
    });
});

describe('validateEmail',function(){
    it('validate email should return false', function(){
        let result = true;
        assert.equal(result,validEmailChecker('asdf'));
    });
});

describe('validateSubjectNumber',function(){
    it('validate subject number should return true', function(){
        let result = true;
        assert.equal(result,validSubjectNumber(1213));
    });
});
