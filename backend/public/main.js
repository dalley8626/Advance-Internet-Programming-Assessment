(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/__components/subject/dashboard/dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/__components/subject/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checked {\r\n    color: orange;\r\n}\r\n\r\n.stars-outer\r\n{\r\n  position: relative;\r\n  display: inline;\r\n}\r\n\r\n.stars-inner\r\n{\r\n  position: absolute;;\r\n  top:0;\r\n  left:0;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 0%;\r\n}\r\n\r\n.stars-outer::before {\r\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\r\n  font-family: FontAwesome;\r\n  font-weight: 900;\r\n  color: lightgrey;\r\n}\r\n\r\n.stars-inner::before {\r\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\r\n  font-family: FontAwesome;\r\n  font-weight: 900;\r\n  color:red;\r\n}\r\n\r\n.card {\r\n  margin:10px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/__components/subject/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/__components/subject/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Container -->\r\n<div class=\"container\">\r\n  <br>\r\n\r\n  <!-- Spinner -->\r\n  <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin-rotate\">\r\n    <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n  </ngx-spinner>\r\n\r\n  <!-- Search Bar -->\r\n  <h3>Search For Subjects</h3>\r\n  <div class=\"row\" style=\"margin-bottom: 10px;\">\r\n    <form [formGroup]=\"form\" style=\"width:100%;\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <select class=\"float-left col-md-3\" style=\"height:38px;\" name=\"searchType\" formControlName=\"searchType\">\r\n            <option value=\"\" disabled selected>Filter By</option>\r\n            <option value=\"subjectNumber\">Subject Number</option>\r\n            <option value=\"subjectName\">Subject Name</option>\r\n          </select>\r\n          <input style=\"width:100%;\" type=\"text\" class=\"form-control float-left col-md-8\" placeholder=\"Search subject...\"\r\n            name=\"subjectDetail\" formControlName=\"subjectDetail\">\r\n          <button class=\"btn btn-primary float-left\" type=\"button\" (click)=\"checkSubject()\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- Search Bar end-->\r\n\r\n  <!-- Search Results Start -->\r\n  <div *ngIf=\"displaySearch\">\r\n    <h3 class=\"text-success\"> {{searchedSubject.length}} Subjects Found </h3>\r\n    <div class=\"row\">\r\n      <div class=\"card shadow text-center\" style=\"width: 15rem;\" *ngFor=\"let subject of searchedSubject\">\r\n        <div class=\"card-header text-center\">\r\n          <h5>{{ subject.subjectNumber }}</h5>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">{{ subject.subjectName }}</p>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div>\r\n            <div class=\"stars-outer\">\r\n              <div class=\"stars-inner\" [style.width]=\"subject.percentageRating + '%'\">\r\n              </div>\r\n            </div>\r\n            <br />\r\n            {{subject.numberOfReview}} reviews\r\n            <br>\r\n            <button [routerLink]=\"['/subjects/detail/', subject._id]\" class=\"btn btn-primary\">Find Out More </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <h1 class=\"text-center text-danger\" *ngIf=\"doNotDisplaySearch\">No Results Found</h1>\r\n  <!-- Search Results End -->\r\n\r\n  <!-- Highly Rated Subject -->\r\n  <h3 style=\"margin-top: 50px;\">High Rated Subjects</h3>\r\n\r\n  <!-- Row -->\r\n  <div class=\"row\">\r\n\r\n    <!-- Show Each Subject  -->\r\n    <div class=\"card shadow text-center\" style=\"width: 15rem;\" *ngFor=\"let subject of subjects\">\r\n\r\n      <!-- Card Header -->\r\n      <div class=\"card-header text-center\">\r\n        <h5>{{ subject.subjectNumber }}</h5>\r\n      </div>\r\n\r\n      <!-- Card Body -->\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">\r\n          <p class=\"card-title text-center\" style=\"font-size:16px;\"><span class=\"badge badge-pill badge-danger\">Hot!</span>\r\n        </h5>\r\n        <p class=\"card-text\">{{ subject.subjectName }}</p>\r\n      </div>\r\n\r\n      <!-- Card Footer Start -->\r\n      <div class=\"card-footer\">\r\n        <div>\r\n          <div class=\"stars-outer\">\r\n            <div class=\"stars-inner\" [style.width]=\"subject.percentageRating + '%'\">\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Show Ratings -->\r\n          <br />\r\n          {{subject.numberOfReview}} reviews\r\n          <br>\r\n          <button [routerLink]=\"['/subjects/detail/', subject._id]\" class=\"btn btn-primary\">Find Out More </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <br><br>\r\n\r\n  <!-- Most Recent Ratings  -->\r\n  <h3>Most recent Ratings</h3>\r\n\r\n  <!-- Row -->\r\n  <div class=\"row\">\r\n\r\n    <!-- Recent Ratings -->\r\n    <div class=\"card shadow text-center\" style=\"width: 15rem;\" *ngFor=\"let rating of ratings\">\r\n      <!-- Card Header -->\r\n      <div class=\"card-header text-center\">\r\n        <h5>{{ rating.username }}</h5>\r\n      </div>\r\n\r\n      <!-- Card Body -->\r\n      <div class=\"card-body\">\r\n\r\n        <h5 class=\"card-title\">\r\n          <p class=\"card-title text-center\" style=\"font-size:16px;\"><span class=\"badge badge-pill badge-success\">Recent!</span>\r\n        </h5>\r\n\r\n        <div class=\"stars-outer\">\r\n          <div class=\"stars-inner\" [style.width]=\"rating.star*20 + '%'\">\r\n          </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <p class=\"card-text\">{{ rating.ratingDescription }}</p>\r\n        <p style=\"clear:left;float:bottom;font-size:10px\">\r\n          {{rating.created | date : \"d MMM, y h:mm:ss a\" : \"en-AU\"}}\r\n        </p>\r\n\r\n      </div>\r\n      <!-- footer start -->\r\n      <div class=\"card-footer\">\r\n        <button [routerLink]=\"['/subjects/detail/', rating.subjectID]\" class=\"btn btn-info\">Find Out More\r\n        </button>\r\n      </div>\r\n      <!-- footer end-->\r\n\r\n    </div>\r\n  </div>\r\n  <!-- Row End -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/__components/subject/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/__components/subject/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__services/subjectService/subject.service */ "./src/app/__services/subjectService/subject.service.ts");
/* harmony import */ var _services_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../__services/ratingService/rating.service */ "./src/app/__services/ratingService/rating.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //subject service
 //rating service
 //spinner service
 // modules for building forms
 //authentication service
var DashboardComponent = /** @class */ (function () {
    //constructor
    function DashboardComponent(subjectService, // instance of Subject Service
    ratingService, // instance of Rating Service
    spinner, // instance of Spinner service
    formBuilder, // instance of form Builder (used to make Reactive Forms)
    authService // instance of authentication service
    ) {
        this.subjectService = subjectService;
        this.ratingService = ratingService;
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.authService = authService; // instance of authentication service
        //subjects variable to load the Subject Details
        this.subjects = [];
        //ratings variable to load the Rating Details
        this.ratings = [];
        //variable to store the result (subjects) of the search
        this.searchedSubject = [];
    }
    //on initialization
    DashboardComponent.prototype.ngOnInit = function () {
        //creating a form
        this.createForm();
        //getting the highly rated subjects
        this.getSubjects();
        //getting the recent ratings
        this.getRatings();
    };
    //function to load highly rated subject
    DashboardComponent.prototype.getSubjects = function () {
        var _this = this;
        //display spinner
        this.spinner.show();
        //calling the subject service to get the subject data
        this.subjectService.getDashboardSubjects()
            .subscribe(function (result) { return _this.subjects = result['subjects'].slice(0, 4); });
        //timeour for the spinner
        setTimeout(function () {
            //hide spinner
            return _this.spinner.hide();
        }, 1000);
    };
    //function to load the recent ratings
    DashboardComponent.prototype.getRatings = function () {
        var _this = this;
        //calling the rating service to get the rating data
        this.ratingService.getDashboardRatings()
            .subscribe(function (result) { return _this.ratings = result['ratings'].slice(0, 4); });
    };
    //function to create a reactive form
    DashboardComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            searchType: [''],
            subjectDetail: [''],
        });
    };
    //function to search for the subject
    DashboardComponent.prototype.checkSubject = function () {
        var _this = this;
        //spinner display
        this.spinner.show();
        var subjectDetail = this.form.get('subjectDetail').value; //get data from the search bar
        var searchType = this.form.get('searchType').value; //get data from the search type beside the search bar
        //if the search type is subject number => search the database by subject Number
        if (searchType === "subjectNumber" && subjectDetail.length != 0) {
            this.authService.checkSubjectNumber(subjectDetail).subscribe(function (data) {
                //if the search is a success
                if (data.success) {
                    //if the result more than 0 data we display search results
                    if (data.subjects.length > 0) {
                        _this.searchedSubject = data.subjects;
                        _this.displaySearch = true;
                        _this.doNotDisplaySearch = false;
                    }
                    else {
                        _this.displaySearch = false;
                        _this.doNotDisplaySearch = true;
                    }
                }
                else {
                    _this.doNotDisplaySearch = true;
                    _this.displaySearch = false;
                }
            });
        }
        else if (searchType === "subjectName" && subjectDetail.length != 0) {
            this.authService.checkSubjectName(subjectDetail).subscribe(function (data) {
                //if the search is success
                if (data.success) {
                    //if there are more than 1 items found
                    if (data.subjects.length > 0) {
                        _this.searchedSubject = data.subjects;
                        _this.displaySearch = true;
                        _this.doNotDisplaySearch = false;
                    }
                    else {
                        _this.displaySearch = false;
                        _this.doNotDisplaySearch = true;
                    }
                }
                else {
                    _this.displaySearch = false;
                    _this.doNotDisplaySearch = true;
                }
            });
        }
        else {
            this.doNotDisplaySearch = true;
            this.displaySearch = false;
        }
        //timeout for the spinner
        setTimeout(function () {
            return _this.spinner.hide();
        }, 500);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/__components/subject/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/__components/subject/dashboard/dashboard.component.css")]
        })
        //This component is the dashboard which displays search bar, high rated subject and recent ratings. 
        ,
        __metadata("design:paramtypes", [_services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"],
            _services_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_2__["RatingService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] // instance of authentication service
        ])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/__components/subject/subject-add-review/subject-add-review.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add-review/subject-add-review.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\r\n\r\nfieldset{ margin: 0; padding: 0; border: 2px; }\r\n\r\nlabel{ margin: 0; padding: 0;}\r\n\r\nbody{ margin: 20px; }\r\n\r\nh1 { font-size: 1.5em; margin: 10px; }\r\n\r\n/* */\r\n\r\n.card\r\n{\r\n    margin:10px;;\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 12px;\r\n    min-width: 100px;\r\n}\r\n\r\n.close {\r\n  color: red; \r\n  opacity: 1;\r\n}\r\n\r\n.reviewComment\r\n{\r\n  margin-top:-20px;\r\n}\r\n\r\n.reviewComment button\r\n{\r\n  margin-left: 3px;\r\n}\r\n\r\n/****** Style Star Rating Widget *****/\r\n\r\n.rating {\r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.rating > input { display: none; }\r\n\r\n.rating > label:before {\r\n  margin: 5px;\r\n  font-size: 1.25em;\r\n  font-family: FontAwesome;\r\n  display: inline-block;\r\n  content: \"\\f005\";\r\n}\r\n\r\n.rating > .half:before {\r\n  content: \"\\f089\";\r\n  position: absolute;\r\n}\r\n\r\n.rating > label {\r\n  color: #ddd;\r\n  float: right;\r\n}\r\n\r\n/***** CSS Magic to Highlight Stars on Hover *****/\r\n\r\n.rating > input:checked ~ label, /* show gold star when clicked */\r\n.rating:not(:checked) > label:hover, /* hover current star */\r\n.rating:not(:checked) > label:hover ~ label { color: #FFD700;  }\r\n\r\n/* hover previous stars in list */\r\n\r\n.rating > input:checked + label:hover, /* hover current star when changing rating */\r\n.rating > input:checked ~ label:hover,\r\n.rating > label:hover ~ input:checked ~ label, /* lighten current selection */\r\n.rating > input:checked ~ label:hover ~ label { color: #FFED85;  }\r\n\r\n.stars-outer\r\n{\r\n  position: relative;\r\n  display: inline;\r\n}\r\n\r\n.stars-inner\r\n{\r\n  position: absolute;;\r\n  top:0;\r\n  left:0;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 0%;\r\n}\r\n\r\n.stars-outer::before {\r\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\r\n  font-family: FontAwesome;\r\n  font-weight: 900;\r\n  color: lightgrey;\r\n}\r\n\r\n.stars-inner::before {\r\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\r\n  font-family: FontAwesome;\r\n  font-weight: 900;\r\n  color: #FFD700;\r\n}\r\n\r\n.addRatingButton {\r\n  margin-top:15px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.subjectdetail{\r\n  min-height: 100px;\r\n}\r\n\r\n/*  Bars   */\r\n\r\nbody {\r\n  font-family: Arial;\r\n  margin: 0 auto; /* Center website */\r\n  max-width: 800px; /* Max width */\r\n  padding: 20px;\r\n}\r\n\r\n.heading {\r\n  font-size: 25px;\r\n  margin-right: 25px;\r\n}\r\n\r\n.fa {\r\n  font-size: 25px;\r\n}\r\n\r\n.checked {\r\n  color: orange;\r\n}\r\n\r\n/* Three column layout */\r\n\r\n.side {\r\n  float: left;\r\n  width: 15%;\r\n  margin-top:10px;\r\n}\r\n\r\n.middle {\r\n  margin-top:10px;\r\n  float: left;\r\n  width: 70%;\r\n}\r\n\r\n/* Place text to the right */\r\n\r\n.right {\r\n  text-align: right;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* The bar container */\r\n\r\n.bar-container {\r\n  width: 100%;\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n/* Individual bars */\r\n\r\n.bar-5 {height: 18px; background-color: #4CAF50;}\r\n\r\n.bar-4 {height: 18px; background-color: #2196F3;}\r\n\r\n.bar-3 {height: 18px; background-color: #00bcd4;}\r\n\r\n.bar-2 {height: 18px; background-color: #ff9800;}\r\n\r\n.bar-1 {height: 18px; background-color: #f44336;}\r\n\r\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\r\n\r\n@media (max-width: 400px) {\r\n  .side, .middle {\r\n      width: 100%;\r\n  }\r\n  .right {\r\n      display: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-add-review/subject-add-review.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add-review/subject-add-review.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin-rotate\" height=\"10000px;\">\r\n      <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n\r\n<div class=\"container\">\r\n  <!-- User rating chart  -->\r\n  <br />\r\n  <!-- Display all the Subject content  -->\r\n  <!-- Show all the reviews -->\r\n  <div class=\"col-md-12 card-deck\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card shadow subjectdetail\" *ngIf=\"subject\">\r\n        <h5 class=\"card-header\">{{subject.subjectNumber}} {{subject.subjectName}}</h5>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title text-justify\" style=\"font-size: 14px;\">{{subject.description}}</h5>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button *ngIf=\"user.usertype === 'admin'\" [routerLink]=\"['/subjects/edit', subject._id]\" class=\"btn btn-danger float-right btn-sm\">Edit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Something to work on start -->\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card shadow subjectdetail\" *ngIf=\"subject\">\r\n        <div class=\"card-header\">\r\n          <div style=\"top:15px;\">\r\n            <h5>\r\n              <small class=\"float-left\"> Average User Rating of {{averageRating}}&emsp;</small>\r\n            </h5>\r\n          </div>\r\n          <div class=\"stars-outer\">\r\n            <div class=\"stars-inner\" [style.width]=\"subject.percentageRating + '%'\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <!-- User Ratings  -->\r\n          <div class=\"row\">\r\n            <div class=\"side\">\r\n              <div>5 star</div>\r\n            </div>\r\n            <div class=\"middle\">\r\n              <div class=\"bar-container\">\r\n                <div class=\"bar-5\" [style.width]='fiveRatingPercentage'></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"side right\">\r\n              <div>\r\n                {{fiveRating}}\r\n              </div>\r\n            </div>\r\n            <div class=\"side\">\r\n              <div>4 star</div>\r\n            </div>\r\n            <div class=\"middle\">\r\n              <div class=\"bar-container\">\r\n                <div class=\"bar-4\" [style.width]='fourRatingPercentage'></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"side right\">\r\n              <div>{{fourRating}}\r\n              </div>\r\n            </div>\r\n            <div class=\"side\">\r\n              <div>3 star</div>\r\n            </div>\r\n            <div class=\"middle\">\r\n              <div class=\"bar-container\">\r\n                <div class=\"bar-3\" [style.width]='threeRatingPercentage'></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"side right\">\r\n              <div>\r\n                {{threeRating}}\r\n              </div>\r\n            </div>\r\n            <div class=\"side\">\r\n              <div>2 star</div>\r\n            </div>\r\n            <div class=\"middle\">\r\n              <div class=\"bar-container\">\r\n                <div class=\"bar-2\" [style.width]='twoRatingPercentage'></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"side right\">\r\n              <div>\r\n                {{twoRating}}\r\n              </div>\r\n            </div>\r\n            <div class=\"side\">\r\n              <div>1 star</div>\r\n            </div>\r\n            <div class=\"middle\">\r\n              <div class=\"bar-container\">\r\n                <div class=\"bar-1\" [style.width]='oneRatingPercentage'></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"side right\">\r\n              <div>\r\n                {{oneRating}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- User rating ends -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n\r\n<!-- Modal -->\r\n    <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\" id=\"modal-basic-title\">Confirmation</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <label for=\"dateOfBirth\">Are you sure you want to delete this rating?</label>\r\n          \r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.close('Cancel click')\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(deleteRating); modal.close('Save click');\">Delete</button>\r\n        </div>\r\n      </ng-template>\r\n      \r\n      <hr>\r\n      \r\n      <pre>{{closeResult}}</pre>\r\n\r\n    <!-- Rating Dialog -->\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-body\">\r\n\r\n          <div style=\"margin-left: auto; margin-right: auto;\">\r\n            <fieldset class=\"rating ml-auto\" style=\"zoom:2;\">\r\n              <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" (click)=\"updateStar(5)\" />\r\n              <label class=\"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\r\n              <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4.5\" (click)=\"updateStar(4.5)\" />\r\n              <label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\r\n              <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" (click)=\"updateStar(4)\" />\r\n              <label class=\"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\r\n              <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3.5\" (click)=\"updateStar(3.5)\" />\r\n              <label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\r\n              <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" (click)=\"updateStar(3)\" />\r\n              <label class=\"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\r\n              <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2.5\" (click)=\"updateStar(2.5)\" />\r\n              <label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\r\n              <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" (click)=\"updateStar(2)\" />\r\n              <label class=\"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\r\n              <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1.5\" (click)=\"updateStar(1.5)\" />\r\n              <label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\r\n              <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" (click)=\"updateStar(1)\" />\r\n              <label class=\"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\r\n              <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"0.5\" (click)=\"updateStar(0.5)\" />\r\n              <label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\r\n            </fieldset>\r\n          </div>\r\n          <textarea [disabled]=\"hasRated === true\" name=\"ratingDescription\" [(ngModel)]=\"rating.ratingDescription\"\r\n            class=\"form-control\" id=\"ratingDescription\" [placeholder]=\"hasRatedText\"></textarea>\r\n\r\n          <button [disabled]=\"hasRated === true\" class=\"btn btn-primary w-100 addRatingButton\" type=\"submit\" (click)=\"addRating();\">Add\r\n            Rating\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Review -->\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card shadow text-center\" *ngFor=\"let rating of ratings\">\r\n        <div *ngIf=\"rating.editFlag == false\">\r\n\r\n          <div class=\"card-body\">\r\n\r\n            <textarea class=\"form-control w-100\" [disabled]=\"true\">{{rating.ratingDescription}}</textarea>\r\n\r\n            <div class=\"stars-outer float-left\">\r\n              <div class=\"stars-inner\" [style.width]=\"(rating.star)*20 + '%'\"></div>\r\n            </div>\r\n            <p style=\"clear:left;float:left;\">\r\n              {{rating.username}}\r\n            </p>\r\n            <p style=\"clear:left;float:left;\">\r\n              written: {{rating.created | date : \"d MMM, y h:mm:ss a\" : \"en-AU\"}}\r\n            </p>\r\n            <div class=\"reviewComment float-right\" *ngIf=\"rating.userID == user.id\">\r\n              <button class=\"btn btn-danger\" title=\"delete rating\" (click)=\"open(content, rating)\">Delete\r\n              </button>\r\n              <button class=\"btn btn-primary\" title=\"edit rating\" (click)=\"edit(rating)\">Edit\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"rating.editFlag == true\">\r\n\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">User Name</label>\r\n              <input name=\"username\" [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\"\r\n                disabled>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"ratingDescription1\">Rating Description</label>\r\n              <textarea name=\"ratingDescription1\" [(ngModel)]=\"rating.ratingDescription\" class=\"form-control\" id=\"ratingDescription1\"\r\n                placeholder=\"Enter Rating Description\"></textarea>\r\n            </div>\r\n            <button class=\"btn btn-primary\" type=\"submit\" (click)='editRating(rating)'>Save</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-add-review/subject-add-review.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add-review/subject-add-review.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SubjectAddReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectAddReviewComponent", function() { return SubjectAddReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__models/rating */ "./src/app/__models/rating.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../__services/subjectService/subject.service */ "./src/app/__services/subjectService/subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../__services/ratingService/rating.service */ "./src/app/__services/ratingService/rating.service.ts");
/* harmony import */ var _models_subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../__models/subject */ "./src/app/__models/subject.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

 // Rating Model
 // FormBUilder for reactive form
 //Subject service
 //Activated Route to get URL; router for navigation purpose

 // Rating Service
 //Subject Model
 //Flash Message Service
 // Modal module
 // Spinner module (loading animation)
var SubjectAddReviewComponent = /** @class */ (function () {
    //Attributes End ====================================================
    //=====================================================================
    function SubjectAddReviewComponent(formBuilder, // instance of form builder
    subjectService, // instance of subject service
    activatedRoute, // instance of activated Route
    router, // instance of router
    location, // instance of location
    flashMessageService, // instance of flash service
    ratingService, // instance of rating service
    modalService, // instance of modal service
    spinner // instance of spinner service
    ) {
        this.formBuilder = formBuilder;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.flashMessageService = flashMessageService;
        this.ratingService = ratingService;
        this.modalService = modalService;
        this.spinner = spinner; // instance of spinner service
        //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
        //false means user can edit or click
        //true means user cannot
        this.processing = false;
        //variable to display or not display the edit form (This option is only accessible by "admin" users)
        this.loadEditForm = true;
        //variable to store the date
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        // Variables to store the number of users that rated the subject
        //for example: there is one star rating by 5 user; the oneRating will be equal to 5 
        this.oneRating = 0;
        this.twoRating = 0;
        this.threeRating = 0;
        this.fourRating = 0;
        this.fiveRating = 0;
        //variables to store the percentage that will define the length of the bar
        this.oneRatingPercentage = '0';
        this.twoRatingPercentage = '0';
        this.threeRatingPercentage = '0';
        this.fourRatingPercentage = '0';
        this.fiveRatingPercentage = '0';
        //if the user has already rated; the has Rated Text variable value is displayed
        this.hasRatedText = 'Write a Review';
        //initializing a new rating to add
        this.rating = new _models_rating__WEBPACK_IMPORTED_MODULE_1__["Rating"]();
        //initializing a new rating to delete
        this.deleteRating = new _models_rating__WEBPACK_IMPORTED_MODULE_1__["Rating"]();
        //creating a form
        this.createNewSubjectForm();
        //getting the user information from local storage
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    SubjectAddReviewComponent.prototype.ngOnInit = function () {
        //getting the details of the subejct
        this.getSingleSubject();
    };
    //Open the confirmation dialog
    SubjectAddReviewComponent.prototype.open = function (content, rating) {
        var _this = this;
        this.deleteRating = rating;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log("Closed with: " + result);
        }, function (reason) {
            console.log("Dismissed " + _this.getDismissReason(reason));
        });
    };
    //Close the confirmation Dialog with ESC 
    SubjectAddReviewComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalDismissReasons"].ESC) {
            console.log('by pressing ESC');
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalDismissReasons"].BACKDROP_CLICK) {
            console.log('by clicking on a backdrop');
        }
        else {
            console.log("with: " + reason);
        }
    };
    //function to get the details of the subject
    //the url consists of the id of the subject which is used to make request to the database
    SubjectAddReviewComponent.prototype.getSingleSubject = function () {
        var _this = this;
        this.spinner.show();
        //taking the subject Id from the url and storing in currentUrl varialbe
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(function (data) {
            //if error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'Subject Not found';
            }
            else {
                //storing the subject
                _this.subject = data.subject;
                //disabling the visibility of edit form
                _this.loadEditForm = false;
                //get all the ratings of that particular subject
                _this.getRatingsbySubjectID();
                //
                _this.ratingService.ratingAdded_Observable.subscribe(function (res) {
                    _this.clearRatingStar();
                    _this.getRatingsbySubjectID();
                });
            }
        });
        //spinner hide
        setTimeout(function () {
            return _this.spinner.hide();
        }, 1000);
    };
    // function for validation of subject Number
    SubjectAddReviewComponent.prototype.subjectNumberValidation = function (controls) {
        var regExp = new RegExp(/^[0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNumberValidation': true };
        }
    };
    //function for validation of subject Name
    SubjectAddReviewComponent.prototype.subjectNameValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNameValidation': true };
        }
    };
    //function to create a new form using form builder
    SubjectAddReviewComponent.prototype.createNewSubjectForm = function () {
        this.form = this.formBuilder.group({
            //subject Number field
            subjectNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    this.subjectNumberValidation
                ])],
            //subject Name field
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    this.subjectNameValidation
                ])],
            //description field
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                ])],
        });
    };
    //function to update the star
    SubjectAddReviewComponent.prototype.updateStar = function (star) {
        this.rating.star = star;
    };
    //function to go back
    SubjectAddReviewComponent.prototype.goBack = function () {
        this.location.back();
    };
    //function to get the rating according to the subject id
    SubjectAddReviewComponent.prototype.getRatingsbySubjectID = function () {
        var _this = this;
        this.ratingService.getRatingsbySubjectID(this.subject._id)
            .subscribe(function (result) {
            _this.ratings = result['data'];
            _this.getRatingPercentages(_this.ratings);
        });
    };
    //function to get the ratings percentage
    SubjectAddReviewComponent.prototype.getRatingPercentages = function (ratings) {
        var _this = this;
        this.ratings.forEach(function (element) {
            //adding to the respective variable upon user rating
            if (element.star === 5 || element.star === 4.5) {
                _this.fiveRating = _this.fiveRating + 1;
            }
            else if (element.star === 4 || element.star === 3.5) {
                _this.fourRating = _this.fourRating + 1;
            }
            else if (element.star === 3 || element.star === 2.5) {
                _this.threeRating = _this.threeRating + 1;
            }
            else if (element.star === 2 || element.star === 1.5) {
                _this.twoRating = _this.twoRating + 1;
            }
            else if (element.star === 1 || element.star === 0.5 || element.star === 0) {
                _this.oneRating = _this.oneRating + 1;
            }
            element.editFlag = false;
            // Check if there is any rating that has been rated by current user;
            if (element.username === _this.user.username) {
                _this.hasRated = true;
                _this.hasRatedText = 'You have already rated this subject.';
            }
        });
        //Calculating the rating percentage and storing them in the variable defined above
        //percentage of 5 ratings
        this.fiveRatingPercentage = Math.round(((this.fiveRating / this.subject.numberOfReview) * 100 / 10) * 10) + "%";
        //percentage of 4 ratings
        this.fourRatingPercentage = Math.round(((this.fourRating / this.subject.numberOfReview) * 100 / 10) * 10) + "%";
        //percentage of 3 ratings
        this.threeRatingPercentage = Math.round(((this.threeRating / this.subject.numberOfReview) * 100 / 10) * 10) + "%";
        //percentage of 2 ratings
        this.twoRatingPercentage = Math.round(((this.twoRating / this.subject.numberOfReview) * 100 / 10) * 10) + "%";
        //percentage of 1 ratings
        this.oneRatingPercentage = Math.round(((this.oneRating / this.subject.numberOfReview) * 100 / 10) * 10) + "%";
        //average rating
        this.averageRating = Math.round(this.subject.percentageRating * 5) / 100;
    };
    //function to add the rating to the subejct and save to the database
    SubjectAddReviewComponent.prototype.addRating = function () {
        var _this = this;
        //display the spinner
        this.spinner.show();
        if (this.rating.ratingDescription) {
            this.rating.subjectID = this.subject._id;
            this.rating.userID = this.user.id;
            this.rating.username = this.user.username;
            this.rating.created = Date();
            if (this.subject.numberOfReview && this.subject.percentageRating) {
                this.subject.numberOfReview = this.subject.numberOfReview + 1;
                this.subject.percentageRating =
                    (this.subject.percentageRating * (this.subject.numberOfReview - 1) + this.rating.star * 20) / this.subject.numberOfReview;
            }
            else {
                this.subject.numberOfReview = 1;
                this.subject.percentageRating = this.rating.star * 20;
            }
            this.subjectService.editSubject(this.subject).subscribe(function (res) {
                if (res['success'] === true) {
                    _this.subjectService.notifySubjectAddition();
                }
                else {
                    _this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
                }
            }, function (error) {
                _this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger', timeout: 1000 });
            });
            this.ratingService.addRating(this.rating).subscribe(function (res) {
                console.log('response is ', res);
                if (res['status'] === 'success') {
                    _this.ratingService.notifyRatingAddition();
                    _this.flashMessageService.show('Rating added', { cssClass: 'alert-success', timeout: 1000 });
                    _this.rating.ratingDescription = '';
                    _this.hasRated = false;
                }
                else {
                    _this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
                }
            }, function (error) {
                _this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger', timeout: 1000 });
            });
        }
        else {
            this.flashMessageService.show('Rating Description Required', { cssClass: 'alert-danger', timeout: 1000 });
        }
        setTimeout(function () {
            _this.spinner.hide();
        }, 1000);
    };
    //function to either display or hide the edit form
    SubjectAddReviewComponent.prototype.edit = function (rating) {
        rating.editFlag = true;
    };
    //function to edit the rating
    SubjectAddReviewComponent.prototype.editRating = function (rating) {
        var _this = this;
        this.ratingService.updateRating(rating).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.ratingService.notifyRatingAddition();
                rating.editFlag = false;
                _this.message = 'Rating edited.';
            }
            else {
                _this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
            }
        });
    };
    //function to delte the rating
    //we are making it asyncronous so as to update the subject detail
    SubjectAddReviewComponent.prototype.delete = function (rating) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.ratings = this.ratings.filter(function (r) { return r !== rating; });
                        if (!(this.subject.numberOfReview > 1)) return [3 /*break*/, 3];
                        _a = this.subject;
                        return [4 /*yield*/, this.subject.numberOfReview];
                    case 1:
                        _a.numberOfReview = (_c.sent()) - 1;
                        _b = this.subject;
                        return [4 /*yield*/, (this.subject.percentageRating * (this.subject.numberOfReview + 1) - (this.rating.star * 20))];
                    case 2:
                        _b.percentageRating =
                            (_c.sent()) / this.subject.numberOfReview;
                        return [3 /*break*/, 4];
                    case 3:
                        this.subject.numberOfReview = 0;
                        this.subject.percentageRating = 0;
                        _c.label = 4;
                    case 4:
                        this.ratingService.deleteRating(rating).subscribe(function (res) {
                            console.log('response is ', res);
                            if (res['status'] === 'success') {
                                _this.ratingService.notifyRatingAddition();
                                _this.flashMessageService.show('Rating deleted', { cssClass: 'alert-success', timeout: 1000 });
                                _this.hasRated = false;
                                _this.hasRatedText = 'Write a Review.';
                            }
                            else {
                                _this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
                            }
                        }, function (error) {
                            _this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger', timeout: 1000 });
                        });
                        this.subjectService.editSubject(this.subject).subscribe(function (res) {
                            if (res['success'] === true) {
                                _this.subjectService.notifySubjectAddition();
                            }
                            else {
                                _this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
                            }
                        }, function (error) {
                            _this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger', timeout: 1000 });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    //function to clear the rating
    SubjectAddReviewComponent.prototype.clearRatingStar = function () {
        this.fiveRating = 0;
        this.fourRating = 0;
        this.threeRating = 0;
        this.twoRating = 0;
        this.oneRating = 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_subject__WEBPACK_IMPORTED_MODULE_7__["Subject"])
    ], SubjectAddReviewComponent.prototype, "subject", void 0);
    SubjectAddReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-add-review',
            template: __webpack_require__(/*! ./subject-add-review.component.html */ "./src/app/__components/subject/subject-add-review/subject-add-review.component.html"),
            styles: [__webpack_require__(/*! ./subject-add-review.component.css */ "./src/app/__components/subject/subject-add-review/subject-add-review.component.css")]
        })
        //This class provides with the details of the subject
        //As well as enables user to add user rating or view all the user ratings
        ,
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"],
            _services_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_6__["RatingService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] // instance of spinner service
        ])
    ], SubjectAddReviewComponent);
    return SubjectAddReviewComponent;
}());



