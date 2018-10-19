import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../__services/validateService/validate.service'; //validation service
import { AuthService } from '../../../../__services/authService/auth.service';  //authentication service
import { Router } from '@angular/router'; //router module
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  //module for creating reactive forms

/**
 * This Component displays a register page and has functions for registering a user
 */
@Component({
  selector: 'app-registering',
  templateUrl: './registering.component.html',
  styleUrls: ['./registering.component.css']
})
export class RegisteringComponent implements OnInit {

  //instance of formGroup
  form: FormGroup;

  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
  //false means user can edit or click
  //true means user cannot
  processing;

  //variable to store boolean values reagarding the validity of the email
  emailValid;
  //error message or confirmation message
  emailMessage;

  //variable to store boolean values regarding the validity of the username
  usernameValid;
  //variable to store the message on the validity of username
  usernameMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm(); //creating the form at startt
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
    }, { validator: this.matchingPasswords('password', 'confirm_password') })
  }

  //Initialization
  ngOnInit() {
  }

  //On Register
  onRegisterSubmit() {
    //disabling the form
    this.processing = true;

    //creating a instance of the user
    const user = {
      first_name: this.form.get('first_name').value,
      last_name: this.form.get('last_name').value,
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value,
    }

    //registering a new user
    this.authService.registerUser(user).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        this.processing = false;
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000)
      }
    });
  }

  //validation for emails
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

  //matching the passwords for confirmaiton
  matchingPasswords(password, confirm_password) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirm_password].value) {
        return null;
      } else {
        return { 'matchingPasswords': true };
      }
    }
  }

  //check the availability of the email
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

  //checks the availability of the username
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
