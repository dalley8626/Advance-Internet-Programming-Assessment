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

module.exports = ".checked {\n    color: orange;\n}\n\n.stars-outer\n{\n  position: relative;\n  display: inline;\n}\n\n.stars-inner\n{\n  position: absolute;;\n  top:0;\n  left:0;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 0%;\n}\n\n.stars-outer::before {\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\n  font-family: FontAwesome;\n  font-weight: 900;\n  color: lightgrey;\n}\n\n.stars-inner::before {\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\n  font-family: FontAwesome;\n  font-weight: 900;\n  color:red;\n}\n"

/***/ }),

/***/ "./src/app/__components/subject/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/__components/subject/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br>\n  <h3>High Rated Subjects</h3>\n\n  <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin-rotate\">\n    <p style=\"font-size: 20px; color: white\">Loading...</p>\n  </ngx-spinner>\n  <div class=\"row\">\n    <div class=\"card text-center\" style=\"width: 15rem;\" *ngFor=\"let subject of subjects\">\n      <div class=\"card-header text-center\">\n        <h5>{{ subject.subjectNumber }}</h5>\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">\n          <p class=\"card-title text-center\" style=\"font-size:16px;\"><span\n            class=\"badge badge-pill badge-danger\">Hot!</span>\n        </h5>\n        <p class=\"card-text\">{{ subject.subjectName }}</p>\n\n      </div>\n      <!-- footer start -->\n      <div class=\"card-footer\">\n        <div>\n\n          <div class=\"stars-outer\">\n            <div class=\"stars-inner\" [style.width]=\"subject.percentageRating + '%'\">\n\n            </div>\n          </div>\n          <!-- Ratings --><br/>\n          {{subject.numberOfReview}} reviews <br>\n\n\n          <button [routerLink]=\"['/subjects/detail/', subject._id]\" class=\"btn btn-primary\">Rate Now!\n          </button>\n        </div>\n        <!-- footer end-->\n      </div>\n    </div>\n  </div>\n  <br><br>\n  <h3>Most recent Ratings</h3>\n\n</div>\n\n\n<!--\nCopyright 2017-2018 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n-->\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Subject } from '../../../__models/subject';
// import { SubjectService } from '../../../__services/subjectService/subject.service';
/**
 * This component displays subject components.
 */
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(subjectService) {
        this.subjectService = subjectService;
        this.subjects = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getSubjects();
    };
    DashboardComponent.prototype.getSubjects = function () {
        var _this = this;
        this.subjectService.getDashboardSubjects()
            .subscribe(function (result) { return _this.subjects = result['subjects'].slice(0, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/__components/subject/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/__components/subject/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"]])
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

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n\nfieldset{ margin: 0; padding: 0; border: 2px; }\n\nlabel{ margin: 0; padding: 0;}\n\nbody{ margin: 20px; }\n\nh1 { font-size: 1.5em; margin: 10px; }\n\n/* */\n\n.card\n{\n    margin:10px;;\n    font-family: 'Trebuchet MS';\n    font-size: 12px;\n    min-width: 400px;\n}\n\n.reviewComment\n{\n  margin-top:-20px;\n}\n\n.reviewComment button\n{\n  margin-left: 3px;\n}\n\n/****** Style Star Rating Widget *****/\n\n.rating {\n  border: none;\n  float: left;\n}\n\n.rating > input { display: none; }\n\n.rating > label:before {\n  margin: 5px;\n  font-size: 1.25em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\f005\";\n}\n\n.rating > .half:before {\n  content: \"\\f089\";\n  position: absolute;\n}\n\n.rating > label {\n  color: #ddd;\n  float: right;\n}\n\n/***** CSS Magic to Highlight Stars on Hover *****/\n\n.rating > input:checked ~ label, /* show gold star when clicked */\n.rating:not(:checked) > label:hover, /* hover current star */\n.rating:not(:checked) > label:hover ~ label { color: #FFD700;  }\n\n/* hover previous stars in list */\n\n.rating > input:checked + label:hover, /* hover current star when changing rating */\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label, /* lighten current selection */\n.rating > input:checked ~ label:hover ~ label { color: #FFED85;  }\n\n.stars-outer\n{\n  position: relative;\n  display: inline;\n  zoom: 2.0;\n}\n\n.stars-inner\n{\n  position: absolute;;\n  top:0;\n  left:0;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 0%;\n}\n\n.stars-outer::before {\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\n  font-family: FontAwesome;\n  font-weight: 900;\n  color: lightgrey;\n}\n\n.stars-inner::before {\n  content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\n  font-family: FontAwesome;\n  font-weight: 900;\n  color: #FFD700;\n}\n\n.addRatingButton {\n  margin-top:15px;\n  border-radius: 20px;\n}\n\n.subjectdetail{\n  min-height: 300px;\n}\n\n/*  Bars   */\n\nbody {\n  font-family: Arial;\n  margin: 0 auto; /* Center website */\n  max-width: 800px; /* Max width */\n  padding: 20px;\n}\n\n.heading {\n  font-size: 25px;\n  margin-right: 25px;\n}\n\n.fa {\n  font-size: 25px;\n}\n\n.checked {\n  color: orange;\n}\n\n/* Three column layout */\n\n.side {\n  float: left;\n  width: 15%;\n  margin-top:10px;\n}\n\n.middle {\n  margin-top:10px;\n  float: left;\n  width: 70%;\n}\n\n/* Place text to the right */\n\n.right {\n  text-align: right;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* The bar container */\n\n.bar-container {\n  width: 100%;\n  background-color: #f1f1f1;\n  text-align: center;\n  color: white;\n}\n\n/* Individual bars */\n\n.bar-5 {height: 18px; background-color: #4CAF50;}\n\n.bar-4 {height: 18px; background-color: #2196F3;}\n\n.bar-3 {height: 18px; background-color: #00bcd4;}\n\n.bar-2 {height: 18px; background-color: #ff9800;}\n\n.bar-1 {height: 18px; background-color: #f44336;}\n\n/* Responsive layout - make the columns stack on top of each other instead of next to each other */\n\n@media (max-width: 400px) {\n  .side, .middle {\n      width: 100%;\n  }\n  .right {\n      display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-add-review/subject-add-review.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add-review/subject-add-review.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Display all the Subject content  -->\n\n  <!-- User rating chart  -->\n\n  <br/>\n  <!-- Show all the reviews -->\n  <div class=\"col-md-12 card-deck\">\n    <div class=\"col-md-6\">\n      <div class=\"card shadow subjectdetail\" *ngIf=\"subject\">\n        <h5 class=\"card-header\">{{subject.subjectNumber}} {{subject.subjectName}}</h5>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{subject.description}}</h5>\n        </div>\n        <div class=\"card-footer\">\n          <button [routerLink]=\"['/subjects/edit', subject._id]\" class=\"btn btn-danger float-right btn-sm\">Edit</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Something to work on start -->\n    <div class=\"col-md-6\">\n      <div class=\"card shadow subjectdetail\" *ngIf=\"subject\">\n        <div class=\"card-header\">\n          <div style=\"top:15px;\">\n            <h5>\n              <small class=\"float-left\"> Average User Rating of {{averageRating}}&emsp;</small>\n            </h5>\n          </div>\n          <div class=\"stars-outer\" >\n            <div class=\"stars-inner\" [style.width]=\"subject.percentageRating + '%'\">\n            </div>\n          </div>\n\n        </div>\n        <div class=\"card-body\">\n\n          <!-- User Ratings  -->\n          <div class=\"row\">\n            <div class=\"side\">\n              <div>5 star</div>\n            </div>\n            <div class=\"middle\">\n              <div class=\"bar-container\">\n                <div class=\"bar-5\" [style.width]='fiveRatingPercentage'></div>\n              </div>\n            </div>\n            <div class=\"side right\">\n              <div>\n                {{fiveRating}}\n              </div>\n            </div>\n            <div class=\"side\">\n              <div>4 star</div>\n            </div>\n            <div class=\"middle\">\n              <div class=\"bar-container\">\n                <div class=\"bar-4\" [style.width]='fourRatingPercentage'></div>\n              </div>\n            </div>\n            <div class=\"side right\">\n              <div>{{fourRating}}\n              </div>\n            </div>\n            <div class=\"side\">\n              <div>3 star</div>\n            </div>\n            <div class=\"middle\">\n              <div class=\"bar-container\">\n                <div class=\"bar-3\" [style.width]='threeRatingPercentage'></div>\n              </div>\n            </div>\n            <div class=\"side right\">\n              <div>\n                {{threeRating}}\n              </div>\n            </div>\n            <div class=\"side\">\n              <div>2 star</div>\n            </div>\n            <div class=\"middle\">\n              <div class=\"bar-container\">\n                <div class=\"bar-2\" [style.width]='twoRatingPercentage'></div>\n              </div>\n            </div>\n            <div class=\"side right\">\n              <div>\n                {{twoRating}}\n              </div>\n            </div>\n            <div class=\"side\">\n              <div>1 star</div>\n            </div>\n            <div class=\"middle\">\n              <div class=\"bar-container\">\n                <div class=\"bar-1\" [style.width]='oneRatingPercentage'></div>\n              </div>\n            </div>\n            <div class=\"side right\">\n              <div>\n                {{oneRating}}\n              </div>\n            </div>\n          </div>\n          <!-- User rating ends -->\n\n        </div>\n      </div>\n    </div>\n    <!-- Something to work on end -->\n\n    <br/>\n\n    <!-- Card Body  -->\n    <div class=\"col-md-12\">\n      <div class=\"card shadow\">\n        <div class=\"card-body\">\n\n          <div style=\"margin-left: auto; margin-right: auto;\">\n            <fieldset class=\"rating ml-auto\" style=\"zoom:2;\">\n              <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" (click)=\"updateStar(5)\"/>\n              <label class=\"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n              <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4.5\" (click)=\"updateStar(4.5)\"/>\n              <label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\n              <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" (click)=\"updateStar(4)\"/>\n              <label class=\"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n              <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3.5\" (click)=\"updateStar(3.5)\"/>\n              <label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\n              <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" (click)=\"updateStar(3)\"/>\n              <label class=\"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n              <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2.5\" (click)=\"updateStar(2.5)\"/>\n              <label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\n              <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" (click)=\"updateStar(2)\"/>\n              <label class=\"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n              <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1.5\" (click)=\"updateStar(1.5)\"/>\n              <label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\n              <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" (click)=\"updateStar(1)\"/>\n              <label class=\"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n              <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"0.5\" (click)=\"updateStar(0.5)\"/>\n              <label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\n            </fieldset>\n          </div>\n          <textarea name=\"ratingDescription\" [(ngModel)]=\"rating.ratingDescription\" class=\"form-control\"\n                    id=\"ratingDescription\"\n                    placeholder=\"Write a Review\"></textarea>\n\n          <button class=\"btn btn-primary w-100 addRatingButton\" type=\"submit\" (click)='addRating();form.reset();'>Add\n            Rating\n          </button>\n\n        </div>\n      </div>\n    </div>\n\n    <!-- Review -->\n    <div class=\"col-md-12\">\n      <div class=\"card shadow text-center\" *ngFor=\"let rating of ratings\">\n        <div *ngIf=\"rating.editFlag == false\">\n\n          <div class=\"card-body\">\n\n            <textarea class=\"form-control w-100\" [disabled]=\"true\">{{rating.ratingDescription}}</textarea>\n\n            <div class=\"stars-outer float-left\">\n              <div class=\"stars-inner\" [style.width]=\"(rating.star)*20 + '%'\"></div>\n            </div>\n            <p style=\"clear:left;float:left;\">\n              {{rating.username}}\n            </p>\n            <div class=\"reviewComment float-right\" *ngIf=\"rating.userID == user.id\">\n              <button class=\"btn btn-danger\" title=\"delete rating\" (click)=\"delete(rating)\">Delete\n              </button>\n              <button class=\"btn btn-primary\" title=\"edit rating\" (click)=\"edit(rating)\">Edit\n              </button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"rating.editFlag == true\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"username\">User Name</label>\n              <input name=\"username\" [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\"\n                     disabled>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"ratingDescription1\">Rating Description</label>\n              <input name=\"ratingDescription1\" [(ngModel)]=\"rating.ratingDescription\" class=\"form-control\"\n                     id=\"ratingDescription1\"\n                     placeholder=\"Enter Rating Description\">\n            </div>\n            <button class=\"btn btn-primary\" type=\"submit\" (click)='editRating(rating)'>Edit Rating</button>\n          </form>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SubjectAddReviewComponent = /** @class */ (function () {
    function SubjectAddReviewComponent(formBuilder, subjectService, activatedRoute, router, location, flashMessageService, ratingService) {
        this.formBuilder = formBuilder;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.flashMessageService = flashMessageService;
        this.ratingService = ratingService;
        this.processing = false;
        this.loadEditForm = true;
        this.oneRating = 0;
        this.twoRating = 0;
        this.threeRating = 0;
        this.fourRating = 0;
        this.fiveRating = 0;
        this.rating = new _models_rating__WEBPACK_IMPORTED_MODULE_1__["Rating"]();
        this.createNewSubjectForm();
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    SubjectAddReviewComponent.prototype.ngOnInit = function () {
        this.getSingleSubject();
    };
    SubjectAddReviewComponent.prototype.getSingleSubject = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'Subject Not found';
            }
            else {
                _this.subject = data.subject;
                _this.loadEditForm = false;
                _this.getRatingsbySubjectID();
                _this.ratingService.ratingAdded_Observable.subscribe(function (res) {
                    _this.clearRatingStar();
                    _this.getRatingsbySubjectID();
                });
            }
        });
    };
    SubjectAddReviewComponent.prototype.subjectNumberValidation = function (controls) {
        var regExp = new RegExp(/^[0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNumberValidation': true };
        }
    };
    SubjectAddReviewComponent.prototype.subjectNameValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNameValidation': true };
        }
    };
    SubjectAddReviewComponent.prototype.createNewSubjectForm = function () {
        this.form = this.formBuilder.group({
            subjectNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    this.subjectNumberValidation
                ])],
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    this.subjectNameValidation
                ])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                ])],
        });
    };
    SubjectAddReviewComponent.prototype.updateStar = function (star) {
        this.rating.star = star;
    };
    SubjectAddReviewComponent.prototype.goBack = function () {
        this.location.back();
    };
    SubjectAddReviewComponent.prototype.getRatingsbySubjectID = function () {
        var _this = this;
        this.ratingService.getRatingsbySubjectID(this.subject._id)
            .subscribe(function (result) {
            _this.ratings = result['data'];
            // this.ratings.forEach(function (element) {
            //   element.editFlag = false;
            // });
            _this.ratings.forEach(function (element) {
                if (element.star == 5 || element.star == 4.5) {
                    _this.fiveRating = _this.fiveRating + 1;
                }
                else if (element.star == 4 || element.star == 3.5) {
                    _this.fourRating = _this.fourRating + 1;
                }
                else if (element.star == 3 || element.star == 2.5) {
                    _this.threeRating = _this.threeRating + 1;
                }
                else if (element.star == 2 || element.star == 1.5) {
                    _this.twoRating = _this.twoRating + 1;
                }
                else if (element.star == 1 || element.star == 0.5 || element.star == 0) {
                    _this.oneRating = _this.oneRating + 1;
                }
                element.editFlag = false;
            });
            _this.fiveRatingPercentage = Math.round(((_this.fiveRating / _this.subject.numberOfReview) * 100 / 10) * 10) + "%";
            _this.fourRatingPercentage = Math.round(((_this.fourRating / _this.subject.numberOfReview) * 100 / 10) * 10) + "%";
            _this.threeRatingPercentage = Math.round(((_this.threeRating / _this.subject.numberOfReview) * 100 / 10) * 10) + "%";
            _this.twoRatingPercentage = Math.round(((_this.twoRating / _this.subject.numberOfReview) * 100 / 10) * 10) + "%";
            _this.oneRatingPercentage = Math.round(((_this.oneRating / _this.subject.numberOfReview) * 100 / 10) * 10) + "%";
            _this.averageRating = Math.round(_this.subject.percentageRating * 5) / 100;
        });
    };
    SubjectAddReviewComponent.prototype.addRating = function () {
        var _this = this;
        if (this.rating.ratingDescription) {
            this.rating.subjectID = this.subject._id;
            this.rating.userID = this.user.id;
            this.rating.username = this.user.username;
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
                _this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger.', timeout: 1000 });
            });
            this.ratingService.addRating(this.rating).subscribe(function (res) {
                console.log('response is ', res);
                if (res['status'] === 'success') {
                    _this.ratingService.notifyRatingAddition();
                    _this.flashMessageService.show('Rating added', { cssClass: 'alert-success.', timeout: 1000 });
                }
                else {
                    _this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger.', timeout: 1000 });
                }
            }, function (error) {
                _this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger.', timeout: 1000 });
            });
        }
        else {
            this.flashMessageService.show('Rating Description Required', { cssClass: 'alert-danger.', timeout: 1000 });
        }
    };
    SubjectAddReviewComponent.prototype.edit = function (rating) {
        rating.editFlag = true;
    };
    SubjectAddReviewComponent.prototype.editRating = function (rating) {
        var _this = this;
        this.ratingService.updateRating(rating).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.ratingService.notifyRatingAddition();
                rating.editFlag = false;
                _this.message = 'Rating edited.';
            }
            else {
                _this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger.', timeout: 1000 });
            }
        });
    };
    SubjectAddReviewComponent.prototype.delete = function (rating) {
        this.ratings = this.ratings.filter(function (r) { return r !== rating; });
        this.ratingService.deleteRating(rating).subscribe();
    };
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
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"],
            _services_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_6__["RatingService"]])
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

