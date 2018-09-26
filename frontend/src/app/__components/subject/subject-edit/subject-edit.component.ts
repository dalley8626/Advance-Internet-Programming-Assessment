import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SubjectService } from './../../../__services/subjectService/subject.service';
import { AuthService } from './../../../__services/authService/auth.service';

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

  constructor(
    private formBuilder : FormBuilder,
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) 
  {
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

  

}
