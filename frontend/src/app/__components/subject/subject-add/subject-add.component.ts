import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'; // modules for building reactive form
import { SubjectService } from './../../../__services/subjectService/subject.service'; // subject service
import { AuthService } from './../../../__services/authService/auth.service'; // authentication service
import { Router } from '@angular/router'; // router module for navigation

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})

//This class can only be accessed by "admin" users
//Functionality of this class is to add the subjects and its details
export class SubjectAddComponent implements OnInit {

  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
  //false means user can edit or click
  //true means user cannot
  processing = false;

  //form instance stored in a variable 
  form;

  //user instance
  user;
  
  //subject posts
  subjectPosts;

  
  constructor(
    private formBuilder : FormBuilder, // instance of formbuilder for reactive forms
    private subjectService: SubjectService, // instance of subject service
    private authService: AuthService, // instance of authentication service
    private router: Router  // instance of router module
  ) 
  {
    //initializing the constructor with a form
    this.createNewSubjectForm();
  }

  ngOnInit() {
  }

  //Adding the new Subject
  onSubjectSubmit(){
    //disabling the user to edit the form
    this.processing = true;

    //creating a new subject
    const subject = {
      subjectNumber: this.form.get('subjectNumber').value,
      subjectName: this.form.get('subjectName').value,
      description: this.form.get('description').value
    }

    //calling the subejct service to create a new subejct
    this.subjectService.newSubject(subject).subscribe(data => {
      
      //if the operation is not successful
      if(!data.success) {

        //displaying the error feedback
        this.messageClass= 'alert alert-danger small';
        this.message = data.message;

        //enabling the form
        this.processing = false;
      } 
      //if successful
      else {

        //displaying the success feedback
        this.messageClass = 'alert alert-success small'
        this.message = data.message;

        setTimeout(() => {
          //enabling the form
          this.processing = false;

          //navigate back to all the subjects
          this.router.navigate(['/subjects']);

          //reseting the form
          this.form.reset();
        }, 2000);
      }
    });
    
  }

  //function for subject number validation
  subjectNumberValidation(controls){
    const regExp = new RegExp(/^[0-9]+$/); // regex for only numbers
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNumberValidation' : true }
    }
  }

  //function for subject name validation
  subjectNameValidation(controls){
    const regExp = new RegExp(/^[a-zA-Z0-9 ,.'-]+$/i); //regex for proper names
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'subjectNameValidation' : true }
    }
  }

  //function for creating a form
  createNewSubjectForm() {
    this.form = this.formBuilder.group({
      //subject Number field
      subjectNumber: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        this.subjectNumberValidation // validation defined above
      ])],
      //subject name field
      subjectName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(3),
        this.subjectNameValidation // validation defined above
      ])],
      //description field
      description: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(25000),
        Validators.minLength(8),
      ])],
    })
  }

  //function to revert and go back
  goBack()
  {
    window.location.reload();
  }

}
