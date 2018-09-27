import {Component, Input, OnInit} from '@angular/core';
import {Rating} from '../../../__models/rating';
import {FormBuilder, Validators} from '@angular/forms';
import {SubjectService} from '../../../__services/subjectService/subject.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {RatingService} from '../../../__services/ratingService/rating.service';
import {Subject} from '../../../__models/subject';

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

  subjectPosts;

  loadEditForm = true;

  @Input() subject: Subject;

  public rating: Rating;
  ratings: Rating[];

  user;


  constructor(
    private formBuilder: FormBuilder,
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private ratingService: RatingService,

  )
  {
    this.rating = new Rating();
    this.createNewSubjectForm();
    this.user  = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit() {

    this.getSingleSubject();
    console.log(this.subject);
    this.getRatingsbySubjectID();
    this.ratingService.ratingAdded_Observable.subscribe(res => {
      this.getRatingsbySubjectID();
    });

  }

  getSingleSubject() {
    this.currentUrl = this.activatedRoute.snapshot.params;

    this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(data => {
      if(!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = 'Subject Not found';
      } else {
        this.subject = data.subject;
        this.loadEditForm = false;
        this.getRatingsbySubjectID();
        this.ratingService.ratingAdded_Observable.subscribe(res => {
          this.getRatingsbySubjectID();
        });
      }
    });

  }

  subjectNumberValidation(controls){
    const regExp = new RegExp(/^[0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNumberValidation' : true }
    }
  }

  subjectNameValidation(controls){
    const regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNameValidation' : true };
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
    })
  }

  updateStar(star) {
    this.rating.star = star;
  }

  goBack()
  {
    this.location.back();
  }


  getRatingsbySubjectID(){
    console.log(this.subject._id)
    this.ratingService.getRatingsbySubjectID(this.subject._id)
      .subscribe(result => {
        this.ratings = result['data'];
        this.ratings.forEach(function(element) {
          element.editFlag = false;
        });
      });
  }
  addRating(): void {
    if (this.rating.ratingDescription) {
      this.rating.subjectID = this.subject._id;
      this.rating.userID = this.user.id;
      if (this.subject.numberOfReview && this.subject.percentageRating) {
        this.subject.numberOfReview = this.subject.numberOfReview + 1;
        this.subject.percentageRating =
          (this.subject.percentageRating * (this.subject.numberOfReview - 1) + this.rating.star * 20) / this.subject.numberOfReview;
      } else {
        this.subject.numberOfReview = 1;
        this.subject.percentageRating = this.rating.star * 20;
      }
      this.subjectService.editSubject(this.subject).subscribe(res => {
        console.log('response is ', res);
        if (res['status'] === 'success') {
          this.subjectService.notifySubjectAddition();
        } else {
          alert('Attempt failed, try again.');
        }
      }, error => {
        console.log('error is', error);
      });

      this.ratingService.addRating(this.rating).subscribe(res => {
        console.log('response is ', res);
        if (res['status'] === 'success') {
          this.ratingService.notifyRatingAddition();
          alert('Rating added.');
        } else {
          alert('Attempt failed, try again.');
        }
      }, error => {
        console.log('error is', error);
      });
    } else {
      alert('Rating Description required');
    }
  }
  edit(rating: Rating): void {
    rating.editFlag = true;
  }
  editRating(rating: Rating): void {
    this.ratingService.updateRating(rating).subscribe(res => {
      if (res['status'] === 'success') {
        this.ratingService.notifyRatingAddition();
        rating.editFlag = false;
        alert('Rating edited.');
      } else {
        alert('Attempt failed, try again.');
      }
    });
  }
  delete(rating: Rating): void {
    this.ratings = this.ratings.filter(r => r !== rating);
    this.ratingService.deleteRating(rating).subscribe();
  }
}
