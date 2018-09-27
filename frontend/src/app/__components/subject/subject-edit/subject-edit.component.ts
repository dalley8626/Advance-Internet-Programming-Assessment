import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SubjectService } from './../../../__services/subjectService/subject.service';
import { AuthService } from './../../../__services/authService/auth.service';

import {Rating} from '../../../__models/rating';
import {RatingService} from '../../../__services/ratingService/rating.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  message;
  messageClass;

  processing = false;
  currentUrl;
  form;

  user;
  
  subjectPosts;

  loadEditForm = true;

  subject;

  ratings: Rating[];
  public rating: Rating;

  constructor(
    private formBuilder : FormBuilder,
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private ratingService: RatingService,

  ) 
  {

    this.rating = new Rating();
    this.createNewSubjectForm();

  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(data => {
      if(!data.success) {
        this.messageClass= 'alert alert-danger';
        this.message = "Subject Not found";
      } else {
        this.subject = data.subject;
        this.loadEditForm = false;
      }
    })
    this.getRatingsbySubjectID();
    this.ratingService.ratingAdded_Observable.subscribe(res => {
      this.getRatingsbySubjectID();
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
      return { 'subjectNameValidation' : true }
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

  goBack()
  {
    this.location.back();
  }

  updateSubjectSubmit()
  {
    this.processing = true;
    this.subjectService.editSubject(this.subject).subscribe(data => {
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(()=>{
          this.location.back();
        },2000)
      }
    });
  }

  getRatingsbySubjectID(): void {
    this.ratingService.getRatingsbySubjectID(this.subject._id)
      .subscribe(result => {
        this.ratings = result['data'];
        this.ratings.forEach(function(element) {
          console.log(element);
          element.editFlag = false;
        });
      });
  }
  addRating(): void {
    if (this.rating.ratingTitle && this.rating.ratingDescription) {
      this.rating.subjectID = this.subject._id;
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
      alert('Rating title and Rating Description required');
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