module.exports = ".registration\n{\n    font-family: 'Trebuchet MS';\n    top: 10px;\n    margin: auto;\n    max-width: 700px;\n}\n.subject-name\n{\n    background-color: #03a9f4 !important;\n}\n.card\n{\n    margin:auto;\n    font-family: 'Trebuchet MS';\n    font-size: 12px;\n    max-width: 700px;\n}\n.card-body h1\n{\n    margin-bottom: 20px;\n    font-weight: 900;\n}\n.card .inputBox,\n.show-hide-message\n{\n    position: relative;\n    margin: 10px;\n}\n.card .inputBox input\n{\n    width:100%;\n    padding: 10px 0;\n    margin-bottom: 20px;\n    border: none;\n    border-bottom: 1px solid grey ;\n    transition: border .1s ease-out;\n    outline: none;\n}\n.card .inputBox label\n{\n    position:absolute;\n    top: 0;\n    left: 0;\n    padding: 10px 0;\n    pointer-events: none;\n    transition: .5s;\n    color: lightgrey;\n}\n.card .inputBox textarea:focus ~ label,\n.card .inputBox textarea:valid ~ label\n{\n    top: -28px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n}\n.card .inputBox input:focus ~ label,\n.card .inputBox input:valid ~ label\n{\n    top: -18px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n    \n}\n.card .inputBox input:focus,\n.card .inputBox input:valid,\n{\n    border-color: #03a9f4;\n}\n.policy\n{\n    font-size: 12px;\n}\n.help-block\n{\n    position:absolute;\n    top: 0;\n    right: 0;\n    padding: 10px 0;\n}\n.help-block p\n{\n    top: 0;\n    left: 0;\n    font-size: 12px;\n}\n.show-hide-message\n{\n    margin: auto;\n    top:0;\n    padding: 0;\n    font-size: 12px;\n}\n.buttons button\n{\n    margin:10px;\n}\n\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-add/subject-add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/__components/subject/subject-add/subject-add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n <!-- New Subject Form -->\n <form [formGroup]=\"form\" (submit)=\"onSubjectSubmit()\">\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card registration\">\n\n      <div class=\"card-body\">\n        <h1 class=\"text-center\">Add Subject</h1>\n\n        <!-- Message Display -->\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\n            {{ message }}\n          </div>\n        </div>\n\n        <!-- Subject Number -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.subjectNumber.errors && form.controls.subjectNumber.dirty), 'has-success': !form.controls.subjectNumber.errors}\">\n          <input type=\"text\" name=\"subjectNumber\" required=\"\" autocomplete=\"off\" formControlName=\"subjectNumber\" />\n          <label>Subject Number</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.required && form.controls.subjectNumber.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectNumber.errors?.minlength || form.controls.subjectNumber.errors?.maxlength) && form.controls.subjectNumber.dirty\">\n              Must be 5 numbers\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.subjectNumberValidation && form.controls.subjectNumber.dirty && (form.controls.subjectNumber.value.length != 0)\">Invalid\n              Subject Number\n            </p>\n          </div>\n        </div>\n\n        <!-- Subject Name -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.subjectName.errors && form.controls.subjectName.dirty), 'has-success': !form.controls.subjectName.errors}\">\n          <input type=\"text\" name=\"subjectName\" required=\"\" autocomplete=\"off\" formControlName=\"subjectName\" />\n          <label>Subject Name</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.required && form.controls.subjectName.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectName.errors?.minlength || form.controls.subjectName.errors?.maxlength) && form.controls.subjectName.dirty\">*Min\n              : 3, Max characters: 100\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.subjectNameValidation && form.controls.subjectName.dirty && form.controls.subjectName.value.length != 0\">Invalid\n              Subject Name, No special characters except . , - and '\n            </p>\n          </div>\n        </div>\n        <br/>\n        <!-- Subject Description -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.description.errors && form.controls.description.dirty), 'has-success': !form.controls.description.errors}\">\n          <textarea class=\"form-control\" style=\"min-height:150px;\" name=\"description\" required=\"\" autocomplete=\"on\" formControlName=\"description\"></textarea>\n          <label style=\"left:10px;\">Write the Description of the Subject</label>\n          <!-- Error Block -->\n          <div class=\"help-block-textarea\">\n            <!-- Required error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.description.errors?.required && form.controls.description.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.description.errors?.minlength || form.controls.description.errors?.maxlength) && form.controls.description.dirty\">*Minimum\n              characters: 8, Maximum characters: 25000\n            </p>\n          </div>\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"descriptionMessage && !form.controls.description.errors?.validatedescriptions\">{{descriptionMessage}}</p>\n        </div>\n\n        <div class=\"buttons\">\n            <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-primary\" name=\"\">Add Subject</button>\n            <button [routerLink]=\"['/subjects']\" style=\"float:right\" [disabled]=\"processing\" class=\"btn btn-danger\" type=\"button\" name=\"\">Go Back</button>    \n        </div>\n        \n      </div>\n    </div>\n  </form>\n</div>\n"

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





