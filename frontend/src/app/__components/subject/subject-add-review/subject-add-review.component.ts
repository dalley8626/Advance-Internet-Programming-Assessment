import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../../../__models/rating'; // Rating Model
import { FormBuilder, Validators } from '@angular/forms'; // FormBUilder for reactive form
import { SubjectService } from '../../../__services/subjectService/subject.service'; //Subject service
import { ActivatedRoute, Router } from '@angular/router'; //Activated Route to get URL; router for navigation purpose
import { DatePipe, Location } from '@angular/common';
import { RatingService } from '../../../__services/ratingService/rating.service'; // Rating Service
import { Subject } from '../../../__models/subject';  //Subject Model
import { FlashMessagesService } from 'angular2-flash-messages'; //Flash Message Service
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'; // Modal module
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgxSpinnerService } from 'ngx-spinner'; // Spinner module (loading animation)

@Component({
  selector: 'app-subject-add-review',
  templateUrl: './subject-add-review.component.html',
  styleUrls: ['./subject-add-review.component.css']
})

//This class provides with the details of the subject
//As well as enables user to add user rating or view all the user ratings
export class SubjectAddReviewComponent implements OnInit {

  //Attributes Start ====================================================
  //=====================================================================

  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
  //false means user can edit or click
  //true means user cannot
  processing = false;

  //variable to store the current URL
  currentUrl;

  //form instance stored in a variable 
  form;

  closeResult: string;

  subjectPosts;

  //variable to display or not display the edit form (This option is only accessible by "admin" users)
  loadEditForm = true;

  @Input() subject: Subject;

  //variable to store rating
  public rating: Rating;

  //variable to store array of ratings
  ratings: Rating[];

  // Variables to store the number of users that rated the subject
  //for example: there is one star rating by 5 user; the oneRating will be equal to 5 
  oneRating: number = 0;
  twoRating: number = 0;
  threeRating: number = 0;
  fourRating: number = 0;
  fiveRating: number = 0;

  //variables to store the percentage that will define the length of the bar
  oneRatingPercentage = '0';
  twoRatingPercentage = '0';
  threeRatingPercentage = '0';
  fourRatingPercentage = '0';
  fiveRatingPercentage = '0';

  //variable to store the average rating of a subejct
  averageRating;

  //variable to store the user
  user;

  //variable to either enable or disable the user from rating
  hasRated: boolean;
  //if the user has already rated; the has Rated Text variable value is displayed
  hasRatedText = 'Write a Review';

  //variable to store the Rating that is to be deleted
  deleteRating: Rating;

  //Attributes End ====================================================
  //=====================================================================


  constructor(
    private formBuilder: FormBuilder, // instance of form builder
    public subjectService: SubjectService, // instance of subject service
    private activatedRoute: ActivatedRoute, // instance of activated Route
    private router: Router, // instance of router
    private location: Location, // instance of location
    private flashMessageService: FlashMessagesService, // instance of flash service
    private ratingService: RatingService, // instance of rating service
    private modalService: NgbModal, // instance of modal service
    private spinner: NgxSpinnerService // instance of spinner service
  ) {

    //initializing a new rating to add
    this.rating = new Rating();

    //initializing a new rating to delete
    this.deleteRating = new Rating();

    //creating a form
    this.createNewSubjectForm();

    //getting the user information from local storage
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    //getting the details of the subejct
    this.getSingleSubject();
  }

  //Open the confirmation dialog
  open(content, rating) {
    this.deleteRating = rating;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  //Close the confirmation Dialog with ESC 
  private getDismissReason(reason: any): void {
    if (reason === ModalDismissReasons.ESC) {
      console.log('by pressing ESC');
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log('by clicking on a backdrop');
    } else {
      console.log(`with: ${reason}`);
    }
  }

  //function to get the details of the subject
  //the url consists of the id of the subject which is used to make request to the database
  getSingleSubject() {
    this.spinner.show();
    //taking the subject Id from the url and storing in currentUrl varialbe
    this.currentUrl = this.activatedRoute.snapshot.params;

    this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(data => {
      //if error
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = 'Subject Not found';
      }
      //if success
      else {
        //storing the subject
        this.subject = data.subject;
        //disabling the visibility of edit form
        this.loadEditForm = false;

        //get all the ratings of that particular subject
        this.getRatingsbySubjectID();

        //
        this.ratingService.rating_Observable.subscribe(res => {
          this.clearRatingStar();
          this.getRatingsbySubjectID();
        });
      }
    });

    //spinner hide
    setTimeout(() =>
      this.spinner.hide(), 1000
    );
  }

