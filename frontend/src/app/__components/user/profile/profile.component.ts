import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../__services/authService/auth.service'; //authentication service
import { ActivatedRoute, Router } from '@angular/router'; // Module to get the URL
import { Location } from '@angular/common'; // Location Module
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Subject} from '../../../__models/subject'; // Form Module
/**
 * This Component displays the user details and has functions to update/edit the profile of the user
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
  //false means user can edit or click
  //true means user cannot
  processing = false;

  //instance of the form
  form;

  //variable to store boolean values reagarding the validity of the email
  emailValid;
  //error message or confirmation message
  emailMessage;

  //variable to store boolean values regarding the validity of the username
  usernameValid;
  //variable to store the message on the validity of username
  usernameMessage;
  //instance of the user
  user;

  //variable to store Boolean value to either display the edit form or not
  loadEditForm = true;

  //variable to store the subject model
  subject: Subject;

  constructor(
    private formBuilder : FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authService: AuthService
  )
  {
    this.createForm(); // create form at the start
  }

  //Initialization
  ngOnInit() {
    //get profile
    this.authService.getProfile().subscribe(data => {
    if(!data.success) {
      this.messageClass = 'alert alert-danger';
        this.message = 'User Not found';
    } else {
      //success
      this.user = data.user;
    }
    }
  )
  }
  
  //function to display edit user form
  editUserForm(){
    this.loadEditForm = false
  }

  //function to create form
  createForm() {
    this.form = this.formBuilder.group({
      first_name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        this.validateName
      ])],
      last_name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        this.validateName
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        this.validateEmails
      ])],
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
        this.validateUsername
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(80),
        this.validatePassword
      ])],
      confirm_password: ['', Validators.required]
    }, { validator: this.matchingPasswords('password', 'confirm_password') });
  }

  //function to go back
  goBack()
  {
    this.loadEditForm = true;
  }

  //function to update the user
  updateUserSubmit()
  {
    //disabling the form
    this.processing = true;

    //updating the user details
    this.authService.updateProfile(this.user).subscribe(data => {
      if(!data.success){
        //failure
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
      } else {
        //success
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(()=>{
          this.location.back();
        },2000)
      }
    });
  }

  //validation for email
  validateEmails(controls) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(String(controls.value))) {
      return null;
    } else {
      return { 'validateEmails': true };
    }
  }

  //validation for username
  validateUsername(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateUsername': true };
    }
  }

  //validation for first name and last name
  validateName(controls) {
    const regExp = new RegExp(/^[a-zA-Z]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateName': true };
    }
  }
  
  //validation for password
  validatePassword(controls) {
    const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validatePassword': true };
    }
  }

  //comparing two passord to match
  matchingPasswords(password, confirm_password) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirm_password].value) {
        return null;
      } else {
        return { 'matchingPasswords': true };
      }
    }
  }

  //checking email if it is present or not
  checkEmail() {
    const email = this.form.get('email').value;
    if (email.length !== 0) {
      this.authService.checkEmail(email).subscribe(data => {
        if (!data.success) {
          this.emailValid = false;
          this.emailMessage = data.message;
        } else {
          this.emailValid = true;
          this.emailMessage = data.message;
        }
      });
    }
  }

  //checking username if it is available or not
  checkUsername() {
    const username = this.form.get('username').value;
    if (username.length !== 0) {
      this.authService.checkUsername(username).subscribe(data => {
        if (!data.success) {
          this.usernameValid = false;
          this.usernameMessage = data.message;
        } else {
          this.usernameValid = true;
          this.usernameMessage = data.message;
        }
      });
    }
  }
}