var SubjectAddComponent = /** @class */ (function () {
    function SubjectAddComponent(formBuilder, subjectService, authService, router) {
        this.formBuilder = formBuilder;
        this.subjectService = subjectService;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createNewSubjectForm();
    }
    SubjectAddComponent.prototype.ngOnInit = function () {
    };
    SubjectAddComponent.prototype.onSubjectSubmit = function () {
        var _this = this;
        this.processing = true;
        var subject = {
            subjectNumber: this.form.get('subjectNumber').value,
            subjectName: this.form.get('subjectName').value,
            description: this.form.get('description').value
        };
        this.subjectService.newSubject(subject).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger small';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success small';
                _this.message = data.message;
                setTimeout(function () {
                    _this.processing = false;
                    _this.router.navigate(['/subjects']);
                    _this.form.reset();
                }, 2000);
            }
        });
    };
    SubjectAddComponent.prototype.subjectNumberValidation = function (controls) {
        var regExp = new RegExp(/^[0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNumberValidation': true };
        }
    };
    SubjectAddComponent.prototype.subjectNameValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNameValidation': true };
        }
    };
    SubjectAddComponent.prototype.createNewSubjectForm = function () {
        this.form = this.formBuilder.group({
            subjectNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    this.subjectNumberValidation
                ])],
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    this.subjectNameValidation
                ])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                ])],
        });
    };
    SubjectAddComponent.prototype.goBack = function () {
        window.location.reload();
    };
    SubjectAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-add',
            template: __webpack_require__(/*! ./subject-add.component.html */ "./src/app/__components/subject/subject-add/subject-add.component.html"),
            styles: [__webpack_require__(/*! ./subject-add.component.css */ "./src/app/__components/subject/subject-add/subject-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = ".card {\n    top: 100px;\n    margin: auto;\n    max-width: 400px;\n}\n\n.card-body h1\n{\n    margin-bottom: 20px;\n    font-weight: 900;\n}\n\n.card .inputBox\n{\n    position: relative;\n    margin: 10px;\n}\n\n.help-block\n{\n    position:absolute;\n    top: 0;\n    right: 0;\n    padding: 10px 0;\n}\n\n.help-block p\n{\n    top: 0;\n    left: 0;\n    font-size: 12px;\n}\n\n.show-hide-message\n{\n    margin: auto;\n    top:0;\n    padding: 0;\n    font-size: 12px;\n}\n\n.buttons-position\n{\n    top: 100px;\n    margin: auto;\n    max-width: 400px;\n}\n\n.buttons-position button\n{\n    margin: 5px;\n    width: 46%;\n}"

/***/ }),

