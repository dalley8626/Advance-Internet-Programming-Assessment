import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'

@Component({
  selector: 'app-registering',
  templateUrl: './registering.component.html',
  styleUrls: ['./registering.component.css']
})
export class RegisteringComponent implements OnInit {
  name: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService) { }

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
      console.log('Please fill in all fields');
      return false;
    }

    //Validate Email
    if (!this.validateService.validateEmail(user.email))
    {
      console.log('Please use valid email');
      return false;
    }

  }

}