/***/ }),

/***/ "./src/app/__components/subject/subject-add/subject-add.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add/subject-add.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration\r\n{\r\n    font-family: 'Trebuchet MS';\r\n    top: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n}\r\n.subject-name\r\n{\r\n    background-color: #03a9f4 !important;\r\n}\r\n.card\r\n{\r\n    margin:auto;\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 12px;\r\n    max-width: 700px;\r\n}\r\n.card-body h1\r\n{\r\n    margin-bottom: 20px;\r\n    font-weight: 900;\r\n}\r\n.card .inputBox,\r\n.show-hide-message\r\n{\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n.card .inputBox input\r\n{\r\n    width:100%;\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border: none;\r\n    border-bottom: 1px solid grey ;\r\n    transition: border .1s ease-out;\r\n    outline: none;\r\n}\r\n.card .inputBox label\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 0;\r\n    pointer-events: none;\r\n    transition: .5s;\r\n    color: lightgrey;\r\n}\r\n.card .inputBox textarea:focus ~ label,\r\n.card .inputBox textarea:valid ~ label\r\n{\r\n    top: -28px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n}\r\n.card .inputBox input:focus ~ label,\r\n.card .inputBox input:valid ~ label\r\n{\r\n    top: -18px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n    \r\n}\r\n.card .inputBox input:focus,\r\n.card .inputBox input:valid,\r\n{\r\n    border-color: #03a9f4;\r\n}\r\n.policy\r\n{\r\n    font-size: 12px;\r\n}\r\n.help-block\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px 0;\r\n}\r\n.help-block p\r\n{\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 12px;\r\n}\r\n.show-hide-message\r\n{\r\n    margin: auto;\r\n    top:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n.buttons button\r\n{\r\n    margin:10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-add/subject-add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add/subject-add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\r\n <!-- New Subject Form -->\r\n <form [formGroup]=\"form\" (submit)=\"onSubjectSubmit()\">\r\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card registration\">\r\n\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center\">Add Subject</h1>\r\n\r\n        <!-- Message Display -->\r\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\r\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\r\n            {{ message }}\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Subject Number -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.subjectNumber.errors && form.controls.subjectNumber.dirty), 'has-success': !form.controls.subjectNumber.errors}\">\r\n          <input type=\"text\" name=\"subjectNumber\" required=\"\" autocomplete=\"off\" formControlName=\"subjectNumber\" />\r\n          <label>Subject Number</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.required && form.controls.subjectNumber.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectNumber.errors?.minlength || form.controls.subjectNumber.errors?.maxlength) && form.controls.subjectNumber.dirty\">\r\n              Must be 5 numbers\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.subjectNumberValidation && form.controls.subjectNumber.dirty && (form.controls.subjectNumber.value.length != 0)\">Invalid\r\n              Subject Number\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Subject Name -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.subjectName.errors && form.controls.subjectName.dirty), 'has-success': !form.controls.subjectName.errors}\">\r\n          <input type=\"text\" name=\"subjectName\" required=\"\" autocomplete=\"off\" formControlName=\"subjectName\" />\r\n          <label>Subject Name</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.required && form.controls.subjectName.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectName.errors?.minlength || form.controls.subjectName.errors?.maxlength) && form.controls.subjectName.dirty\">*Min\r\n              : 3, Max characters: 100\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.subjectNameValidation && form.controls.subjectName.dirty && form.controls.subjectName.value.length != 0\">Invalid\r\n              Subject Name, No special characters except . , - and '\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <br/>\r\n        <!-- Subject Description -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.description.errors && form.controls.description.dirty), 'has-success': !form.controls.description.errors}\">\r\n          <textarea class=\"form-control\" style=\"min-height:150px;\" name=\"description\" required=\"\" autocomplete=\"on\" formControlName=\"description\"></textarea>\r\n          <label style=\"left:10px;\">Write the Description of the Subject</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block-textarea\">\r\n            <!-- Required error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.description.errors?.required && form.controls.description.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.description.errors?.minlength || form.controls.description.errors?.maxlength) && form.controls.description.dirty\">*Minimum\r\n              characters: 8, Maximum characters: 25000\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"buttons\">\r\n            <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-primary\" name=\"\">Add Subject</button>\r\n            <button [routerLink]=\"['/subjects']\" style=\"float:right\" [disabled]=\"processing\" class=\"btn btn-danger\" type=\"button\" name=\"\">Go Back</button>    \r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-add/subject-add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add/subject-add.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubjectAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectAddComponent", function() { return SubjectAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../__services/subjectService/subject.service */ "./src/app/__services/subjectService/subject.service.ts");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // modules for building reactive form
 // subject service
 // authentication service
 // router module for navigation