  // function for validation of subject Number
  subjectNumberValidation(controls) {
    const regExp = new RegExp(/^[0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNumberValidation': true };
    }
  }

  //function for validation of subject Name
  subjectNameValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNameValidation': true };
    }
  }

  //function to create a new form using form builder
  createNewSubjectForm() {
    this.form = this.formBuilder.group({
      //subject Number field
      subjectNumber: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        this.subjectNumberValidation
      ])],
      //subject Name field
      subjectName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
        this.subjectNameValidation
      ])],
      //description field
      description: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(25000),
        Validators.minLength(8),
      ])],
    });
  }

  //function to update the star
  updateStar(star) {
    this.rating.star = star;
  }

  //function to get the rating according to the subject id
  getRatingsbySubjectID() {
    this.ratingService.getRatingsbySubjectID(this.subject._id)
      .subscribe(result => {
        this.ratings = result['data'];
        this.getRatingPercentages(this.ratings);

        // calculate each star's percentage from ratings
        this.calculatePercentageOfStars();
      });
  }

  //function to get the ratings percentage
  getRatingPercentages(ratings: Rating[]) {
    this.ratings.forEach(element => {
      //adding to the respective variable upon user rating
      if (element.star === 5 || element.star === 4.5) {
        this.fiveRating = this.fiveRating + 1;
      } else if (element.star === 4 || element.star === 3.5) {
        this.fourRating = this.fourRating + 1;
      } else if (element.star === 3 || element.star === 2.5) {
        this.threeRating = this.threeRating + 1;
      } else if (element.star === 2 || element.star === 1.5) {
        this.twoRating = this.twoRating + 1;
      } else if (element.star === 1 || element.star === 0.5 || element.star === 0) {
        this.oneRating = this.oneRating + 1;
      }
      this.checkIfRated(element);
    });
  }
  // Check if there is any rating that has been rated by current user;
  checkIfRated(rating: Rating): void {
    rating.editFlag = false;
    if (rating.username === this.user.username) {
      this.hasRated = true;
      this.hasRatedText = 'You have already rated this subject.';
    }
  }
  //calculating the rating percentage for each number of stars and storing them in the variable defined above
  calculatePercentageOfStars(): void {
    //percentage of 5 ratings
    this.fiveRatingPercentage = `${Math.round(((this.fiveRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    //percentage of 4 ratings
    this.fourRatingPercentage = `${Math.round(((this.fourRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    //percentage of 3 ratings
    this.threeRatingPercentage = `${Math.round(((this.threeRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    //percentage of 2 ratings
    this.twoRatingPercentage = `${Math.round(((this.twoRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    //percentage of 1 ratings
    this.oneRatingPercentage = `${Math.round(((this.oneRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    //average rating
    this.averageRating = Math.round(this.subject.percentageRating * 5) / 100;
  }

  //function to add the rating to the subejct and save to the database
  addRating(): void {
    //display the spinner
    this.spinner.show();

    if (this.rating.ratingDescription) {
      // fillout rating attributes
      this.rating.subjectID = this.subject._id;
      this.rating.userID = this.user.id;
      this.rating.username = this.user.username;
      this.rating.created = Date();

      //calculate subject attributes when adding a Rating i.e. numberOfReview & percentageRating.
      if (this.subject.numberOfReview && this.subject.percentageRating) {
        this.subject.numberOfReview = this.subject.numberOfReview + 1;
        this.subject.percentageRating =
          (this.subject.percentageRating * (this.subject.numberOfReview - 1) + this.rating.star * 20) / this.subject.numberOfReview;
      } else {
        this.subject.numberOfReview = 1;
        this.subject.percentageRating = this.rating.star * 20;
      }

      //update the subject because deleting the rating affects the subject's attribute i.e. numberOfReview, and percentageRating.
      this.editSubject(this.subject);

      //add rating to the database
      this.ratingService.addRating(this.rating).subscribe(res => {
        if (res['status'] === 'success') {
          this.ratingService.notifyRating();
          this.flashMessageService.show('Rating added', { cssClass: 'alert-success', timeout: 1000 });
          this.rating.ratingDescription = '';
          this.hasRated = false;
        } else {
          this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
        }
      }, error => {
        this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger', timeout: 1000 });
      });
    } else {
      this.flashMessageService.show('Rating Description Required', { cssClass: 'alert-danger', timeout: 1000 });
    }

    // disable spinner
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  //function to either display or hide the edit form
  edit(rating: Rating): void {
    rating.editFlag = true;
  }

  //function to edit the rating
  editRating(rating: Rating): void {
    this.ratingService.updateRating(rating).subscribe(res => {
      if (res['status'] === 'success') {
        this.ratingService.notifyRating();
        rating.editFlag = false;
        this.message = 'Rating edited.';
      } else {
        this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
      }
    });
  }

  //function to delte the rating
  //we are making it asyncronous so as to update the subject detail
  async delete(rating: Rating) {
    this.ratings = this.ratings.filter(r => r !== rating);
    if (this.subject.numberOfReview > 1) {
      this.subject.numberOfReview = await this.subject.numberOfReview - 1;
      this.subject.percentageRating =
        await (this.subject.percentageRating * (this.subject.numberOfReview + 1) - (this.rating.star * 20)) / this.subject.numberOfReview;
    } else { // if the subject has one review, just make number of review and percentage to be '0'.
      this.subject.numberOfReview = 0;
      this.subject.percentageRating = 0;
    }

    //delete the rating from the database
    this.ratingService.deleteRating(rating).subscribe(res => {
      if (res['status'] === 'success') {
        this.ratingService.notifyRating();
        this.flashMessageService.show('Rating deleted', { cssClass: 'alert-success', timeout: 1000 });
        this.hasRated = false;
        this.hasRatedText = 'Write a Review.';
      } else {
        this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
      }
    }, error => {
      this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger', timeout: 1000 });
    });
    //update the subject because deleting the rating affects the subject's attribute i.e. numberOfReview, and percentageRating.
    this.editSubject(this.subject);
  }
  // update subject when rating is changed(added or deleted).
  editSubject(subject: Subject): void {
    this.subjectService.editSubject(subject).subscribe(res => {
      if (res['success'] === true) {
        this.subjectService.notifySubject();
      } else {
        this.flashMessageService.show('Attempt failed, try again.', { cssClass: 'alert-danger', timeout: 1000 });
      }
    }, error => {
      this.flashMessageService.show('Error: ' + error, { cssClass: 'alert-danger', timeout: 1000 });
    });
  }

  //function to clear the rating
  clearRatingStar(): void {
    this.fiveRating = 0;
    this.fourRating = 0;
    this.threeRating = 0;
    this.twoRating = 0;
    this.oneRating = 0;
  }
}
