import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../__services/validateService/validate.service';
import { AuthService } from '../../../../__services/authService/auth.service';
import { Router } from '@angular/router';

// import { NgFlashMessageService } from 'ng-flash-messages'

@Component({
  selector: 'app-registering',
  templateUrl: './registering.component.html',
  styleUrls: ['./registering.component.css']
})
export class RegisteringComponent implements OnInit {
  name: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    // private flashMessageService : NgFlashMessageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      
    }

    //Required Fields
    if (!this.validateService.validateRegister(user))
    {
      // this.flashMessageService.showFlashMessage({messages:["Please fill in all fields"], dismissible:true, timeout:3000, type:'danger'});
      console.log('please fill all fields');
      return false;
    }

    //Validate Email
    if (!this.validateService.validateEmail(user.email))
    {
      // this.flashMessageService.showFlashMessage({messages:["Please use a valid email address"], dismissible:true, timeout:3000, type:'danger'});
      console.log('please fill a correct email format')
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log('You are registered');
        this.router.navigate(['/login'])
      } else {
        console.log('Something went wrong');
        this.router.navigate(['/register'])
      }
    });

  }

}