var SubjectAddComponent = /** @class */ (function () {
    function SubjectAddComponent(formBuilder, // instance of formbuilder for reactive forms
    subjectService, // instance of subject service
    authService, // instance of authentication service
    router // instance of router module
    ) {
        this.formBuilder = formBuilder;
        this.subjectService = subjectService;
        this.authService = authService;
        this.router = router; // instance of router module
        //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
        //false means user can edit or click
        //true means user cannot
        this.processing = false;
        //initializing the constructor with a form
        this.createNewSubjectForm();
    }
    SubjectAddComponent.prototype.ngOnInit = function () {
    };
    //Adding the new Subject
    SubjectAddComponent.prototype.onSubjectSubmit = function () {
        var _this = this;
        //disabling the user to edit the form
        this.processing = true;
        //creating a new subject
        var subject = {
            subjectNumber: this.form.get('subjectNumber').value,
            subjectName: this.form.get('subjectName').value,
            description: this.form.get('description').value
        };
        //calling the subejct service to create a new subejct
        this.subjectService.newSubject(subject).subscribe(function (data) {
            //if the operation is not successful
            if (!data.success) {
                //displaying the error feedback
                _this.messageClass = 'alert alert-danger small';
                _this.message = data.message;
                //enabling the form
                _this.processing = false;
            }
            else {
                //displaying the success feedback
                _this.messageClass = 'alert alert-success small';
                _this.message = data.message;
                setTimeout(function () {
                    //enabling the form
                    _this.processing = false;
                    //navigate back to all the subjects
                    _this.router.navigate(['/subjects']);
                    //reseting the form
                    _this.form.reset();
                }, 2000);
            }
        });
    };
    //function for subject number validation
    SubjectAddComponent.prototype.subjectNumberValidation = function (controls) {
        var regExp = new RegExp(/^[0-9]+$/); // regex for only numbers
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNumberValidation': true };
        }
    };
    //function for subject name validation
    SubjectAddComponent.prototype.subjectNameValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i); //regex for proper names
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNameValidation': true };
        }
    };
    //function for creating a form
    SubjectAddComponent.prototype.createNewSubjectForm = function () {
        this.form = this.formBuilder.group({
            //subject Number field
            subjectNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    this.subjectNumberValidation // validation defined above
                ])],
            //subject name field
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    this.subjectNameValidation // validation defined above
                ])],
            //description field
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                ])],
        });
    };
    //function to revert and go back
    SubjectAddComponent.prototype.goBack = function () {
        window.location.reload();
    };
    SubjectAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-add',
            template: __webpack_require__(/*! ./subject-add.component.html */ "./src/app/__components/subject/subject-add/subject-add.component.html"),
            styles: [__webpack_require__(/*! ./subject-add.component.css */ "./src/app/__components/subject/subject-add/subject-add.component.css")]
        })
        //This class can only be accessed by "admin" users
        //Functionality of this class is to add the subjects and its details
        ,
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] // instance of router module
        ])
    ], SubjectAddComponent);
    return SubjectAddComponent;
}());