/***/ "./src/app/__components/subject/subject-delete/subject-delete.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/__components/subject/subject-delete/subject-delete.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Message Display -->\n  <br />\n  <div class=\"row show-hide-message\">\n    <div [ngClass]=\"messageClass\" style=\"width:100%;\" class=\"text-center\">\n      {{ message }}\n    </div>\n  </div>\n\n  <!-- New Subject Form -->\n  <div class=\"shadow mb-5 bg-white rounded card registration\">\n\n    <div class=\"card-header\">\n        <h3 class=\"text-center\">Confirmation</h3>\n    </div>\n    <div class=\"card-body\">\n      \n\n      <!-- Subject Number -->\n      <div class=\"inputBox\">\n        <p>Are you sure?</p>\n        <div class=\"buttons-position\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSubject()\">Yes</button>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"goBack()\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>"

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




var SubjectDeleteComponent = /** @class */ (function () {
    function SubjectDeleteComponent(subjectService, location, router, activatedRoute) {
        this.subjectService = subjectService;
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.foundSubject = false;
    }
    SubjectDeleteComponent.prototype.ngOnInit = function () {
        this.currentUrl = this.activatedRoute.snapshot.params;
        if (!this.currentUrl.id) {
            this.messageClass = 'alert-danger';
            this.message = 'No id provided';
        }
        else {
            this.foundSubject = true;
        }
    };
    SubjectDeleteComponent.prototype.deleteSubject = function () {
        var _this = this;
        this.subjectService.deleteSubject(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/subjects']);
                }, 2000);
            }
        });
    };
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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

module.exports = ".registration\n{\n    font-family: 'Trebuchet MS';\n    top: 10px;\n    margin: auto;\n    max-width: 700px;\n}\n.subject-name\n{\n    background-color: #03a9f4 !important;\n}\n.card\n{\n    margin:auto;\n    font-family: 'Trebuchet MS';\n    font-size: 12px;\n    max-width: 700px;\n}\n.card-body h1\n{\n    margin-bottom: 20px;\n    font-weight: 900;\n}\n.card .inputBox\n{\n    position: relative;\n    margin: 10px;\n}\n.show-hide-message\n{\n    width: 100%;\n    margin: 10px;\n}\n.card .inputBox input\n{\n    width:100%;\n    padding: 10px 0;\n    margin-bottom: 20px;\n    border: none;\n    border-bottom: 1px solid grey ;\n    transition: border .1s ease-out;\n    outline: none;\n}\n.card .inputBox label\n{\n    position:absolute;\n    top: 0;\n    left: 0;\n    padding: 10px 0;\n    pointer-events: none;\n    transition: .5s;\n    color: lightgrey;\n}\n.card .inputBox textarea:focus ~ label,\n.card .inputBox textarea:valid ~ label\n{\n    top: -28px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n}\n.card .inputBox input:focus ~ label,\n.card .inputBox input:valid ~ label\n{\n    top: -18px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n    \n}\n.card .inputBox input:focus,\n.card .inputBox input:valid,\n{\n    border-color: #03a9f4;\n}\n.policy\n{\n    font-size: 12px;\n}\n.help-block\n{\n    position:absolute;\n    top: 0;\n    right: 0;\n    padding: 10px 0;\n}\n.help-block p\n{\n    top: 0;\n    left: 0;\n    font-size: 12px;\n}\n.show-hide-message\n{\n    margin: auto;\n    top:0;\n    padding: 0;\n    font-size: 12px;\n}\n.buttons button\n{\n    margin:10px;\n}\n\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-edit/subject-edit.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/__components/subject/subject-edit/subject-edit.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Message Display -->\n  <br/>\n  <div class=\"row show-hide-message\" >\n      <div [ngClass]=\"messageClass\" style=\"width:100%;\" class=\"text-center\">\n        {{ message }}\n      </div>\n    </div>\n\n    <!-- New Subject Form -->\n    <form [formGroup]=\"form\" (submit)=\"updateSubjectSubmit()\" *ngIf=\"!loadEditForm\" >\n       <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card registration\">\n\n         <div class=\"card-body\">\n           <h1 class=\"text-center\">Edit Subject</h1>\n   \n           <!-- Subject Number -->\n           <div class=\"inputBox\">\n             <input type=\"text\" name=\"subjectNumber\" required=\"\" autocomplete=\"off\" formControlName=\"subjectNumber\" [(ngModel)]=\"subject.subjectNumber\"/>\n             <label>Subject Number</label>\n             <!-- Error Block -->\n             <div class=\"help-block\">\n               <!-- Required Error -->\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.required && (form.controls.subjectNumber.dirty || form.controls.subjectNumber.pristine)\">*This\n                 field is Required</p>\n               <!-- Minimum and Maximum length of data error  -->\n               <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectNumber.errors?.minlength || form.controls.subjectNumber.errors?.maxlength) && (form.controls.subjectNumber.dirty || form.controls.subjectNumber.pristine)\">\n                 Must be 5 numbers\n               </p>\n               <!-- Invalid data error  -->\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectNumber.errors?.subjectNumberValidation && (form.controls.subjectNumber.dirty || form.controls.subjectNumber.pristine) && (form.controls.subjectNumber.value.length != 0)\">Invalid\n                 Subject Number\n               </p>\n             </div>\n           </div>\n   \n           <!-- Subject Name -->\n           <div class=\"inputBox\">\n             <input type=\"text\" name=\"subjectName\" required=\"\" autocomplete=\"off\" formControlName=\"subjectName\" [(ngModel)]=\"subject.subjectName\"/>\n             <label>Subject Name</label>\n             <!-- Error Block -->\n             <div class=\"help-block\">\n               <!-- Required Error -->\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.required && form.controls.subjectName.dirty\">*This\n                 field is Required</p>\n               <!-- Minimum and Maximum length of data error  -->\n               <p class=\"text-danger text-right\" *ngIf=\"(form.controls.subjectName.errors?.minlength || form.controls.subjectName.errors?.maxlength) && form.controls.subjectName.dirty\">*Min\n                 : 3, Max characters: 100\n               </p>\n               <!-- Invalid data error  -->\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.subjectName.errors?.subjectNameValidation && form.controls.subjectName.dirty && form.controls.subjectName.value.length != 0\">Invalid\n                 Subject Name, No special characters except . , - and '\n               </p>\n             </div>\n           </div>\n           <br/>\n           <!-- Subject Description -->\n           <div class=\"inputBox\">\n             <textarea class=\"form-control\" style=\"min-height:150px;\" name=\"description\" required=\"\" autocomplete=\"on\" formControlName=\"description\" [(ngModel)]=\"subject.description\"></textarea>\n             <label style=\"left:10px;\">Write the Description of the Subject</label>\n             <!-- Error Block -->\n             <div class=\"help-block-textarea\">\n               <!-- Required error -->\n               <p class=\"text-danger text-right\" *ngIf=\"form.controls.description.errors?.required && form.controls.description.dirty\">*This\n                 field is Required</p>\n               <!-- Minimum and Maximum length of data error  -->\n               <p class=\"text-danger text-right\" *ngIf=\"(form.controls.description.errors?.minlength || form.controls.description.errors?.maxlength) && form.controls.description.dirty\">*Minimum\n                 characters: 8, Maximum characters: 25000\n               </p>\n             </div>\n             <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"descriptionMessage && !form.controls.description.errors?.validatedescriptions\">{{descriptionMessage}}</p>\n           </div>\n   \n           <div class=\"buttons\">\n               <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-primary\" name=\"\">Save Changes</button>\n               <button style=\"float:right\" [disabled]=\"processing\" class=\"btn btn-warning\" type=\"button\" name=\"\" (click)=\"goBack()\">Go Back</button>    \n               <button [routerLink]=\"['/subjects/delete/', subject._id]\" style=\"float:right\" type=\"submit\" class=\"btn btn-danger\" name=\"\">Delete Subject</button>\n            </div>\n           \n         </div>\n       </div>\n     </form>\n\n   </div>\n"

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





