import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../__services/authService/auth.service'; // authentication service
import { Router } from '@angular/router'; // router model
import { User } from '../../../../__models/user'; // user model
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'; //form modules to create reactive forms

/**
 * This Component consists of all the functions in relation to logging in to the system
 */
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})

export class LoggingComponent implements OnInit {


  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to disable or enable form so that user does not edit or submit the form simultaneously while the form is being procesed
  //false means user can edit or click
  //true means user cannot
  processing = false;

  //form instance stored in a variable 
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm(); // creating the form at start
  }

  ngOnInit() {
  }

  //function to create form (reactive)
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //function to disable the form when submitted once
  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['password'].disable();
  }

  //function to enable the form when submission failed
  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['password'].enable();
  }

  //On login function
  onLoginSubmit() {

    //disabling the form
    this.processing = true;
    this.disableForm();

    //creating a new instance of the user
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }

    //authenticating user
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      }
      else {
        //displaying message
        this.messageClass = 'alert alert-danger';
        this.message = data.message;

        //enabling the form if login failed so the user can edit the wrong input
        this.processing = false;
        this.enableForm();
      }
    })
  }

}