/***/ }),

/***/ "./src/app/__components/subject/subject-delete/subject-delete.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/__components/subject/subject-delete/subject-delete.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    top: 100px;\r\n    margin: auto;\r\n    max-width: 400px;\r\n}\r\n\r\n.card-body h1\r\n{\r\n    margin-bottom: 20px;\r\n    font-weight: 900;\r\n}\r\n\r\n.card .inputBox\r\n{\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n\r\n.help-block\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px 0;\r\n}\r\n\r\n.help-block p\r\n{\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.show-hide-message\r\n{\r\n    margin: auto;\r\n    top:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.buttons-position\r\n{\r\n    top: 100px;\r\n    margin: auto;\r\n    max-width: 400px;\r\n}\r\n\r\n.buttons-position button\r\n{\r\n    margin: 5px;\r\n    width: 46%;\r\n}"

/***/ }),

/***/ "./src/app/__components/subject/subject-delete/subject-delete.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/__components/subject/subject-delete/subject-delete.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Message Display -->\r\n  <br />\r\n  <div class=\"row show-hide-message\">\r\n    <div [ngClass]=\"messageClass\" style=\"width:100%;\" class=\"text-center\">\r\n      {{ message }}\r\n    </div>\r\n  </div>\r\n\r\n  <!-- New Subject Form -->\r\n  <div class=\"shadow mb-5 bg-white rounded card registration\">\r\n\r\n    <div class=\"card-header\">\r\n        <h3 class=\"text-center\">Confirmation</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      \r\n\r\n      <!-- Subject Number -->\r\n      <div class=\"inputBox\">\r\n        <p>Are you sure?</p>\r\n        <div class=\"buttons-position\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSubject()\">Yes</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"goBack()\">No</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/__components/subject/subject-delete/subject-delete.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/__components/subject/subject-delete/subject-delete.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SubjectDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDeleteComponent", function() { return SubjectDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../__services/subjectService/subject.service */ "./src/app/__services/subjectService/subject.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // subject service
 //location module
 // router module
var SubjectDeleteComponent = /** @class */ (function () {
    function SubjectDeleteComponent(subjectService, // instance of the subejct service
    location, // instance of the location service
    router, // instance of the router service
    activatedRoute // instance of the activated route
    ) {
        this.subjectService = subjectService;
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute; // instance of the activated route
        //variable to store boolean that represents if the subject is present in the database
        this.foundSubject = false;
    }
    SubjectDeleteComponent.prototype.ngOnInit = function () {
        //getting the current URL
        this.currentUrl = this.activatedRoute.snapshot.params;
        //confirming if the url contains any id
        if (!this.currentUrl.id) {
            //display message
            this.messageClass = 'alert-danger';
            this.message = 'No id provided';
        }
        else {
            this.foundSubject = true;
        }
    };
    //function to delete the subject
    SubjectDeleteComponent.prototype.deleteSubject = function () {
        var _this = this;
        this.subjectService.deleteSubject(this.currentUrl.id).subscribe(function (data) {
            //failure
            if (!data.success) {
                //failure message
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                //success message
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                //timeout and navigate back
                setTimeout(function () {
                    _this.router.navigate(['/subjects']);
                }, 2000);
            }
        });
    };
    //go back to the previous locaiton
    SubjectDeleteComponent.prototype.goBack = function () {
        this.location.back();
    };
    SubjectDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-delete',
            template: __webpack_require__(/*! ./subject-delete.component.html */ "./src/app/__components/subject/subject-delete/subject-delete.component.html"),
            styles: [__webpack_require__(/*! ./subject-delete.component.css */ "./src/app/__components/subject/subject-delete/subject-delete.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] // instance of the activated route
        ])
    ], SubjectDeleteComponent);
    return SubjectDeleteComponent;
}());



/***/ }),

/***/ "./src/app/__components/subject/subject-edit/subject-edit.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/__components/subject/subject-edit/subject-edit.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration\r\n{\r\n    font-family: 'Trebuchet MS';\r\n    top: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n}\r\n.subject-name\r\n{\r\n    background-color: #03a9f4 !important;\r\n}\r\n.card\r\n{\r\n    margin:auto;\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 12px;\r\n    max-width: 700px;\r\n}\r\n.card-body h1\r\n{\r\n    margin-bottom: 20px;\r\n    font-weight: 900;\r\n}\r\n.card .inputBox\r\n{\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n.show-hide-message\r\n{\r\n    width: 100%;\r\n    margin: 10px;\r\n}\r\n.card .inputBox input\r\n{\r\n    width:100%;\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border: none;\r\n    border-bottom: 1px solid grey ;\r\n    transition: border .1s ease-out;\r\n    outline: none;\r\n}\r\n.card .inputBox label\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 0;\r\n    pointer-events: none;\r\n    transition: .5s;\r\n    color: lightgrey;\r\n}\r\n.card .inputBox textarea:focus ~ label,\r\n.card .inputBox textarea:valid ~ label\r\n{\r\n    top: -28px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n}\r\n.card .inputBox input:focus ~ label,\r\n.card .inputBox input:valid ~ label\r\n{\r\n    top: -18px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n    \r\n}\r\n.card .inputBox input:focus,\r\n.card .inputBox input:valid,\r\n{\r\n    border-color: #03a9f4;\r\n}\r\n.policy\r\n{\r\n    font-size: 12px;\r\n}\r\n.help-block\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px 0;\r\n}\r\n.help-block p\r\n{\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 12px;\r\n}\r\n.show-hide-message\r\n{\r\n    margin: auto;\r\n    top:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n.buttons button\r\n{\r\n    margin:10px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-edit/subject-edit.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/__components/subject/subject-edit/subject-edit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Message Display -->\r\n  <br/>\r\n  <div class=\"row show-hide-message\" >\r\n      <div [ngClass]=\"messageClass\" style=\"width:100%;\" class=\"text-center\">\r\n        {{ message }}\r\n      </div>\r\n    </div>\r\n\r\n    <!-- New Subject Form -->\r\n    <form [formGroup]=\"form\" (submit)=\"updateSubjectSubmit()\" *ngIf=\"!loadEditForm\" >\r\n       <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card registration\">\r\n\r\n         <div class=\"card-body\">\r\n           <h1 class=\"text-center\">Edit Subject</h1>\r\n   \r\n           <!-- Subject Number -->\r\n           <div class=\"inputBox\">\r\n             <input type=\"text\" name=\"subjectNumber\" required=\"\" autocomplete=\"off\" formControlName=\"subjectNumber\" [(ngModel)]=\"subject.subjectNumber\"/>\r\n             <label>Subject Number</label>\r\n             <!-- Error Block -->\r\n             <div class=\"help-block\">\r\n               <!-- Required Error -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.required && (form.controls.subjectNumber.dirty || form.controls.subjectNumber.pristine)\">*This\r\n                 field is Required</p>\r\n               <!-- Minimum and Maximum length of data error  -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectNumber.errors?.minlength || form.controls.subjectNumber.errors?.maxlength) && (form.controls.subjectNumber.dirty || form.controls.subjectNumber.pristine)\">\r\n                 Must be 5 numbers\r\n               </p>\r\n               <!-- Invalid data error  -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.subjectNumberValidation && (form.controls.subjectNumber.dirty || form.controls.subjectNumber.pristine) && (form.controls.subjectNumber.value.length != 0)\">Invalid\r\n                 Subject Number\r\n               </p>\r\n             </div>\r\n           </div>\r\n   \r\n           <!-- Subject Name -->\r\n           <div class=\"inputBox\">\r\n             <input type=\"text\" name=\"subjectName\" required=\"\" autocomplete=\"off\" formControlName=\"subjectName\" [(ngModel)]=\"subject.subjectName\"/>\r\n             <label>Subject Name</label>\r\n             <!-- Error Block -->\r\n             <div class=\"help-block\">\r\n               <!-- Required Error -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.required && form.controls.subjectName.dirty\">*This\r\n                 field is Required</p>\r\n               <!-- Minimum and Maximum length of data error  -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectName.errors?.minlength || form.controls.subjectName.errors?.maxlength) && form.controls.subjectName.dirty\">*Min\r\n                 : 3, Max characters: 100\r\n               </p>\r\n               <!-- Invalid data error  -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.subjectNameValidation && form.controls.subjectName.dirty && form.controls.subjectName.value.length != 0\">Invalid\r\n                 Subject Name, No special characters except . , - and '\r\n               </p>\r\n             </div>\r\n           </div>\r\n           <br/>\r\n           <!-- Subject Description -->\r\n           <div class=\"inputBox\">\r\n             <textarea class=\"form-control\" style=\"min-height:150px;\" name=\"description\" required=\"\" autocomplete=\"on\" formControlName=\"description\" [(ngModel)]=\"subject.description\"></textarea>\r\n             <label style=\"left:10px;\">Write the Description of the Subject</label>\r\n             <!-- Error Block -->\r\n             <div class=\"help-block-textarea\">\r\n               <!-- Required error -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.description.errors?.required && form.controls.description.dirty\">*This\r\n                 field is Required</p>\r\n               <!-- Minimum and Maximum length of data error  -->\r\n               <p class=\"text-danger text-right\" *ngIf=\"(form.controls.description.errors?.minlength || form.controls.description.errors?.maxlength) && form.controls.description.dirty\">*Minimum\r\n                 characters: 8, Maximum characters: 25000\r\n               </p>\r\n             </div>\r\n             <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"descriptionMessage && !form.controls.description.errors?.validatedescriptions\">{{descriptionMessage}}</p>\r\n           </div>\r\n   \r\n           <div class=\"buttons\">\r\n               <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-primary\" name=\"\">Save Changes</button>\r\n               <button style=\"float:right\" [disabled]=\"processing\" class=\"btn btn-warning\" type=\"button\" name=\"\" (click)=\"goBack()\">Go Back</button>    \r\n               <button [routerLink]=\"['/subjects/delete/', subject._id]\" style=\"float:right\" type=\"submit\" class=\"btn btn-danger\" name=\"\">Delete Subject</button>\r\n            </div>\r\n           \r\n         </div>\r\n       </div>\r\n     </form>\r\n\r\n   </div>\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-edit/subject-edit.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/__components/subject/subject-edit/subject-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SubjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectEditComponent", function() { return SubjectEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../__services/subjectService/subject.service */ "./src/app/__services/subjectService/subject.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //required form modules
 // subject service
 // router module
 //location module
var SubjectEditComponent = /** @class */ (function () {
    function SubjectEditComponent(formBuilder, //instance of form builder
    subjectService, //instance of subject service
    activatedRoute, // instance of activated route
    router, // instance of router
    location //instance of location
    ) {
        this.formBuilder = formBuilder;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location; //instance of location
        //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
        //false means user can edit or click
        //true means user cannot
        this.processing = false;
        //edit form
        this.loadEditForm = true;
        //creating a edit form
        this.createNewSubjectForm();
    }
    SubjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the url
        this.currentUrl = this.activatedRoute.snapshot.params;
        //sending request to the server with the id retrieved from the url
        this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(function (data) {
            //failure
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = "Subject Not found";
            }
            else {
                _this.subject = data.subject;
                _this.loadEditForm = false;
            }
        });
    };
    // validation for Subject Number
    SubjectEditComponent.prototype.subjectNumberValidation = function (controls) {
        var regExp = new RegExp(/^[0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNumberValidation': true };
        }
    };
    // validation for Subject Name
    SubjectEditComponent.prototype.subjectNameValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNameValidation': true };
        }
    };
    // creating the edit form
    SubjectEditComponent.prototype.createNewSubjectForm = function () {
        this.form = this.formBuilder.group({
            //subject Number field
            subjectNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    this.subjectNumberValidation
                ])],
            // Subejct Name field
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    this.subjectNameValidation
                ])],
            // description field
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                ])],
        });
    };
    //function to go back to previous locaion
    SubjectEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    //function to update the subject (or edit)
    SubjectEditComponent.prototype.updateSubjectSubmit = function () {
        var _this = this;
        //disabling the form
        this.processing = true;
        //invoking the editSubject function in subejct service
        this.subjectService.editSubject(this.subject).subscribe(function (data) {
            //failure
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                //enabling the form
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.location.back();
                }, 2000);
            }
        });
    };
    SubjectEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-edit',
            template: __webpack_require__(/*! ./subject-edit.component.html */ "./src/app/__components/subject/subject-edit/subject-edit.component.html"),
            styles: [__webpack_require__(/*! ./subject-edit.component.css */ "./src/app/__components/subject/subject-edit/subject-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] //instance of location
        ])
    ], SubjectEditComponent);
    return SubjectEditComponent;
}());



