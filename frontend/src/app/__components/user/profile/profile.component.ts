import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../__services/authService/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  message;
  messageClass;

  processing = false;
  currentUrl;
  form;

  emailValid;
  emailMessage;

  usernameValid;
  usernameMessage;

  user;

  loadEditForm = true;

  subject;

  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) 
  {
    this.createForm();

  }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
    if(!data.success){
      this.messageClass= 'alert alert-danger';
        this.message = "User Not found";
    } else {
      this.user = data.user;
    }
    }
  )
  }
  
  editUserForm(){
    this.loadEditForm = false
  }
  createForm() {
    this.form = this.formBuilder.group({
      f_name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        this.validateName
      ])],
      l_name: ['', Validators.compose([
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

  goBack()
  {
    this.loadEditForm=true;
  }

  updateSubjectSubmit()
  {
    this.processing = true;
    this.authService.updateProfile(this.user).subscribe(data => {
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

  validateEmails(controls) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(String(controls.value))) {
      return null;
    } else {
      return { 'validateEmails': true };
    }
  }

  validateUsername(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateUsername': true };
    }
  }

  validateName(controls) {
    const regExp = new RegExp(/^[a-zA-Z]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateName': true };
    }
  }

  validatePassword(controls) {
    const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validatePassword': true };
    }
  }


  matchingPasswords(password, confirm_password) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[confirm_password].value) {
        return null;
      } else {
        return { 'matchingPasswords': true };
      }
    }
  }

  checkEmail() {
    const email = this.form.get('email').value;
    if (email.length != 0) {
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

  checkUsername() {
    const username = this.form.get('username').value;
    if (username.length != 0) {
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