var SubjectEditComponent = /** @class */ (function () {
    function SubjectEditComponent(formBuilder, subjectService, activatedRoute, router, location) {
        this.formBuilder = formBuilder;
        this.subjectService = subjectService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.processing = false;
        this.loadEditForm = true;
        this.createNewSubjectForm();
    }
    SubjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(function (data) {
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
    SubjectEditComponent.prototype.subjectNumberValidation = function (controls) {
        var regExp = new RegExp(/^[0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNumberValidation': true };
        }
    };
    SubjectEditComponent.prototype.subjectNameValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'subjectNameValidation': true };
        }
    };
    SubjectEditComponent.prototype.createNewSubjectForm = function () {
        this.form = this.formBuilder.group({
            subjectNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    this.subjectNumberValidation
                ])],
            subjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    this.subjectNameValidation
                ])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                ])],
        });
    };
    SubjectEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    SubjectEditComponent.prototype.updateSubjectSubmit = function () {
        var _this = this;
        this.processing = true;
        this.subjectService.editSubject(this.subject).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
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
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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

module.exports = ".registration\n{\n    font-family: 'Trebuchet MS';\n    top: 10px;\n    margin: auto;\n    max-width: 700px;\n}\n.subject-name\n{\n    background-color: #03a9f4 !important;\n    min-height: 80px;\n}\n.card\n{\n    min-width: 245px;\n    max-width: 245px;\n    margin:10px;\n    font-family: 'Trebuchet MS';\n    font-size: 12px;\n    min-height: 300px;\n    max-height: 300px;\n    overflow: hidden;\n}\n.card-title\n{\n    font-weight: 900;\n}\n.card .inputBox,\n.show-hide-message\n{\n    position: relative;\n    margin: 10px;\n}\n.card .inputBox input\n{\n    width:100%;\n    padding: 10px 0;\n    margin-bottom: 20px;\n    border: none;\n    border-bottom: 1px solid grey ;\n    transition: border .1s ease-out;\n    outline: none;\n}\n.card .inputBox label\n{\n    position:absolute;\n    top: 0;\n    left: 0;\n    padding: 10px 0;\n    pointer-events: none;\n    transition: .5s;\n    color: lightgrey;\n}\n.card .inputBox textarea:focus ~ label,\n.card .inputBox textarea:valid ~ label\n{\n    top: -28px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n}\n.card .inputBox input:focus ~ label,\n.card .inputBox input:valid ~ label\n{\n    top: -18px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n    \n}\n.card .inputBox input:focus,\n.card .inputBox input:valid\n{\n    border-color: #03a9f4;\n}\n.policy\n{\n    font-size: 12px;\n}\n.help-block\n{\n    position:absolute;\n    top: 0;\n    right: 0;\n    padding: 10px 0;\n}\n.help-block p\n{\n    top: 0;\n    left: 0;\n    font-size: 12px;\n}\n.show-hide-message\n{\n    margin: auto;\n    top:0;\n    padding: 0;\n    font-size: 12px;\n}\n.buttons button\n{\n    margin:10px;\n}\n.design-display {\n    width: 15rem; \n    display: inline-block;\n    margin:5px;\n}\n.stars-outer\n{\n    position: relative;\n    display: inline;\n}\n.stars-inner\n{\n    position: absolute;;\n    top:0;\n    left:0;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 0%;\n}\n.stars-outer::before {\n    content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\n    font-family: FontAwesome;\n    font-weight: 900;\n    color: lightgrey;\n}\n.stars-inner::before {\n    content: \"\\f005 \\f005 \\f005 \\f005 \\f005\";\n    font-family: FontAwesome;\n    font-weight: 900;\n    color:red;\n}\n\n\n\n\n"

/***/ }),

/***/ "./src/app/__components/subject/subject-feed/subject-feed.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/__components/subject/subject-feed/subject-feed.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-spin-rotate\">\n    <p style=\"font-size: 20px; color: white\">Loading...</p>\n  </ngx-spinner>\n  <div class=\"col-sm-12\">\n    <div class=\"design-display\" *ngFor=\"let subject of subjectPosts\">\n      <div class=\"card shadow\">\n        <div class=\"card-header text-center\">\n          <h5><code class=\"card-title\">{{ subject.subjectNumber }}</code> {{ subject.subjectName }}</h5>\n          <p class=\"card-title text-center\" style=\"font-size:16px;\"></p>\n        </div>\n        <div class=\"card-body\">\n          {{subject.description}}\n        </div>\n        <!-- footer start -->\n        <div class=\"card-footer\">\n          <div>\n\n            <div class=\"stars-outer\">\n              <div class=\"stars-inner\" [style.width]=\"subject.percentageRating + '%'\">\n\n              </div>\n            </div>\n            <!-- Ratings --><br />\n            {{subject.numberOfReview}} reviews\n\n            <button [routerLink]=\"['/subjects/detail/', subject._id]\" class=\"btn btn-warning btn-sm float-right\">Find\n              out more</button>\n          </div>\n          <!-- footer end-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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




