import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'; //required form modules


import { SubjectService } from './../../../__services/subjectService/subject.service'; // subject service
import { AuthService } from './../../../__services/authService/auth.service';

import {Subject} from '../../../__models/subject';
import {Rating} from '../../../__models/rating';
import {RatingService} from '../../../__services/ratingService/rating.service';

import { Router, ActivatedRoute } from '@angular/router'; // router module
import { Location } from '@angular/common'; //location module

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
  //false means user can edit or click
  //true means user cannot
  processing = false;

  //function to store the current URL
  currentUrl;

  //form instance stored in a variable 
  form;

  //user variable to store user model
  user;

  subjectPosts;

  //edit form
  loadEditForm = true;

  //subject variable to store the subject model instance
  subject;

  constructor(
    private formBuilder : FormBuilder,  //instance of form builder
    private subjectService: SubjectService, //instance of subject service
    private activatedRoute: ActivatedRoute, // instance of activated route
    private router: Router, // instance of router
    private location: Location  //instance of location
  )
  {
    //creating a edit form
    this.createNewSubjectForm();
  }

  ngOnInit() {
    //getting the url
    this.currentUrl = this.activatedRoute.snapshot.params;

    //sending request to the server with the id retrieved from the url
    this.subjectService.getSingleSubject(this.currentUrl.id).subscribe(data => {
      //failure
      if(!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = "Subject Not found";
      } 
      //success
      else {
        this.subject = data.subject;
        this.loadEditForm = false;
      }
    })
  }

  // validation for Subject Number
  subjectNumberValidation(controls){
    const regExp = new RegExp(/^[0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNumberValidation' : true }
    }
  }

  // validation for Subject Name
  subjectNameValidation(controls){
    const regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNameValidation' : true }
    }
  }

  // creating the edit form
  createNewSubjectForm() {
    this.form = this.formBuilder.group({
      //subject Number field
      subjectNumber: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        this.subjectNumberValidation
      ])],
      // Subejct Name field
      subjectName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
        this.subjectNameValidation
      ])],
      // description field
      description: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(25000),
        Validators.minLength(8),
      ])],
    })
  }

  //function to go back to previous locaion
  goBack()
  {
    this.location.back();
  }

  //function to update the subject (or edit)
  updateSubjectSubmit()
  {
    //disabling the form
    this.processing = true;

    //invoking the editSubject function in subejct service
    this.subjectService.editSubject(this.subject).subscribe(data => {
      //failure
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        //enabling the form
        this.processing = false;
      }
      //success
      else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(()=>{
          this.location.back();
        },2000)
      }
    });
  }

}
