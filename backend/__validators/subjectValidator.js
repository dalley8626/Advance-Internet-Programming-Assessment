//Server Side Validations
//email validation
let subjectNumberLengthChecker = (subjectNumber) => {
    if(!subjectNumber){
        return false;
    } else {
        if (!(subjectNumber.length == 5)) {
            return false;
        } else {
            return true;
        }
    }
};

let validSubjectNumber = (subjectNumber) => {
    if(!subjectNumber){
        return false;
    } else {
        const regExp = new RegExp(/^[0-9]+$/);
        return regExp.test(subjectNumber);
    }
};

const subjectNumberValidators = [
    {
        validator: subjectNumberLengthChecker,
        message: 'Subject Number must be 5 numbers'
    },
    {
        validator: validSubjectNumber,
        message: 'Must be a valid Subject Number, No Special Characters'
    }
];

//Username Validation
let subjectNameLengthChecker = (subjectName) => {
    if (!subjectName) {
        return false;
    } else {
        if (subjectName.length < 3 || subjectName.length > 100) {
            return false;
        } else {
            return true;
        }
    }
};

let validSubjectName = (subjectName) => {
    if (!subjectName) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
        return regExp.test(subjectName);
    }
};

const subjectNameValidators = [
    {
        validator: subjectNameLengthChecker,
        message: 'Subject name must be atleast 3 character or less than 100'
    },
    {
        validator: validSubjectName,
        message: 'Subject name is not valid, you can only include special character like . - and \' '
    }
];

//Password Validation
let descriptionLengthChecker = (description) => {
    if (!description) {
        return false;
    } else {
        if (description.length < 8 || description.length > 25000) {
            return false;
        } else {
            return true;
        }
    }
};

const descriptionValidators = [
    {
        validator: descriptionLengthChecker,
        message: 'Description must be atleast 8 character'
    }
];

const subjectValidator = module.exports = { subjectNameValidators, subjectNumberValidators, descriptionValidators }