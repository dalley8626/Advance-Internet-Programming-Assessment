import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.password == undefined) {
      console.log('no Error');
        return false;
    } else {
      console.log("Error")
      return true;
    }     
  }

  //Regex email validation to ensure that it uses correct email format
  // validateEmail(controls) {
  //   //Regex email validation
  //   console.log("hello");
  // }
}