/***/ }),

/***/ "./src/app/__components/subject/subject-feed/subject-feed.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/__components/subject/subject-feed/subject-feed.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration\r\n{\r\n    font-family: 'Trebuchet MS';\r\n    top: 10px;\r\n    margin: auto;\r\n    max-width: 700px;\r\n}\r\n.subject-name\r\n{\r\n    background-color: #03a9f4 !important;\r\n    min-height: 80px;\r\n}\r\n.card\r\n{\r\n    min-width: 245px;\r\n    max-width: 245px;\r\n    margin:10px;\r\n    font-family: 'Trebuchet MS';\r\n    font-size: 12px;\r\n    min-height: 300px;\r\n    max-height: 300px;\r\n    overflow: hidden;\r\n}\r\n.card-title\r\n{\r\n    font-weight: 900;\r\n}\r\n.card .inputBox,\r\n.show-hide-message\r\n{\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n.card .inputBox input\r\n{\r\n    width:100%;\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border: none;\r\n    border-bottom: 1px solid grey ;\r\n    transition: border .1s ease-out;\r\n    outline: none;\r\n}\r\n.card .inputBox label\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 0;\r\n    pointer-events: none;\r\n    transition: .5s;\r\n    color: lightgrey;\r\n}\r\n.card .inputBox textarea:focus ~ label,\r\n.card .inputBox textarea:valid ~ label\r\n{\r\n    top: -28px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n}\r\n.card .inputBox input:focus ~ label,\r\n.card .inputBox input:valid ~ label\r\n{\r\n    top: -18px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n    \r\n}\r\n.card .inputBox input:focus,\r\n.card .inputBox input:valid\r\n{\r\n    border-color: #03a9f4;\r\n}\r\n.policy\r\n{\r\n    font-size: 12px;\r\n}\r\n.help-block\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px 0;\r\n}\r\n.help-block p\r\n{\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 12px;\r\n}\r\n.show-hide-message\r\n{\r\n    margin: auto;\r\n    top:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n.buttons button\r\n{\r\n    margin:10px;\r\n}\r\n.design-display {\r\n    width: 15rem; \r\n    display: inline-block;\r\n    margin:5px;\r\n}\r\n.stars-outer\r\n{\r\n    position: relative;\r\n    display: inline;\r\n}\r\n.stars-inner\r\n{\r\n    position: absolute;;\r\n    top:0;\r\n    left:0;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 0%;\r\n}\r\n.stars-outer::before {\r\n    content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\r\n    font-family: FontAwesome;\r\n    font-weight: 900;\r\n    color: lightgrey;\r\n}\r\n.stars-inner::before {\r\n    content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\r\n    font-family: FontAwesome;\r\n    font-weight: 900;\r\n    color:red;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-feed/subject-feed.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/__components/subject/subject-feed/subject-feed.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n\r\n  <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin-rotate\">\r\n    <p style=\"font-size: 20px; color: white\">Loading... All the Subjects</p>\r\n  </ngx-spinner>\r\n  <h5 style=\"margin-left: 30px\">Subject Search Bar</h5>\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"input-group\">\r\n      <input #searchBox id=\"search-box\" style=\"width:80%; margin-left: 30px\" (keyup)=\"search(searchBox.value)\"/>\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-primary\" type=\"button\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"design-display\" *ngFor=\"let subject of subjects\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header text-center\">\r\n          <h5><code class=\"card-title\">{{ subject.subjectNumber }}</code> {{ subject.subjectName }}</h5>\r\n          <p class=\"card-title text-center\" style=\"font-size:16px;\"></p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          {{subject.description}}\r\n        </div>\r\n        <!-- footer start -->\r\n        <div class=\"card-footer\">\r\n          <div>\r\n\r\n            <div class=\"stars-outer\">\r\n              <div class=\"stars-inner\" [style.width]=\"subject.percentageRating + '%'\">\r\n\r\n              </div>\r\n            </div>\r\n            <!-- Ratings --><br/>\r\n            {{subject.numberOfReview}} reviews\r\n\r\n            <button [routerLink]=\"['/subjects/detail/', subject._id]\" class=\"btn btn-warning btn-sm float-right\">Find\r\n              out more\r\n            </button>\r\n          </div>\r\n          <!-- footer end-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-feed/subject-feed.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/__components/subject/subject-feed/subject-feed.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SubjectFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectFeedComponent", function() { return SubjectFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../__services/subjectService/subject.service */ "./src/app/__services/subjectService/subject.service.ts");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // subject service component
 // authentication service component
 //spinner service
var SubjectFeedComponent = /** @class */ (function () {
    function SubjectFeedComponent(subjectService, //subject service
    authService, // authentication service
    spinner // spinner service
    ) {
        this.subjectService = subjectService;
        this.authService = authService;
        this.spinner = spinner; // spinner service
    }
    SubjectFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting the profile of the user
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
        //getting all the subejcts form the database
        this.getAllSubjects();
    };
    //function to get all the subjects from the databse
    SubjectFeedComponent.prototype.getAllSubjects = function () {
        var _this = this;
        this.spinner.show();
        //invoking the function from subject service to retrieve all data
        this.subjectService.getAllSubjects().subscribe(function (data) {
            //assigning the subjects to the array variable defined in the class
            _this.subjectPosts = data.subjects;
            //looping through those data
            _this.subjectPosts.forEach(function (subjectPost) {
                //minifying the description of the subject
                if (subjectPost.description.length > 100) {
                    subjectPost.description = subjectPost.description.substring(0, 100) + '...';
                    subjectPost.isVisible = true;
                }
            });
            _this.spinner.hide();
            _this.subjects = _this.subjectPosts.slice();
        });
    };
    //function to search the subject with respect to subject name
    SubjectFeedComponent.prototype.search = function (value) {
        var _this = this;
        //emptying the array
        this.subjects = [];
        //looping through all the subjects
        this.subjectPosts.forEach(function (element, index) {
            if (element.subjectName.toUpperCase().indexOf(value.toUpperCase()) !== -1) {
                //adding into the array
                _this.subjects.push(element);
            }
            else { }
        });
    };
    SubjectFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-feed',
            template: __webpack_require__(/*! ./subject-feed.component.html */ "./src/app/__components/subject/subject-feed/subject-feed.component.html"),
            styles: [__webpack_require__(/*! ./subject-feed.component.css */ "./src/app/__components/subject/subject-feed/subject-feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] // spinner service
        ])
    ], SubjectFeedComponent);
    return SubjectFeedComponent;
}());



/***/ }),

/***/ "./src/app/__components/ui/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/__components/ui/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/__components/ui/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/__components/ui/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<nav class=\"navbar navbar-light bg-light mt-5\">\r\n    <div class=\"navbar-expand m-auto navbar-text\">\r\n      Made By : RDJ\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/__components/ui/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/__components/ui/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component displays footer to the root layout,
 * so that it can be displayed throughout the pages.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/__components/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/__components/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/__components/ui/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/__components/ui/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/__components/ui/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/__components/ui/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar  -->\r\n<nav *ngIf=\"!authService.notLoggedIn()\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\r\n  <!-- Logo -->\r\n  <a class=\"navbar-brand\" style=\"font-weight:900;\" href=\"#\">UTS-Subject-Review</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!-- Menus -->\r\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/subjects']\">AllSubjects</a>\r\n      </li>\r\n\r\n      <!-- Drop Down Menu -->\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          <i class=\"fa fa-user fixed-user\"></i>\r\n        </a>\r\n        <!-- Drop down list -->\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n\r\n          <!-- Add Subject Menu Available only for admin users -->\r\n          <a class=\"dropdown-item\" *ngIf=\"authService.checkUserType()\" [routerLink]=\"['/subjects/add']\">Add Subject</a>\r\n          \r\n          <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">Profile</a>\r\n          <a class=\"dropdown-item\" (click)=\"onClickLogout()\" href=\"#\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/__components/ui/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/__components/ui/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // authentication service
 //router module
 //flash message service
/**
 * This component displays header to the root layout,
 * so that it can be displayed throughout the pages.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, // instance of authentication service
    router, // instance of router module
    flashMessagesService // instance of flash service
    ) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService; // instance of flash service
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user')); // getting user information
    };
    //User logout function
    HeaderComponent.prototype.onClickLogout = function () {
        this.authService.logout();
        //display flash message of logging out
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-success small' });
        //navigate back to login page
        this.router.navigate(['/login']);
        return false;
    };
    //checking user type if it is admin to display required menu items
    HeaderComponent.prototype.checkUserType = function () {
        if (this.user.usertype == "admin") {
            return true;
        }
        return false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/__components/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/__components/ui/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] // instance of flash service
        ])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/__components/ui/layout/layout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/__components/ui/layout/layout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/__components/ui/layout/layout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/__components/ui/layout/layout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- All the contents here-->\r\n    <ng-content>\r\n      \r\n    </ng-content>\r\n"

/***/ }),