var SubjectFeedComponent = /** @class */ (function () {
    function SubjectFeedComponent(subjectService, authService, spinner) {
        this.subjectService = subjectService;
        this.authService = authService;
        this.spinner = spinner;
    }
    SubjectFeedComponent.prototype.getAllSubjects = function () {
        var _this = this;
        this.spinner.show();
        this.subjectService.getAllSubjects().subscribe(function (data) {
            _this.subjectPosts = data.subjects;
            _this.subjectPosts.forEach(function (subjectPost) {
                if (subjectPost.description.length > 100) {
                    subjectPost.description = subjectPost.description.substring(0, 100) + '...';
                }
            });
            _this.spinner.hide();
        });
    };
    SubjectFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
        this.getAllSubjects();
    };
    SubjectFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-feed',
            template: __webpack_require__(/*! ./subject-feed.component.html */ "./src/app/__components/subject/subject-feed/subject-feed.component.html"),
            styles: [__webpack_require__(/*! ./subject-feed.component.css */ "./src/app/__components/subject/subject-feed/subject-feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subjectService_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"],
            _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
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

module.exports = "<!-- \n<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n    <div class=\"navbar-expand m-auto navbar-text\">\n      Made By : RDJ\n    </div>\n</nav>\nfooter -->"

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

module.exports = "<!-- Navbar  -->\n<nav *ngIf=\"!authService.notLoggedIn()\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n  <a class=\"navbar-brand\" style=\"font-weight:900;\" href=\"#\">UTS-Subject-Review</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/subjects']\">Subjects</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          <i class=\"fa fa-user fixed-user\"></i>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/subjects/add']\">Add Subject</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">Profile</a>\n          <a class=\"dropdown-item\" (click)=\"onClickLogout()\" href=\"#\">Logout</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>"

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




/**
 * This component displays header to the root layout,
 * so that it can be displayed throughout the pages.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    //User logout function implemented here.
    HeaderComponent.prototype.onClickLogout = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-success small' });
        console.log('You are logged out');
        this.router.navigate(['/login']);
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
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
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

module.exports = "    <ng-content>\n      \n    </ng-content>\n"

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

module.exports = ".login\n{\n    font-family: 'Trebuchet MS';\n}\n\n.card {\n    top: 100px;\n    margin: auto;\n    max-width: 400px;\n}\n\n.card-body h1\n{\n    margin-bottom: 20px;\n    font-weight: 900;\n}\n\n.card .inputBox\n{\n    position: relative;\n    margin: 10px;\n}\n\n.card .inputBox input\n{\n    width:100%;\n    padding: 10px 0;\n    margin-bottom: 20px;\n    border: none;\n    border-bottom: 1px solid grey ;\n    transition: border .1s ease-out;\n    outline: none;\n}\n\n.card button\n{\n    width:100%;\n    border-radius: 20px;\n}\n\n.card .inputBox label\n{\n    position:absolute;\n    top: 0;\n    left: 0;\n    padding: 10px 0;\n    pointer-events: none;\n    transition: .5s;\n    color: lightgrey;\n}\n\n.card .inputBox input:focus ~ label,\n.card .inputBox input:valid ~ label\n{\n    top: -18px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n    \n}\n\n.card .inputBox input:focus,\n.card .inputBox input:valid\n{\n    border-color: #03a9f4;\n}\n\n.policy\n{\n    font-size: 12px;\n}\n\n.signup\n{\n    margin-top: 20%;\n}\n\n.help-block\n{\n    position:absolute;\n    top: 0;\n    right: 0;\n    padding: 10px 0;\n}\n\n.help-block p\n{\n    top: 0;\n    left: 0;\n    font-size: 12px;\n}\n\n.show-hide-message\n{\n    margin: auto;\n    top:0;\n    padding: 0;\n    font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/__components/user/login/logging/logging.component.html":
/*!************************************************************************!*\
  !*** ./src/app/__components/user/login/logging/logging.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center\">Let's get Started!</h1>\n        <br>\n        <br>\n        <!-- Message Display -->\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\n            {{ message }}\n          </div>\n        </div>\n\n        <!-- email -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error': form.controls.email.errors && form.controls.email.dirty, 'has-success': form.controls.email.valid && form.controls.email.dirty }\">\n          <input type=\"text\" name=\"email\" required=\"\" formControlName=\"email\" />\n          <label>Email</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">*This\n              field is Required</p>\n          </div>\n        </div>\n\n        <!-- Password -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\n          <input type=\"password\" name=\"password\" required=\"\" formControlName=\"password\">\n          <label>Password</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n              <!-- Required Error -->\n              <p class=\"text-danger text-right\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">*This\n                field is Required</p>\n            </div>\n        </div>\n\n        <!-- Login Button -->\n        <button [disabled]=\"!form.valid\" class=\"btn btn-primary\" type=\"submit\" name=\"\">Login</button>\n        <p class=\"policy text-center\" style=\"margin-top:5px;\"><a href=\"#\">Forgot Password?</a></p>\n\n        <p class=\"signup text-center\">Don't Have an account? <a routerLink=\"/register\">Register here</a></p>\n      </div>\n    </div>\n  </form>\n</div>"

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




var LoggingComponent = /** @class */ (function () {
    function LoggingComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    LoggingComponent.prototype.ngOnInit = function () {
    };
    LoggingComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoggingComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['password'].disable();
    };
    LoggingComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['password'].enable();
    };
    LoggingComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            email: this.form.get('email').value,
            password: this.form.get('password').value
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/subjects']);
            }
            else {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
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

module.exports = ".card {\n    top: 10px;\n    margin: auto;\n    max-width: 400px;\n}\n\n.card-body h1\n{\n    margin-bottom: 20px;\n    font-weight: 900;\n}\n\n.card .inputBox,\n.show-hide-message\n{\n    position: relative;\n    margin: 10px;\n}\n\n.card .inputBox input\n{\n    width:100%;\n    padding: 10px 0;\n    margin-bottom: 20px;\n    border: none;\n    border-bottom: 1px solid grey ;\n    transition: border .1s ease-out;\n    outline: none;\n}\n\n.card button\n{\n    width:100%;\n    border-radius: 20px;\n}\n\n.card .inputBox label\n{\n    position:absolute;\n    top: 0;\n    left: 0;\n    padding: 10px 0;\n    pointer-events: none;\n    transition: .5s;\n    color: lightgrey;\n}\n\n.card .inputBox input:focus ~ label,\n.card .inputBox input:valid ~ label\n{\n    top: -18px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n    \n}\n\n.card .inputBox input:focus,\n.card .inputBox input:valid,\n{\n    border-color: #03a9f4;\n}\n\n.policy\n{\n    font-size: 12px;\n}\n\n.help-block\n{\n    position:absolute;\n    top: 0;\n    right: 0;\n    padding: 10px 0;\n}\n\n.help-block p\n{\n    top: 0;\n    left: 0;\n    font-size: 12px;\n}\n\n.show-hide-message\n{\n    margin: auto;\n    top:0;\n    padding: 0;\n    font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/__components/user/profile/profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/__components/user/profile/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Message Display -->\n  <br />\n  <div class=\"row show-hide-message\">\n    <div [ngClass]=\"messageClass\" style=\"width:100%;\" class=\"text-center\">\n      {{ message }}\n    </div>\n  </div>\n\n  <div *ngIf=\"loadEditForm\">\n    <div *ngIf=\"user\">\n      \n      <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\n        \n        <div class=\"card-header\">\n            <h1> Profile </h1>\n        </div>\n        <div class=\"card-body\">\n        <p>First Name : {{user.f_name}}</p>\n        <p>Last Name : {{user.l_name}} </p>\n        <p>Username : {{user.username}} </p>\n        <p>Email : {{user.email}} </p>\n        <p class=\"text-danger small\">Note: you need to update your password as well for security purpose</p>\n      </div>\n        <div class=\"card-footer\">\n        <button class=\"btn btn-sm btn-primary\" (click)=\"editUserForm()\">Edit</button>\n      </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- New Subject Form -->\n  <form [formGroup]=\"form\" (submit)=\"updateUserSubmit()\" *ngIf=\"!loadEditForm\">\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\n\n      <div class=\"card-body\">\n        <h1 class=\"text-center\">Edit Profile</h1>\n\n        <!-- Message Display -->\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\n            {{ message }}\n          </div>\n        </div>\n\n        <!-- First Name -->\n        <div class=\"inputBox\">\n          <input type=\"text\" name=\"f_name\" required=\"\" autocomplete=\"off\" formControlName=\"f_name\" [(ngModel)]=\"user.f_name\" />\n          <label>First name</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.f_name.errors?.required && form.controls.f_name.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.f_name.errors?.minlength || form.controls.f_name.errors?.maxlength) && form.controls.f_name.dirty\">*Minimum\n              characters: 2\n              Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.f_name.errors?.validateName && form.controls.f_name.dirty && (form.controls.f_name.value.length != 0)\">Invalid\n              Name\n            </p>\n          </div>\n        </div>\n\n        <!-- Last Name -->\n        <div class=\"inputBox\">\n          <input type=\"text\" name=\"l_name\" required=\"\" autocomplete=\"off\" formControlName=\"l_name\" [(ngModel)]=\"user.l_name\" />\n          <label>Last name</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.l_name.errors?.required && form.controls.l_name.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.l_name.errors?.minlength || form.controls.l_name.errors?.maxlength) && form.controls.l_name.dirty && form.controls.l_name.value.length != 0\">*Minimum\n              characters: 2, Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.l_name.errors?.validateName && form.controls.l_name.dirty && form.controls.l_name.dirty && form.controls.l_name.value.length != 0\">Invalid\n              Name\n            </p>\n          </div>\n        </div>\n\n        <!-- Email -->\n        <div class=\"inputBox\">\n          <input type=\"text\" name=\"email\" required=\"\" autocomplete=\"on\" formControlName=\"email\" [(ngModel)]=\"user.email\"\n            (blur)=\"checkEmail()\" />\n          <label>Email</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength) && form.controls.email.dirty && form.controls.email.touched && form.controls.email.value.length < 5\">*Minimum\n              characters: 5, Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.validateEmails && form.controls.email.dirty && form.controls.email.value.length >= 5\">Invalid\n              email\n            </p>\n          </div>\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"emailMessage && !form.controls.email.errors?.validateEmails\">{{emailMessage}}</p>\n        </div>\n\n        <!-- Username -->\n        <div class=\"inputBox\">\n          <input type=\"text\" name=\"username\" required=\"\" autocomplete=\"off\" formControlName=\"username\" [(ngModel)]=\"user.username\"\n            (blur)=\"checkUsername()\" />\n          <label>Username</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength) && form.controls.username.dirty && form.controls.username.value.length != 0\">*Minimum\n              characters: 5, Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty && form.controls.username.value.length != 0\">Username\n              must not have any special characters\n            </p>\n            <p class=\"text-danger text-right\" *ngIf=\"usernameMessage && !form.controls.username.errors?.validateUsername && !form.controls.username.errors?.minlength && !form.controls.username.errors?.maxlength\">{{usernameMessage}}</p>\n\n\n          </div>\n        </div>\n\n        <!-- Password -->\n        <div class=\"inputBox\">\n          <input type=\"password\" name=\"password\" required=\"\" formControlName=\"password\" autocomplete=\"off\" />\n          <label>Password</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This\n              field is required </p>\n\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength) && form.controls.password.dirty && form.controls.password.value.length <= 5\">*Minimum\n              characters: 5, Maximum characters: 50\n            </p>\n\n          </div>\n          <!-- Invalid data error  -->\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty && form.controls.password.value.length > 5\">Passord\n            must contain atleast 1 Uppercase, 1 lowercase, 1 number and 1 special character\n          </p>\n\n        </div>\n\n\n        <!-- Confirm Password -->\n        <div class=\"inputBox\">\n          <input type=\"password\" name=\"confirm_password\" required=\"\" autocomplete=\"off\" formControlName=\"confirm_password\" />\n          <label>Confirm Password</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.confirm_password.errors?.required && form.controls.confirm_password.dirty\">This\n              field is required\n            </p>\n            <p class=\"text-danger text-right\" *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm_password.dirty\">Password\n              do not match</p>\n          </div>\n        </div>\n\n        <div class=\"buttons\">\n          <button [disabled]=\"processing || !form.valid\" type=\"submit\" class=\"btn btn-primary\" name=\"\">Save Changes</button>\n          <button style=\"float:right\" [disabled]=\"processing\" class=\"btn btn-warning\" type=\"button\" name=\"\" (click)=\"goBack()\">Go\n            Back</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

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





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(formBuilder, activatedRoute, router, location, authService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.authService = authService;
        this.processing = false;
        this.loadEditForm = true;
        this.createForm();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = "User Not found";
            }
            else {
                _this.user = data.user;
            }
        });
    };
    ProfileComponent.prototype.editUserForm = function () {
        this.loadEditForm = false;
    };
    ProfileComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            f_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
                    this.validateName
                ])],
            l_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
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
    ProfileComponent.prototype.goBack = function () {
        this.loadEditForm = true;
    };
    ProfileComponent.prototype.updateSubjectSubmit = function () {
        var _this = this;
        this.processing = true;
        this.authService.updateProfile(this.user).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
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
    ProfileComponent.prototype.validateEmails = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(String(controls.value))) {
            return null;
        }
        else {
            return { 'validateEmails': true };
        }
    };
    ProfileComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    ProfileComponent.prototype.validateName = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateName': true };
        }
    };
    ProfileComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
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

