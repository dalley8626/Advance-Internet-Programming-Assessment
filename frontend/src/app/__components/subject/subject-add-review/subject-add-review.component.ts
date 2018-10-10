import {Component, Input, OnInit} from '@angular/core';
import {Rating} from '../../../__models/rating';
import {FormBuilder, Validators} from '@angular/forms';
import {SubjectService} from '../../../__services/subjectService/subject.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe, Location} from '@angular/common';
import {RatingService} from '../../../__services/ratingService/rating.service';
import {Subject} from '../../../__models/subject';
import {FlashMessagesService} from 'angular2-flash-messages';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-subject-add-review',
  templateUrl: './subject-add-review.component.html',
  styleUrls: ['./subject-add-review.component.css']
})
export class SubjectAddReviewComponent implements OnInit {

  message;
  messageClass;

  processing = false;
  currentUrl;
  form;

  closeResult: string;

  subjectPosts;

  loadEditForm = true;

  @Input() subject: Subject;

  public rating: Rating;
  ratings: Rating[];
  pipe = new DatePipe('en-US');

  oneRating: number = 0;
  twoRating: number = 0;
  threeRating: number = 0;
  fourRating: number = 0;
  fiveRating: number = 0;

  oneRatingPercentage = '0';
  twoRatingPercentage = '0';
  threeRatingPercentage = '0';
  fourRatingPercentage = '0';
  fiveRatingPercentage = '0';

  averageRating;

  user;

  hasRated: boolean;
  hasRatedText = 'Write a Review';

  deleteRating: Rating;