/***/ "./src/app/__components/ui/layout/layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/__components/ui/layout/layout.component.ts ***!
  \************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component provides frame for the application.
 */
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/__components/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/__components/ui/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/__components/user/login/logging/logging.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/__components/user/login/logging/logging.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login\r\n{\r\n    font-family: 'Trebuchet MS';\r\n}\r\n\r\n.card {\r\n    top: 100px;\r\n    margin: auto;\r\n    max-width: 400px;\r\n}\r\n\r\n.card-body h1\r\n{\r\n    margin-bottom: 20px;\r\n    font-weight: 900;\r\n}\r\n\r\n.card .inputBox\r\n{\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n\r\n.card .inputBox input\r\n{\r\n    width:100%;\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border: none;\r\n    border-bottom: 1px solid grey ;\r\n    transition: border .1s ease-out;\r\n    outline: none;\r\n}\r\n\r\n.card button\r\n{\r\n    width:100%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.card .inputBox label\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 0;\r\n    pointer-events: none;\r\n    transition: .5s;\r\n    color: lightgrey;\r\n}\r\n\r\n.card .inputBox input:focus ~ label,\r\n.card .inputBox input:valid ~ label\r\n{\r\n    top: -18px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n    \r\n}\r\n\r\n.card .inputBox input:focus,\r\n.card .inputBox input:valid\r\n{\r\n    border-color: #03a9f4;\r\n}\r\n\r\n.policy\r\n{\r\n    font-size: 12px;\r\n}\r\n\r\n.signup\r\n{\r\n    margin-top: 20%;\r\n}\r\n\r\n.help-block\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px 0;\r\n}\r\n\r\n.help-block p\r\n{\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.show-hide-message\r\n{\r\n    margin: auto;\r\n    top:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/__components/user/login/logging/logging.component.html":
/*!************************************************************************!*\
  !*** ./src/app/__components/user/login/logging/logging.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login Page -->\r\n<div class=\"login\">\r\n\r\n  <!--  -->\r\n  <form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center\">Let's get Started!</h1>\r\n        <br>\r\n        <br>\r\n        <!-- Message Display -->\r\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\r\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\r\n            {{ message }}\r\n          </div>\r\n        </div>\r\n\r\n        <!-- email -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error': form.controls.email.errors && form.controls.email.dirty, 'has-success': form.controls.email.valid && form.controls.email.dirty }\">\r\n          <input type=\"text\" name=\"email\" required=\"\" formControlName=\"email\" />\r\n          <label>Email</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">*This\r\n              field is Required</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Password -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n          <input type=\"password\" name=\"password\" required=\"\" formControlName=\"password\">\r\n          <label>Password</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n              <!-- Required Error -->\r\n              <p class=\"text-danger text-right\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">*This\r\n                field is Required</p>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Login Button -->\r\n        <button [disabled]=\"!form.valid\" class=\"btn btn-primary\" type=\"submit\" name=\"\">Login</button>\r\n        <p class=\"policy text-center\" style=\"margin-top:5px;\"><a href=\"#\">Forgot Password?</a></p>\r\n\r\n        <p class=\"signup text-center\">Don't Have an account? <a routerLink=\"/register\">Register here</a></p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/__components/user/login/logging/logging.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/__components/user/login/logging/logging.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingComponent", function() { return LoggingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // authentication service
 // router model
 //form modules to create reactive forms
/**
 * This Component consists of all the functions in relation to logging in to the system
 */
var LoggingComponent = /** @class */ (function () {
    function LoggingComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
        //false means user can edit or click
        //true means user cannot
        this.processing = false;
        this.createForm(); // creating the form at start
    }
    LoggingComponent.prototype.ngOnInit = function () {
    };
    //function to create form (reactive)
    LoggingComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    //function to disable the form when submitted once
    LoggingComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['password'].disable();
    };
    //function to enable the form when submission failed
    LoggingComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['password'].enable();
    };
    //On login function
    LoggingComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        //disabling the form
        this.processing = true;
        this.disableForm();
        //creating a new instance of the user
        var user = {
            email: this.form.get('email').value,
            password: this.form.get('password').value
        };
        //authenticating user
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                //displaying message
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                //enabling the form if login failed so the user can edit the wrong input
                _this.processing = false;
                _this.enableForm();
            }
        });
    };
    LoggingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logging',
            template: __webpack_require__(/*! ./logging.component.html */ "./src/app/__components/user/login/logging/logging.component.html"),
            styles: [__webpack_require__(/*! ./logging.component.css */ "./src/app/__components/user/login/logging/logging.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoggingComponent);
    return LoggingComponent;
}());



/***/ }),

/***/ "./src/app/__components/user/profile/profile.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/__components/user/profile/profile.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    top: 10px;\r\n    margin: auto;\r\n    max-width: 400px;\r\n}\r\n\r\n.card-body h1\r\n{\r\n    margin-bottom: 20px;\r\n    font-weight: 900;\r\n}\r\n\r\n.card .inputBox,\r\n.show-hide-message\r\n{\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n\r\n.card .inputBox input\r\n{\r\n    width:100%;\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border: none;\r\n    border-bottom: 1px solid grey ;\r\n    transition: border .1s ease-out;\r\n    outline: none;\r\n}\r\n\r\n.card button\r\n{\r\n    width:100%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.card .inputBox label\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 0;\r\n    pointer-events: none;\r\n    transition: .5s;\r\n    color: lightgrey;\r\n}\r\n\r\n.card .inputBox input:focus ~ label,\r\n.card .inputBox input:valid ~ label\r\n{\r\n    top: -18px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n    \r\n}\r\n\r\n.card .inputBox input:focus,\r\n.card .inputBox input:valid,\r\n{\r\n    border-color: #03a9f4;\r\n}\r\n\r\n.policy\r\n{\r\n    font-size: 12px;\r\n}\r\n\r\n.help-block\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px 0;\r\n}\r\n\r\n.help-block p\r\n{\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.show-hide-message\r\n{\r\n    margin: auto;\r\n    top:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/__components/user/profile/profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/__components/user/profile/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Message Display -->\r\n  <br />\r\n  <div *ngIf=\"loadEditForm\">\r\n    <div *ngIf=\"user\">\r\n      <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\r\n        <div class=\"card-header\">\r\n            <h1> Profile </h1>\r\n        </div>\r\n        <div class=\"card-body\">\r\n        <p>First Name : {{user.first_name}}</p>\r\n        <p>Last Name : {{user.last_name}} </p>\r\n        <p>Username : {{user.username}} </p>\r\n        <p>Email : {{user.email}} </p>\r\n        <p class=\"text-danger small\">Note: you need to update your password as well for security purpose</p>\r\n      </div>\r\n        <div class=\"card-footer\">\r\n        <button class=\"btn btn-sm btn-primary\" (click)=\"editUserForm()\">Edit</button>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- New Subject Form -->\r\n  <form [formGroup]=\"form\" (submit)=\"updateUserSubmit()\" *ngIf=\"!loadEditForm\">\r\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\r\n\r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center\">Edit Profile</h1>\r\n\r\n        <!-- Message Display -->\r\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\r\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\r\n            {{ message }}\r\n          </div>\r\n        </div>\r\n\r\n        <!-- First Name -->\r\n        <div class=\"inputBox\">\r\n          <input type=\"text\" name=\"first_name\" required=\"\" autocomplete=\"off\" formControlName=\"first_name\" [(ngModel)]=\"user.first_name\" />\r\n          <label>First name</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.first_name.errors?.required && form.controls.first_name.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.first_name.errors?.minlength || form.controls.first_name.errors?.maxlength) && form.controls.first_name.dirty\">*Minimum\r\n              characters: 2\r\n              Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.first_name.errors?.validateName && form.controls.first_name.dirty && (form.controls.first_name.value.length != 0)\">Invalid\r\n              Name\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Last Name -->\r\n        <div class=\"inputBox\">\r\n          <input type=\"text\" name=\"last_name\" required=\"\" autocomplete=\"off\" formControlName=\"last_name\" [(ngModel)]=\"user.last_name\" />\r\n          <label>Last name</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.last_name.errors?.required && form.controls.last_name.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.last_name.errors?.minlength || form.controls.last_name.errors?.maxlength) && form.controls.last_name.dirty && form.controls.last_name.value.length != 0\">*Minimum\r\n              characters: 2, Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.last_name.errors?.validateName && form.controls.last_name.dirty && form.controls.last_name.dirty && form.controls.last_name.value.length != 0\">Invalid\r\n              Name\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Email -->\r\n        <div class=\"inputBox\">\r\n          <input type=\"text\" name=\"email\" required=\"\" autocomplete=\"on\" formControlName=\"email\" [(ngModel)]=\"user.email\"\r\n            (blur)=\"checkEmail()\" />\r\n          <label>Email</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength) && form.controls.email.dirty && form.controls.email.touched && form.controls.email.value.length < 5\">*Minimum\r\n              characters: 5, Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.validateEmails && form.controls.email.dirty && form.controls.email.value.length >= 5\">Invalid\r\n              email\r\n            </p>\r\n          </div>\r\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"emailMessage && !form.controls.email.errors?.validateEmails\">{{emailMessage}}</p>\r\n        </div>\r\n\r\n        <!-- Username -->\r\n        <div class=\"inputBox\">\r\n          <input type=\"text\" name=\"username\" required=\"\" autocomplete=\"off\" formControlName=\"username\" [(ngModel)]=\"user.username\"\r\n            (blur)=\"checkUsername()\" />\r\n          <label>Username</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength) && form.controls.username.dirty && form.controls.username.value.length != 0\">*Minimum\r\n              characters: 5, Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty && form.controls.username.value.length != 0\">Username\r\n              must not have any special characters\r\n            </p>\r\n            <p class=\"text-danger text-right\" *ngIf=\"usernameMessage && !form.controls.username.errors?.validateUsername && !form.controls.username.errors?.minlength && !form.controls.username.errors?.maxlength\">{{usernameMessage}}</p>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Password -->\r\n        <div class=\"inputBox\">\r\n          <input type=\"password\" name=\"password\" required=\"\" formControlName=\"password\" autocomplete=\"off\" />\r\n          <label>Password</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This\r\n              field is required </p>\r\n\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength) && form.controls.password.dirty && form.controls.password.value.length <= 5\">*Minimum\r\n              characters: 5, Maximum characters: 50\r\n            </p>\r\n\r\n          </div>\r\n          <!-- Invalid data error  -->\r\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty && form.controls.password.value.length > 5\">Passord\r\n            must contain atleast 1 Uppercase, 1 lowercase, 1 number and 1 special character\r\n          </p>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- Confirm Password -->\r\n        <div class=\"inputBox\">\r\n          <input type=\"password\" name=\"confirm_password\" required=\"\" autocomplete=\"off\" formControlName=\"confirm_password\" />\r\n          <label>Confirm Password</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.confirm_password.errors?.required && form.controls.confirm_password.dirty\">This\r\n              field is required\r\n            </p>\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm_password.dirty\">Password\r\n              do not match</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"buttons\">\r\n          <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-primary\" name=\"\">Save Changes</button>\r\n          <button style=\"float:right\" [disabled]=\"processing\" class=\"btn btn-warning\" type=\"button\" name=\"\" (click)=\"goBack()\">Go\r\n            Back</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/__components/user/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/__components/user/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //authentication service
 // Module to get the URL
 // Location Module
 // Form Module
