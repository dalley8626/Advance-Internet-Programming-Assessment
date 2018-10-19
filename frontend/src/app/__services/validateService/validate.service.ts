import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  //This method validations the input form in the registration of the user
  //It checks if the user name,email, and password is undefined
  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.password == undefined) {
      console.log('no Error');
        return false;
    } else {
      console.log("Error")
      return true;
    }     
  }
}