module.exports = ".registration\n{\n    font-family: 'Trebuchet MS';\n}\n\n.card {\n    top: 10px;\n    margin: auto;\n    max-width: 400px;\n}\n\n.card-body h1\n{\n    margin-bottom: 20px;\n    font-weight: 900;\n}\n\n.card .inputBox,\n.show-hide-message\n{\n    position: relative;\n    margin: 10px;\n}\n\n.card .inputBox input\n{\n    width:100%;\n    padding: 10px 0;\n    margin-bottom: 20px;\n    border: none;\n    border-bottom: 1px solid grey ;\n    transition: border .1s ease-out;\n    outline: none;\n}\n\n.card button\n{\n    width:100%;\n    border-radius: 20px;\n}\n\n.card .inputBox label\n{\n    position:absolute;\n    top: 0;\n    left: 0;\n    padding: 10px 0;\n    pointer-events: none;\n    transition: .5s;\n    color: lightgrey;\n}\n\n.card .inputBox input:focus ~ label,\n.card .inputBox input:valid ~ label\n{\n    top: -18px;\n    left: 0;\n    color: #03a9f4;\n    font-size: 12px;\n    \n}\n\n.card .inputBox input:focus,\n.card .inputBox input:valid,\n{\n    border-color: #03a9f4;\n}\n\n.policy\n{\n    font-size: 12px;\n}\n\n.help-block\n{\n    position:absolute;\n    top: 0;\n    right: 0;\n    padding: 10px 0;\n}\n\n.help-block p\n{\n    top: 0;\n    left: 0;\n    font-size: 12px;\n}\n\n.show-hide-message\n{\n    margin: auto;\n    top:0;\n    padding: 0;\n    font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/__components/user/register/registering/registering.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/__components/user/register/registering/registering.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\n\n  <!-- Registration -->\n  <form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\n    <div class=\"col-sm-10 shadow p-3 mb-5 bg-white rounded card\">\n      \n      <div class=\"card-body\">\n        <h1 class=\"text-center\">Register</h1>\n\n        <!-- Message Display -->\n        <div class=\"row show-hide-message\" style=\"width:100%;\">\n          <div [ngClass]=\"messageClass\" class=\"text-center\">\n            {{ message }}\n          </div>\n        </div>\n\n        <!-- First Name -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.f_name.errors && form.controls.f_name.dirty), 'has-success': !form.controls.f_name.errors}\">\n          <input type=\"text\" name=\"f_name\" required=\"\" autocomplete=\"off\" formControlName=\"f_name\" />\n          <label>First name</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.f_name.errors?.required && form.controls.f_name.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.f_name.errors?.minlength || form.controls.f_name.errors?.maxlength) && form.controls.f_name.dirty\">*Minimum\n              characters: 2\n              Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.f_name.errors?.validateName && form.controls.f_name.dirty && (form.controls.f_name.value.length != 0)\">Invalid\n              Name\n            </p>\n          </div>\n        </div>\n\n        <!-- Last Name -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.l_name.errors && form.controls.l_name.dirty), 'has-success': !form.controls.l_name.errors}\">\n          <input type=\"text\" name=\"l_name\" required=\"\" autocomplete=\"off\" formControlName=\"l_name\" />\n          <label>Last name</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.l_name.errors?.required && form.controls.l_name.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.l_name.errors?.minlength || form.controls.l_name.errors?.maxlength) && form.controls.l_name.dirty && form.controls.l_name.value.length != 0\">*Minimum\n              characters: 2, Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.l_name.errors?.validateName && form.controls.l_name.dirty && form.controls.l_name.dirty && form.controls.l_name.value.length != 0\">Invalid\n              Name\n            </p>\n          </div>\n        </div>\n\n        <!-- Email -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\n          <input type=\"text\" name=\"email\" required=\"\" autocomplete=\"on\" formControlName=\"email\" (blur)=\"checkEmail()\"/>\n          <label>Email</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength) && form.controls.email.dirty && form.controls.email.touched && form.controls.email.value.length < 5\">*Minimum\n              characters: 5, Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.email.errors?.validateEmails && form.controls.email.dirty && form.controls.email.value.length >= 5\">Invalid\n              email\n            </p>\n          </div>\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"emailMessage && !form.controls.email.errors?.validateEmails\">{{emailMessage}}</p>\n        </div>\n\n        <!-- Username -->\n        <div class=\"inputBox\" [ngClass]=\"{'has-error':(form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\n          <input type=\"text\" name=\"username\" required=\"\" autocomplete=\"off\" formControlName=\"username\" (blur)=\"checkUsername()\" />\n          <label>Username</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <!-- Required Error -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">*This\n              field is Required</p>\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength) && form.controls.username.dirty && form.controls.username.value.length != 0\">*Minimum\n              characters: 5, Maximum characters: 50\n            </p>\n            <!-- Invalid data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty && form.controls.username.value.length != 0\">Username\n              must not have any special characters\n            </p>\n            <p class=\"text-danger text-right\" *ngIf=\"usernameMessage && !form.controls.username.errors?.validateUsername && !form.controls.username.errors?.minlength && !form.controls.username.errors?.maxlength\">{{usernameMessage}}</p>\n\n\n          </div>\n        </div>\n\n        <!-- Password -->\n        <div class=\"inputBox\" [ngClass]=\"{ 'has-error': form.controls.password.errors && form.controls.password.dirty , 'has-success':!form.controls.password.errors }\">\n          <input type=\"password\" name=\"password\" required=\"\" formControlName=\"password\" autocomplete=\"off\" />\n          <label>Password</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This\n              field is required </p>\n\n            <!-- Minimum and Maximum length of data error  -->\n            <p class=\"text-danger text-right\" *ngIf=\"(form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength) && form.controls.password.dirty && form.controls.password.value.length <= 5\">*Minimum\n              characters: 5, Maximum characters: 50\n            </p>\n            \n          </div>\n          <!-- Invalid data error  -->\n          <p class=\"text-danger text-right\" style=\"font-size:12px;\" *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty && form.controls.password.value.length > 5\">Passord\n              must contain atleast 1 Uppercase, 1 lowercase, 1 number and 1 special character\n            </p>\n        </div>\n\n\n        <!-- Confirm Password -->\n        <div class=\"inputBox\" [ngClass]=\"{ 'has-error': (form.controls.confirm_password.errors && form.controls.confirm_password.dirty) || (form.errors?.matchingPasswords && form.controls.confirm_password.dirty) , 'has-success':!form.controls.confirm_password.errors && !form.errors?.matchingPasswords}\">\n          <input type=\"password\" name=\"confirm_password\" required=\"\" autocomplete=\"off\" formControlName=\"confirm_password\" />\n          <label>Confirm Password</label>\n          <!-- Error Block -->\n          <div class=\"help-block\">\n            <p class=\"text-danger text-right\" *ngIf=\"form.controls.confirm_password.errors?.required && form.controls.confirm_password.dirty\">This\n              field is required\n            </p>\n            <p class=\"text-danger text-right\" *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm_password.dirty\">Password\n              do not match</p>\n          </div>\n        </div>\n\n        <p class=\"policy text-center\">By signing up, you are agreeing to the terms and policy of UTS subject review</p>\n        <button [disabled]=\"!form.valid || processing || !usernameValid || !emailValid\" class=\"btn btn-primary\" type=\"submit\" name=\"\">Register</button>\n\n        <!-- First Name -->\n        <p class=\"text-center\">Already Have an account? <a routerLink=\"/login\">Login here</a></p>\n      </div>\n    </div>\n  </form>\n</div>"

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