/**
 * This Component displays the user details and has functions to update/edit the profile of the user
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(formBuilder, activatedRoute, router, location, authService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.authService = authService;
        //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
        //false means user can edit or click
        //true means user cannot
        this.processing = false;
        //variable to store Boolean value to either display the edit form or not
        this.loadEditForm = true;
        this.createForm(); // create form at the start
    }
    //Initialization
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get profile
        this.authService.getProfile().subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = "User Not found";
            }
            else {
                //success
                _this.user = data.user;
            }
        });
    };
    //function to display edit user form
    ProfileComponent.prototype.editUserForm = function () {
        this.loadEditForm = false;
    };
    //function to create form
    ProfileComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
                    this.validateName
                ])],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
                    this.validateName
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
                    this.validateEmails
                ])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
                    this.validateUsername
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(80),
                    this.validatePassword
                ])],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, { validator: this.matchingPasswords('password', 'confirm_password') });
    };
    //function to go back
    ProfileComponent.prototype.goBack = function () {
        this.loadEditForm = true;
    };
    //function to update the user
    ProfileComponent.prototype.updateUserSubmit = function () {
        var _this = this;
        //disabling the form
        this.processing = true;
        //updating the user details
        this.authService.updateProfile(this.user).subscribe(function (data) {
            if (!data.success) {
                //failure
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                //success
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.location.back();
                }, 2000);
            }
        });
    };
    //validation for email
    ProfileComponent.prototype.validateEmails = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(String(controls.value))) {
            return null;
        }
        else {
            return { 'validateEmails': true };
        }
    };
    //validation for username
    ProfileComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    //validation for first name and last name
    ProfileComponent.prototype.validateName = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateName': true };
        }
    };
    //validation for password
    ProfileComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    //comparing two passord to match
    ProfileComponent.prototype.matchingPasswords = function (password, confirm_password) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm_password].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    //checking email if it is present or not
    ProfileComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        if (email.length != 0) {
            this.authService.checkEmail(email).subscribe(function (data) {
                if (!data.success) {
                    _this.emailValid = false;
                    _this.emailMessage = data.message;
                }
                else {
                    _this.emailValid = true;
                    _this.emailMessage = data.message;
                }
            });
        }
    };
    //checking username if it is available or not
    ProfileComponent.prototype.checkUsername = function () {
        var _this = this;
        var username = this.form.get('username').value;
        if (username.length != 0) {
            this.authService.checkUsername(username).subscribe(function (data) {
                if (!data.success) {
                    _this.usernameValid = false;
                    _this.usernameMessage = data.message;
                }
                else {
                    _this.usernameValid = true;
                    _this.usernameMessage = data.message;
                }
            });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/__components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/__components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/__components/user/register/registering/registering.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/__components/user/register/registering/registering.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration\r\n{\r\n    font-family: 'Trebuchet MS';\r\n}\r\n\r\n.card {\r\n    top: 10px;\r\n    margin: auto;\r\n    max-width: 400px;\r\n}\r\n\r\n.card-body h1\r\n{\r\n    margin-bottom: 20px;\r\n    font-weight: 900;\r\n}\r\n\r\n.card .inputBox,\r\n.show-hide-message\r\n{\r\n    position: relative;\r\n    margin: 10px;\r\n}\r\n\r\n.card .inputBox input\r\n{\r\n    width:100%;\r\n    padding: 10px 0;\r\n    margin-bottom: 20px;\r\n    border: none;\r\n    border-bottom: 1px solid grey ;\r\n    transition: border .1s ease-out;\r\n    outline: none;\r\n}\r\n\r\n.card button\r\n{\r\n    width:100%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.card .inputBox label\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 0;\r\n    pointer-events: none;\r\n    transition: .5s;\r\n    color: lightgrey;\r\n}\r\n\r\n.card .inputBox input:focus ~ label,\r\n.card .inputBox input:valid ~ label\r\n{\r\n    top: -18px;\r\n    left: 0;\r\n    color: #03a9f4;\r\n    font-size: 12px;\r\n    \r\n}\r\n\r\n.card .inputBox input:focus,\r\n.card .inputBox input:valid,\r\n{\r\n    border-color: #03a9f4;\r\n}\r\n\r\n.policy\r\n{\r\n    font-size: 12px;\r\n}\r\n\r\n.help-block\r\n{\r\n    position:absolute;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 10px 0;\r\n}\r\n\r\n.help-block p\r\n{\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.show-hide-message\r\n{\r\n    margin: auto;\r\n    top:0;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/__components/user/register/registering/registering.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/__components/user/register/registering/registering.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\r\n\r\n  <!-- Registration -->\r\n  <form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\r\n      \r\n      <div class=\"card-body\">\r\n        <h1 class=\"text-center\">Register</h1>\r\n\r\n        <!-- Message Display -->\r\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\r\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\r\n            {{ message }}\r\n          </div>\r\n        </div>\r\n\r\n        <!-- First Name -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.first_name.errors && form.controls.first_name.dirty), 'has-success': !form.controls.first_name.errors}\">\r\n          <input type=\"text\" name=\"first_name\" required=\"\" autocomplete=\"off\" formControlName=\"first_name\" />\r\n          <label>First name</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.first_name.errors?.required && form.controls.first_name.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.first_name.errors?.minlength || form.controls.first_name.errors?.maxlength) && form.controls.first_name.dirty\">*Minimum\r\n              characters: 2\r\n              Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.first_name.errors?.validateName && form.controls.first_name.dirty && (form.controls.first_name.value.length != 0)\">Invalid\r\n              Name\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Last Name -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.last_name.errors && form.controls.last_name.dirty), 'has-success': !form.controls.last_name.errors}\">\r\n          <input type=\"text\" name=\"last_name\" required=\"\" autocomplete=\"off\" formControlName=\"last_name\" />\r\n          <label>Last name</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.last_name.errors?.required && form.controls.last_name.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.last_name.errors?.minlength || form.controls.last_name.errors?.maxlength) && form.controls.last_name.dirty && form.controls.last_name.value.length != 0\">*Minimum\r\n              characters: 2, Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.last_name.errors?.validateName && form.controls.last_name.dirty && form.controls.last_name.dirty && form.controls.last_name.value.length != 0\">Invalid\r\n              Name\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Email -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\r\n          <input type=\"text\" name=\"email\" required=\"\" autocomplete=\"on\" formControlName=\"email\" (blur)=\"checkEmail()\"/>\r\n          <label>Email</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength) && form.controls.email.dirty && form.controls.email.touched && form.controls.email.value.length < 5\">*Minimum\r\n              characters: 5, Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.validateEmails && form.controls.email.dirty && form.controls.email.value.length >= 5\">Invalid\r\n              email\r\n            </p>\r\n          </div>\r\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"emailMessage && !form.controls.email.errors?.validateEmails\">{{emailMessage}}</p>\r\n        </div>\r\n\r\n        <!-- Username -->\r\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\r\n          <input type=\"text\" name=\"username\" required=\"\" autocomplete=\"off\" formControlName=\"username\" (blur)=\"checkUsername()\" />\r\n          <label>Username</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <!-- Required Error -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">*This\r\n              field is Required</p>\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength) && form.controls.username.dirty && form.controls.username.value.length != 0\">*Minimum\r\n              characters: 5, Maximum characters: 50\r\n            </p>\r\n            <!-- Invalid data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty && form.controls.username.value.length != 0\">Username\r\n              must not have any special characters\r\n            </p>\r\n            <p class=\"text-danger text-right\" *ngIf=\"usernameMessage && !form.controls.username.errors?.validateUsername && !form.controls.username.errors?.minlength && !form.controls.username.errors?.maxlength\">{{usernameMessage}}</p>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Password -->\r\n        <div class=\"inputBox\" [ngClass]=\"{ 'has-error': form.controls.password.errors && form.controls.password.dirty , 'has-success':!form.controls.password.errors }\">\r\n          <input type=\"password\" name=\"password\" required=\"\" formControlName=\"password\" autocomplete=\"off\" />\r\n          <label>Password</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This\r\n              field is required </p>\r\n\r\n            <!-- Minimum and Maximum length of data error  -->\r\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength) && form.controls.password.dirty && form.controls.password.value.length <= 8\">*Minimum\r\n              characters: 8<br> *Maximum characters: 50\r\n            </p>\r\n            \r\n          </div>\r\n          <!-- Invalid data error  -->\r\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty && form.controls.password.value.length > 8\">Passord\r\n              must contain atleast 1 Uppercase, 1 lowercase, 1 number and 1 special character\r\n            </p>\r\n        </div>\r\n\r\n\r\n        <!-- Confirm Password -->\r\n        <div class=\"inputBox\" [ngClass]=\"{ 'has-error': (form.controls.confirm_password.errors && form.controls.confirm_password.dirty) || (form.errors?.matchingPasswords && form.controls.confirm_password.dirty) , 'has-success':!form.controls.confirm_password.errors && !form.errors?.matchingPasswords}\">\r\n          <input type=\"password\" name=\"confirm_password\" required=\"\" autocomplete=\"off\" formControlName=\"confirm_password\" />\r\n          <label>Confirm Password</label>\r\n          <!-- Error Block -->\r\n          <div class=\"help-block\">\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.confirm_password.errors?.required && form.controls.confirm_password.dirty\">This\r\n              field is required\r\n            </p>\r\n            <p class=\"text-danger text-right\" *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm_password.dirty\">Password\r\n              do not match</p>\r\n          </div>\r\n        </div>\r\n\r\n        <p class=\"policy text-center\">By signing up, you are agreeing to the terms and policy of UTS subject review</p>\r\n        <button [disabled]=\"!form.valid || processing || !usernameValid || !emailValid\" class=\"btn btn-primary\" type=\"submit\" name=\"\">Register</button>\r\n\r\n        <!-- First Name -->\r\n        <p class=\"text-center\">Already Have an account? <a routerLink=\"/login\">Login here</a></p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/__components/user/register/registering/registering.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/__components/user/register/registering/registering.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegisteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteringComponent", function() { return RegisteringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //authentication service
 //router module
 //module for creating reactive forms
/**
 * This Component displays a register page and has functions for registering a user
 */
var RegisteringComponent = /** @class */ (function () {
    function RegisteringComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm(); //creating the form at startt
    }
    //function to create form
    RegisteringComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    this.validateName
                ])],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    this.validateName
                ])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    this.validateEmails
                ])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    this.validateUsername
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(80),
                    this.validatePassword
                ])],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: this.matchingPasswords('password', 'confirm_password') });
    };
    //Initialization
    RegisteringComponent.prototype.ngOnInit = function () {
    };
    //On Register
    RegisteringComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //disabling the form
        this.processing = true;
        //creating a instance of the user
        var user = {
            first_name: this.form.get('first_name').value,
            last_name: this.form.get('last_name').value,
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
        };
        //registering a new user
        this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.processing = false;
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
        });
    };
    //validation for emails
    RegisteringComponent.prototype.validateEmails = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(String(controls.value))) {
            return null;
        }
        else {
            return { 'validateEmails': true };
        }
    };
    //validation for username
    RegisteringComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    //validation for first name and last name
    RegisteringComponent.prototype.validateName = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateName': true };
        }
    };
    //validation for password
    RegisteringComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    //matching the passwords for confirmaiton
    RegisteringComponent.prototype.matchingPasswords = function (password, confirm_password) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm_password].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    //check the availability of the email
    RegisteringComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        if (email.length != 0) {
            this.authService.checkEmail(email).subscribe(function (data) {
                if (!data.success) {
                    _this.emailValid = false;
                    _this.emailMessage = data.message;
                }
                else {
                    _this.emailValid = true;
                    _this.emailMessage = data.message;
                }
            });
        }
    };
    //checks the availability of the username
    RegisteringComponent.prototype.checkUsername = function () {
        var _this = this;
        var username = this.form.get('username').value;
        if (username.length != 0) {
            this.authService.checkUsername(username).subscribe(function (data) {
                if (!data.success) {
                    _this.usernameValid = false;
                    _this.usernameMessage = data.message;
                }
                else {
                    _this.usernameValid = true;
                    _this.usernameMessage = data.message;
                }
            });
        }
    };
    RegisteringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registering',
            template: __webpack_require__(/*! ./registering.component.html */ "./src/app/__components/user/register/registering/registering.component.html"),
            styles: [__webpack_require__(/*! ./registering.component.css */ "./src/app/__components/user/register/registering/registering.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisteringComponent);
    return RegisteringComponent;
}());



/***/ }),

/***/ "./src/app/__guards/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/__guards/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, locatation) {
        this.authService = authService;
        this.router = router;
        this.locatation = locatation;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.notLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/__guards/notAuth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/__guards/notAuth.guard.ts ***!
  \*******************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = /** @class */ (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (!this.authService.notLoggedIn()) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    NotAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotAuthGuard);
    return NotAuthGuard;
}());



/***/ }),

/***/ "./src/app/__models/rating.ts":
/*!************************************!*\
  !*** ./src/app/__models/rating.ts ***!
  \************************************/
/*! exports provided: Rating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating; });
var Rating = /** @class */ (function () {
    function Rating() {
        this.editFlag = false;
        this._id = '';
        this.userID = '';
        this.ratingDescription = '';
        this.subjectID = '';
        this.editFlag = false;
        this.username = '';
        this.star = 0;
        this.created = '';
    }
    return Rating;
}());



/***/ }),

/***/ "./src/app/__models/subject.ts":
/*!*************************************!*\
  !*** ./src/app/__models/subject.ts ***!
  \*************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
var Subject = /** @class */ (function () {
    function Subject() {
        this._id = '';
        this.subjectNumber = '';
        this.subjectName = '';
        this.numberOfReview = 0;
        this.percentageRating = 0;
        this.description = '';
        this.ratingIDs = [];
    }
    return Subject;
}());



/***/ }),

/***/ "./src/app/__routes/app-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/__routes/app-routing.module.ts ***!
  \************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../__components/subject/subject-add/subject-add.component */ "./src/app/__components/subject/subject-add/subject-add.component.ts");