  constructor(
    private formBuilder: FormBuilder,
    public subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private flashMessageService: FlashMessagesService,
    private ratingService: RatingService,
    private modalService: NgbModal,
    private spinner : NgxSpinnerService
  ) {
    this.rating = new Rating();
    this.deleteRating = new Rating();

    this.createNewSubjectForm();
    this.user = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit() {
    this.getSingleSubject();
  }

  //Open the confirmation dialog
  open(content, rating) {
    this.deleteRating = rating;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  getSingleSubject() {
    this.spinner.show();
    this.currentUrl = this.activatedRoute.snapshot.params;

    this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = 'Subject Not found';
      } else {
        this.subject = data.subject;
        this.loadEditForm = false;

        this.getRatingsbySubjectID();

        this.ratingService.ratingAdded_Observable.subscribe(res => {
          this.clearRatingStar();
          this.getRatingsbySubjectID();
        });
      }
    });
    setTimeout( () =>
      this.spinner.hide(), 1000
    )

  }

  subjectNumberValidation(controls) {
    const regExp = new RegExp(/^[0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'subjectNumberValidation': true};
    }
  }

  subjectNameValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return {'subjectNameValidation': true};
    }
  }

  createNewSubjectForm() {
    this.form = this.formBuilder.group({
      subjectNumber: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        this.subjectNumberValidation
      ])],
      subjectName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
        this.subjectNameValidation
      ])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(25000),
        Validators.minLength(8),
      ])],
    });
  }

  updateStar(star) {
    this.rating.star = star;
  }

  goBack() {
    this.location.back();
  }


  getRatingsbySubjectID() {
    this.ratingService.getRatingsbySubjectID(this.subject._id)
      .subscribe(result => {
        this.ratings = result['data'];
        this.getRatingPercentages(this.ratings);

      });
  }

  getRatingPercentages(ratings: Rating[]) {
    this.ratings.forEach(element => {
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
      element.editFlag = false;
      // Check if there is any rating that has been rated by current user;
      if (element.username === this.user.username) {
        this.hasRated = true;
        this.hasRatedText = 'You have already rated this subject.';
      }
    });

    this.fiveRatingPercentage = `${Math.round(((this.fiveRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    this.fourRatingPercentage = `${Math.round(((this.fourRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    this.threeRatingPercentage = `${Math.round(((this.threeRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    this.twoRatingPercentage = `${Math.round(((this.twoRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;
    this.oneRatingPercentage = `${Math.round(((this.oneRating / this.subject.numberOfReview) * 100 / 10) * 10)}%`;

    this.averageRating = Math.round(this.subject.percentageRating * 5) / 100;
  }

  addRating(): void {
    
    this.spinner.show()
    if (this.rating.ratingDescription) {
      this.rating.subjectID = this.subject._id;
      this.rating.userID = this.user.id;
      this.rating.username = this.user.username;
      this.rating.created = Date();
      if (this.subject.numberOfReview && this.subject.percentageRating) {
        this.subject.numberOfReview = this.subject.numberOfReview + 1;
        this.subject.percentageRating =
          (this.subject.percentageRating * (this.subject.numberOfReview - 1) + this.rating.star * 20) / this.subject.numberOfReview;
      } else {
        this.subject.numberOfReview = 1;
        this.subject.percentageRating = this.rating.star * 20;
      }
      this.subjectService.editSubject(this.subject).subscribe(res => {

        if (res['success'] === true) {
          this.subjectService.notifySubjectAddition();
        } else {
          this.flashMessageService.show('Attempt failed, try again.', {cssClass: 'alert-danger', timeout: 1000});
        }
      }, error => {
        this.flashMessageService.show('Error: ' + error, {cssClass: 'alert-danger.', timeout: 1000});
      });

      this.ratingService.addRating(this.rating).subscribe(res => {
        console.log('response is ', res);
        
        if (res['status'] === 'success') {
          this.ratingService.notifyRatingAddition();
          this.flashMessageService.show('Rating added', {cssClass: 'alert-success.', timeout: 1000});
          this.rating.ratingDescription = '';
        } else {
          this.flashMessageService.show('Attempt failed, try again.', {cssClass: 'alert-danger.', timeout: 1000});
        }
      }, error => {
        this.flashMessageService.show('Error: ' + error, {cssClass: 'alert-danger.', timeout: 1000});
      });
    } else {
      this.flashMessageService.show('Rating Description Required', {cssClass: 'alert-danger.', timeout: 1000});
    }
    setTimeout( () =>
    this.spinner.hide(), 1000
    )
  }

  edit(rating: Rating): void {
    rating.editFlag = true;
  }

  editRating(rating: Rating): void {
    this.ratingService.updateRating(rating).subscribe(res => {
      if (res['status'] === 'success') {
        this.ratingService.notifyRatingAddition();
        rating.editFlag = false;
        this.message = 'Rating edited.';
      } else {
        this.flashMessageService.show('Attempt failed, try again.', {cssClass: 'alert-danger.', timeout: 1000});
      }
    });
  }

  async delete(rating: Rating) {
   
    this.spinner.show()
    this.ratings = this.ratings.filter(r => r !== rating);
    if (this.subject.numberOfReview > 1) {
      this.subject.numberOfReview = await this.subject.numberOfReview - 1;
      this.subject.percentageRating =
        await (this.subject.percentageRating * (this.subject.numberOfReview + 1) - (this.rating.star * 20) ) / this.subject.numberOfReview;
    } else {
      this.subject.numberOfReview = 0;
      this.subject.percentageRating = 0;
    }

    this.ratingService.deleteRating(rating).subscribe(res => {
      console.log('response is ', res);
      if (res['status'] === 'success') {
        this.ratingService.notifyRatingAddition();
        this.flashMessageService.show('Rating deleted', {cssClass: 'alert-success.', timeout: 1000});
        this.hasRated = false;
        this.hasRatedText = 'Write a Review.';
 
      } else {
        this.flashMessageService.show('Attempt failed, try again.', {cssClass: 'alert-danger.', timeout: 1000});
      }
    }, error => {
      this.flashMessageService.show('Error: ' + error, {cssClass: 'alert-danger.', timeout: 1000});
    });
    this.subjectService.editSubject(this.subject).subscribe(res => {
      if (res['success'] === true) {
        this.subjectService.notifySubjectAddition();
      } else {
        this.flashMessageService.show('Attempt failed, try again.', {cssClass: 'alert-danger', timeout: 1000});
      }
    }, error => {
      this.flashMessageService.show('Error: ' + error, {cssClass: 'alert-danger.', timeout: 1000});
    });
    setTimeout( () =>
    this.spinner.hide(), 1000
  )
  }

  clearRatingStar(): void {
    this.fiveRating = 0;
    this.fourRating = 0;
    this.threeRating = 0;
    this.twoRating = 0;
    this.oneRating = 0;
  }
}