var RegisteringComponent = /** @class */ (function () {
    function RegisteringComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm();
    }
    RegisteringComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            f_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    this.validateName
                ])],
            l_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
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
    RegisteringComponent.prototype.ngOnInit = function () {
    };
    RegisteringComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        var user = {
            f_name: this.form.get('f_name').value,
            l_name: this.form.get('l_name').value,
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
        };
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
    RegisteringComponent.prototype.validateEmails = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(String(controls.value))) {
            return null;
        }
        else {
            return { 'validateEmails': true };
        }
    };
    RegisteringComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    RegisteringComponent.prototype.validateName = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateName': true };
        }
    };
    RegisteringComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
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
    { path: '', component: _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_4__["SubjectFeedComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'login', component: _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_8__["LoggingComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__["NotAuthGuard"]] },
    { path: 'register', component: _components_user_register_registering_registering_component__WEBPACK_IMPORTED_MODULE_10__["RegisteringComponent"], canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_11__["NotAuthGuard"]] },
    { path: 'dashboard', component: _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    // { path: 'subjects/detail/:id', component: SubjectDetailComponent, canActivate:[AuthGuard] },
    { path: 'subjects', component: _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_4__["SubjectFeedComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/add', component: _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_2__["SubjectAddComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/detail/:id', component: _components_subject_subject_add_review_subject_add_review_component__WEBPACK_IMPORTED_MODULE_6__["SubjectAddReviewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/edit/:id', component: _components_subject_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_5__["SubjectEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'subjects/delete/:id', component: _components_subject_subject_delete_subject_delete_component__WEBPACK_IMPORTED_MODULE_7__["SubjectDeleteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'dashboard', component: _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'profile', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '**', component: _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_8__["LoggingComponent"] },
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
        this.domain = "http://localhost:5000";
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
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.domain + '/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.updateProfile = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.domain + '/users/profile/updateUser', user, { headers: headers }).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http
            .get('http://localhost:3000/users/profile', { headers: headers })
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _authService_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RatingService = /** @class */ (function () {
    function RatingService(http, authService, messageService) {
        this.http = http;
        this.authService = authService;
        this.messageService = messageService;
        this.ratingAdded_Observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ratingsUrl = 'http://localhost:5000/ratings'; // URL to web api
    }
    RatingService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    /** GET ratings from the server */
    RatingService.prototype.getRatings = function () {
        return this.http.get(this.ratingsUrl);
    };
    /** GET rating by id. Return `undefined` when id not found */
    RatingService.prototype.getRatingNo404 = function (_id) {
        var _this = this;
        var url = this.ratingsUrl + "/?id=" + _id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ratings) { return ratings[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " rating id=" + _id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getRating _id=" + _id)));
    };
    /** GET ratings from the server */
    RatingService.prototype.getRatingsbySubjectID = function (subjectID) {
        this.createAuthenticationHeaders();
        var url = this.ratingsUrl + "/" + subjectID;
        return this.http.get(url);
    };
    /** GET rating by id. Will 404 if id not found */
    RatingService.prototype.getRating = function (_id) {
        var _this = this;
        var url = this.ratingsUrl + "/detail/" + _id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched rating id=" + _id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getRating id=" + _id)));
    };
    //////// Save methods //////////
    /** POST: add a new rating to the server */
    RatingService.prototype.addRating = function (rating) {
        var _this = this;
        console.log(rating);
        return this.http.post(this.ratingsUrl + "/add/", rating, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (rating) { return _this.log("added rating w/ id=" + rating._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addRating')));
    };
    /** DELETE: delete the rating from the server */
    RatingService.prototype.deleteRating = function (rating) {
        var _this = this;
        console.log(rating);
        var url = this.ratingsUrl + "/delete/" + rating._id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted rating _id=" + rating._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteRating')));
    };
    /** PUT: update the rating on the server */
    RatingService.prototype.updateRating = function (rating) {
        var _this = this;
        return this.http.put(this.ratingsUrl + "/update", rating, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated rating _id=" + rating._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateRating')));
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
    RatingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _authService_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
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
    SubjectService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    SubjectService.prototype.notifySubjectAddition = function () {
        this.createAuthenticationHeaders();
        this.subjectAdded_Observable.next();
    };
    SubjectService.prototype.newSubject = function (subject) {
        this.createAuthenticationHeaders();
        return this.http.post(this.domain + '/subjects/addSubject', subject, this.options).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.getAllSubjects = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/subjects/allSubjects', this.options).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.getDashboardSubjects = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/subjects/dashboard', this.options).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.getSingleSubject = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/subjects/singleSubject/' + id, this.options).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.editSubject = function (subject) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + '/subjects/updateSubject', subject, this.options).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.deleteSubject = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + '/subjects/deleteSubject/' + id, this.options).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    SubjectService.prototype.postReview = function (id, reviewComment, reviewRating) {
        this.createAuthenticationHeaders();
        var subjectData = {
            reviewComment: reviewComment,
            reviewRating: reviewRating
        };
        return this.http.post(this.domain + 'subjects/addreview/' + id, subjectData, this.options).pipe(Object(rxjs_operators___WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
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

module.exports = ".bg{\n    background-image: url('login.jpg'); height: 100%; background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 1024px;\n}\n\nnobg{\n    background-color: grey;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- background image display according to the login status -->\n<div [ngClass]=\"{'bg': authService.notLoggedIn(), 'nobg': !authService.notLoggedIn()}\">\n\n\n    <app-layout>\n    <app-header></app-header>\n    <flash-messages></flash-messages>\n    <!--TODO: Get this flash message going\n    <ng-flash-message></ng-flash-message> -->\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n    </app-layout>\n\n</div>"

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
/* harmony import */ var _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./__components/user/login/logging/logging.component */ "./src/app/__components/user/login/logging/logging.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./__components/user/profile/profile.component */ "./src/app/__components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_registering_registering_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./__components/user/register/registering/registering.component */ "./src/app/__components/user/register/registering/registering.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./__guards/auth.guard */ "./src/app/__guards/auth.guard.ts");
/* harmony import */ var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./__guards/notAuth.guard */ "./src/app/__guards/notAuth.guard.ts");
/* harmony import */ var _services_validateService_validate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./__services/validateService/validate.service */ "./src/app/__services/validateService/validate.service.ts");
/* harmony import */ var _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./__services/authService/auth.service */ "./src/app/__services/authService/auth.service.ts");
/* harmony import */ var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./__routes/app-routing.module */ "./src/app/__routes/app-routing.module.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./__components/subject/subject-feed/subject-feed.component */ "./src/app/__components/subject/subject-feed/subject-feed.component.ts");
/* harmony import */ var _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./__components/subject/subject-add/subject-add.component */ "./src/app/__components/subject/subject-add/subject-add.component.ts");
/* harmony import */ var _components_subject_subject_add_review_subject_add_review_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./__components/subject/subject-add-review/subject-add-review.component */ "./src/app/__components/subject/subject-add-review/subject-add-review.component.ts");
/* harmony import */ var _components_subject_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./__components/subject/subject-edit/subject-edit.component */ "./src/app/__components/subject/subject-edit/subject-edit.component.ts");
/* harmony import */ var _components_subject_subject_delete_subject_delete_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./__components/subject/subject-delete/subject-delete.component */ "./src/app/__components/subject/subject-delete/subject-delete.component.ts");
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
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_user_register_registering_registering_component__WEBPACK_IMPORTED_MODULE_13__["RegisteringComponent"],
                _components_user_login_logging_logging_component__WEBPACK_IMPORTED_MODULE_11__["LoggingComponent"],
                _components_ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _components_ui_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_22__["SubjectAddComponent"],
                // SubjectDetailComponent,
                // SubjectsComponent,
                // SubjectSearchComponent,
                _components_subject_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_subject_subject_feed_subject_feed_component__WEBPACK_IMPORTED_MODULE_21__["SubjectFeedComponent"],
                _components_subject_subject_add_subject_add_component__WEBPACK_IMPORTED_MODULE_22__["SubjectAddComponent"],
                _components_subject_subject_add_review_subject_add_review_component__WEBPACK_IMPORTED_MODULE_23__["SubjectAddReviewComponent"],
                _components_subject_subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_24__["SubjectEditComponent"],
                _components_subject_subject_delete_subject_delete_component__WEBPACK_IMPORTED_MODULE_25__["SubjectDeleteComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__["FlashMessagesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"]
            ],
            providers: [_services_validateService_validate_service__WEBPACK_IMPORTED_MODULE_16__["ValidateService"], _services_authService_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_15__["NotAuthGuard"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__["FlashMessagesService"]],
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

module.exports = __webpack_require__(/*! /Users/Dalley/Advance-Internet-Programming-Assessment/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map