/* harmony import */ var _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../__components/subject/dashboard/dashboard.component */ "./src/app/__components/subject/dashboard/dashboard.component.ts");
/* harmony import */ var _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../__components/subject/subject-feed/subject-feed.component */ "./src/app/__components/subject/subject-feed/subject-feed.component.ts");
/* harmony import */ var _components_subject_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../__components/subject/subject-edit/subject-edit.component */ "./src/app/__components/subject/subject-edit/subject-edit.component.ts");
/* harmony import */ var _components_subject_subject_add_review_subject_add_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../__components/subject/subject-add-review/subject-add-review.component */ "./src/app/__components/subject/subject-add-review/subject-add-review.component.ts");
/* harmony import */ var _components_subject_subject_delete_subject_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../__components/subject/subject-delete/subject-delete.component */ "./src/app/__components/subject/subject-delete/subject-delete.component.ts");
/* harmony import */ var _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../__components/user/login/logging/logging.component */ "./src/app/__components/user/login/logging/logging.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../__components/user/profile/profile.component */ "./src/app/__components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_registering_registering_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../__components/user/register/registering/registering.component */ "./src/app/__components/user/register/registering/registering.component.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../__guards/notAuth.guard */ "./src/app/__guards/notAuth.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../__guards/auth.guard */ "./src/app/__guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//subject
// import { SubjectsComponent } from './../__components/subject/subjects/subjects.component';
// import { SubjectDetailComponent } from './../__components/subject/subject-detail/subject-detail.component';
// import { SubjectSearchComponent } from './../__components/subject/subject-search/subject-search.component';






//user



//Authentication guards


var routes = [
    { path: 'login', component: _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_8__["LoggingComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__["NotAuthGuard"]] },
    { path: 'register', component: _components_user_register_registering_registering_component__WEBPACK_IMPORTED_MODULE_10__["RegisteringComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__["NotAuthGuard"]] },
    { path: 'dashboard', component: _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects', component: _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_4__["SubjectFeedComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/add', component: _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_2__["SubjectAddComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/detail/:id', component: _components_subject_subject_add_review_subject_add_review_component__WEBPACK_IMPORTED_MODULE_6__["SubjectAddReviewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/edit/:id', component: _components_subject_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_5__["SubjectEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/delete/:id', component: _components_subject_subject_delete_subject_delete_component__WEBPACK_IMPORTED_MODULE_7__["SubjectDeleteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'dashboard', component: _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'profile', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '**', redirectTo: 'dashboard', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '**', redirectTo: 'login' } // The "Catch-All" Route and send to login
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/__services/authService/auth.service.ts":
/*!********************************************************!*\
  !*** ./src/app/__services/authService/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/ */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        //url for server
        this.domain = "http://localhost:8080";
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.domain + '/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/users/checkUsername/' + username).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/users/checkEmail/' + email).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.checkSubjectNumber = function (subjectNumber) {
        return this.http.get(this.domain + '/users/checkSubjectNumber/' + subjectNumber).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.checkSubjectName = function (subjectName) {
        return this.http.get(this.domain + '/users/checkSubjectName/' + subjectName).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.domain + '/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.updateProfile = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.domain + '/users/profile/updateProfile', user, { headers: headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.loadAuthenticationHeaders = function () {
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        this.headers.append('Authorization', this.authToken);
        this.headers.append('Content-Type', 'application/json');
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http
            .get(this.domain + '/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        //Local storage can only store string
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.notLoggedIn = function () {
        var isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        return isExpired;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.checkUserType = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        if (user.usertype == "admin") {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/__services/messageService/message.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/__services/messageService/message.service.ts ***!
  \**************************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages = [];
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/__services/ratingService/rating.service.ts":
/*!************************************************************!*\
  !*** ./src/app/__services/ratingService/rating.service.ts ***!
  \************************************************************/
/*! exports provided: RatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingService", function() { return RatingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _messageService_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../messageService/message.service */ "./src/app/__services/messageService/message.service.ts");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {Headers, RequestOptions} from '@angular/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
var RatingService = /** @class */ (function () {
    // options;
    function RatingService(http, authService, messageService) {
        this.http = http;
        this.authService = authService;
        this.messageService = messageService;
        this.ratingAdded_Observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.domain = this.authService.domain; // URL to web api
        this.ratingsUrl = this.domain + '/ratings'; // URL to web api
    }
    // createAuthenticationHeaders() {
    //   this.authService.loadToken();
    //   this.options = new RequestOptions({
    //     headers: new Headers({
    //       'Content-Type': 'application/json',
    //       'authorization': this.authService.authToken
    //     })
    //   });
    // }
    /** GET ratings from the server */
    RatingService.prototype.getRatings = function () {
        this.authService.loadAuthenticationHeaders();
        return this.http.get(this.ratingsUrl, { headers: this.authService.headers });
    };
    /** GET rating by id. Return `undefined` when id not found */
    RatingService.prototype.getRatingNo404 = function (_id) {
        var _this = this;
        this.authService.loadAuthenticationHeaders();
        var url = this.ratingsUrl + "/?id=" + _id;
        return this.http.get(url, { headers: this.authService.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ratings) { return ratings[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " rating id=" + _id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getRating _id=" + _id)));
    };
    /** GET ratings from the server */
    RatingService.prototype.getRatingsbySubjectID = function (subjectID) {
        this.authService.loadAuthenticationHeaders();
        var url = this.ratingsUrl + "/" + subjectID;
        return this.http.get(url, { headers: this.authService.headers });
    };
    /** GET rating by id. Will 404 if id not found */
    RatingService.prototype.getRating = function (_id) {
        var _this = this;
        var url = this.ratingsUrl + "/detail/" + _id;
        return this.http.get(url, { headers: this.authService.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched rating id=" + _id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getRating id=" + _id)));
    };
    //////// Save methods //////////
    /** POST: add a new rating to the server */
    RatingService.prototype.addRating = function (rating) {
        var _this = this;
        this.authService.loadAuthenticationHeaders();
        console.log(rating, { headers: this.authService.headers });
        return this.http.post(this.ratingsUrl + "/add/", rating, { headers: this.authService.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (rating) { return _this.log("added rating w/ id=" + rating._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addRating')));
    };
    /** DELETE: delete the rating from the server */
    RatingService.prototype.deleteRating = function (rating) {
        var _this = this;
        console.log(rating, { headers: this.authService.headers });
        var url = this.ratingsUrl + "/delete/" + rating._id;
        return this.http.delete(url, { headers: this.authService.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted rating _id=" + rating._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteRating')));
    };
    /** PUT: update the rating on the server */
    RatingService.prototype.updateRating = function (rating) {
        var _this = this;
        return this.http.put(this.ratingsUrl + "/update", rating, { headers: this.authService.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated rating _id=" + rating._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateRating')));
    };
    RatingService.prototype.notifyRatingAddition = function () {
        this.ratingAdded_Observable.next();
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    RatingService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a RatingService message with the MessageService */
    RatingService.prototype.log = function (message) {
        this.messageService.add("RatingService: " + message);
    };
    RatingService.prototype.getDashboardRatings = function () {
        console.log(this.authService.headers);
        this.authService.loadAuthenticationHeaders();
        return this.http.get(this.ratingsUrl + '/dashboard');
    };
    RatingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _authService_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _messageService_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], RatingService);
    return RatingService;
}());



/***/ }),

/***/ "./src/app/__services/subjectService/subject.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/__services/subjectService/subject.service.ts ***!
  \**************************************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var rxjs_operators___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/ */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubjectService = /** @class */ (function () {
    function SubjectService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.subjectAdded_Observable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.domain = this.authService.domain; // URL to web api
    }
    SubjectService.prototype.notifySubjectAddition = function () {
        this.authService.loadAuthenticationHeaders();
        this.subjectAdded_Observable.next();
    };
    SubjectService.prototype.newSubject = function (subject) {
        this.authService.loadAuthenticationHeaders();
        return this.http.post(this.domain + '/subjects/addSubject', subject, { headers: this.authService.headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.getAllSubjects = function () {
        this.authService.loadAuthenticationHeaders();
        return this.http.get(this.domain + '/subjects/allSubjects', { headers: this.authService.headers })
            .pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.getDashboardSubjects = function () {
        this.authService.loadAuthenticationHeaders();
        return this.http.get(this.domain + '/subjects/dashboard', { headers: this.authService.headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.getSingleSubject = function (id) {
        this.authService.loadAuthenticationHeaders();
        return this.http.get(this.domain + '/subjects/singleSubject/' + id, { headers: this.authService.headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.editSubject = function (subject) {
        this.authService.loadAuthenticationHeaders();
        return this.http.put(this.domain + '/subjects/updateSubject', subject, { headers: this.authService.headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.deleteSubject = function (id) {
        this.authService.loadAuthenticationHeaders();
        return this.http.delete(this.domain + '/subjects/deleteSubject/' + id, { headers: this.authService.headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.postReview = function (id, reviewComment, reviewRating) {
        this.authService.loadAuthenticationHeaders();
        var subjectData = {
            reviewComment: reviewComment,
            reviewRating: reviewRating
        };
        return this.http.post(this.domain + 'subjects/addreview/' + id, subjectData, { headers: this.authService.headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/__services/validateService/validate.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/__services/validateService/validate.service.ts ***!
  \****************************************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            console.log('no Error');
            return false;
        }
        else {
            console.log("Error");
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    background-image: url('login.jpg'); height: 100%; background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 1024px;\r\n}\r\n\r\nnobg{\r\n    background-color: grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- background image display according to the login status -->\r\n<div [ngClass]=\"{'bg': authService.notLoggedIn(), 'nobg': !authService.notLoggedIn()}\">\r\n\r\n\r\n    <app-layout>\r\n    <flash-messages style=\"position: fixed; width: 100%; z-index: 1;\"></flash-messages>\r\n    <app-header></app-header>\r\n    <!--TODO: Get this flash message going\r\n    <ng-flash-message></ng-flash-message> -->\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n    </app-layout>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'subject-review';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authService_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./__components/subject/dashboard/dashboard.component */ "./src/app/__components/subject/dashboard/dashboard.component.ts");
/* harmony import */ var _components_ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./__components/ui/layout/layout.component */ "./src/app/__components/ui/layout/layout.component.ts");
/* harmony import */ var _components_ui_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./__components/ui/header/header.component */ "./src/app/__components/ui/header/header.component.ts");
/* harmony import */ var _components_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./__components/ui/footer/footer.component */ "./src/app/__components/ui/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./__components/user/login/logging/logging.component */ "./src/app/__components/user/login/logging/logging.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./__components/user/profile/profile.component */ "./src/app/__components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_registering_registering_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./__components/user/register/registering/registering.component */ "./src/app/__components/user/register/registering/registering.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./__guards/auth.guard */ "./src/app/__guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./__guards/notAuth.guard */ "./src/app/__guards/notAuth.guard.ts");
/* harmony import */ var _services_validateService_validate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./__services/validateService/validate.service */ "./src/app/__services/validateService/validate.service.ts");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./__routes/app-routing.module */ "./src/app/__routes/app-routing.module.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./__components/subject/subject-feed/subject-feed.component */ "./src/app/__components/subject/subject-feed/subject-feed.component.ts");
/* harmony import */ var _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./__components/subject/subject-add/subject-add.component */ "./src/app/__components/subject/subject-add/subject-add.component.ts");
/* harmony import */ var _components_subject_subject_add_review_subject_add_review_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./__components/subject/subject-add-review/subject-add-review.component */ "./src/app/__components/subject/subject-add-review/subject-add-review.component.ts");
/* harmony import */ var _components_subject_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./__components/subject/subject-edit/subject-edit.component */ "./src/app/__components/subject/subject-edit/subject-edit.component.ts");
/* harmony import */ var _components_subject_subject_delete_subject_delete_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./__components/subject/subject-delete/subject-delete.component */ "./src/app/__components/subject/subject-delete/subject-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Forms Module for angular

//Http module required for server connection


//JWT

//importing Components

//subject
// import { SubjectsComponent } from './__components/subject/subjects/subjects.component';
// import { SubjectDetailComponent } from './__components/subject/subject-detail/subject-detail.component';
// import { SubjectSearchComponent } from './__components/subject/subject-search/subject-search.component';
// import { SubjectAddComponent } from './__components/subject/subject-add/subject-add.component';

//ui



//bootstrap

//user



//Importing Authentication Guard


//Importing Service


//Routing Module

//Reactive Forms

//importing flash message module


//Subject





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_user_register_registering_registering_component__WEBPACK_IMPORTED_MODULE_14__["RegisteringComponent"],
                _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_12__["LoggingComponent"],
                _components_ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _components_ui_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_23__["SubjectAddComponent"],
                // SubjectDetailComponent,
                // SubjectsComponent,
                // SubjectSearchComponent,
                _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_22__["SubjectFeedComponent"],
                _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_23__["SubjectAddComponent"],
                _components_subject_subject_add_review_subject_add_review_component__WEBPACK_IMPORTED_MODULE_24__["SubjectAddReviewComponent"],
                _components_subject_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_25__["SubjectEditComponent"],
                _components_subject_subject_delete_subject_delete_component__WEBPACK_IMPORTED_MODULE_26__["SubjectDeleteComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
            ],
            providers: [_services_validateService_validate_service__WEBPACK_IMPORTED_MODULE_17__["ValidateService"], _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_16__["NotAuthGuard"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_20__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dalley\Documents\Advance-Internet-Programming-Assessment\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map