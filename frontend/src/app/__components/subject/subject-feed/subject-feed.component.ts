import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SubjectService } from './../../../__services/subjectService/subject.service';
import { AuthService } from './../../../__services/authService/auth.service';

@Component({
  selector: 'app-subject-feed',
  templateUrl: './subject-feed.component.html',
  styleUrls: ['./subject-feed.component.css']
})
export class SubjectFeedComponent implements OnInit {

  message;
  messageClass;

  newSubject = false;
  loadingSubject = false;

  processing = false;

  form;

  user;
  
  subjectPosts;

  constructor(
    private formBuilder : FormBuilder,
    private subjectService: SubjectService,
    private authService: AuthService
  ) 
  {
    this.createNewSubjectForm();
  }

  subjectNumberValidation(controls){
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
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

  newSubjectForm() {
    this.newSubject = true;
  }

  reloadSubject() {
    this.loadingSubject = true;
    //Get all subjects
    setTimeout(()=>{
      this.loadingSubject = false;
    }, 4000)
  }

  draftComment(){

  }

  goBack()
  {
    window.location.reload();
  }

  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe(data => {
      this.subjectPosts = data.subjects;
    })
  }

  onSubjectSubmit(){
    this.processing = true;

    const subject = {
      subjectNumber: this.form.get('subjectNumber').value,
      subjectName: this.form.get('subjectName').value,
      description: this.form.get('description').value
    }

    this.subjectService.newSubject(subject).subscribe(data => {
      if(!data.success) {
        this.messageClass= 'alert alert-danger small';
        this.message = data.message;
        this.processing = false;
      } else {
        this.messageClass = 'alert alert-success small'
        this.message = data.message;
        this.getAllSubjects();
        setTimeout(() => {
          this.newSubject = false;
          this.processing = false;
          this.message = false;
          this.form.reset();
        }, 2000);
      }
    });
    
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });
    this.getAllSubjects();
  }


}
