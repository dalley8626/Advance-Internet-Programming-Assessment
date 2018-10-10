import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../__services/authService/auth.service';
import { Router } from '@angular/router'
import { User } from '../../../../__models/user';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  
  messageClass;
  message;
  processing = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private router : Router
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
  }

  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
  }

  onLoginSubmit() {

    this.processing = true;
    this.disableForm();

    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    this.authService.authenticateUser(user).subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['/dashboard']);
        }
        else {
          this.messageClass = 'alert alert-danger';
          this.message = data.message;
          this.processing = false;
          this.enableForm();
        }
    })
  }

}
