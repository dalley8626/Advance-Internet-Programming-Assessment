import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../__services/authService/auth.service'; // authentication service
import { Router } from '@angular/router'; //router module
import { FlashMessagesService } from 'angular2-flash-messages'; //flash message service
import {User} from '../../../__models/user'; // user model

/**
 * This component displays header to the root layout,
 * so that it can be displayed throughout the pages.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //variable to store the user model
  user: User;

  constructor(
    public authService: AuthService, // instance of authentication service
    private router: Router, // instance of router module
    private flashMessagesService: FlashMessagesService // instance of flash service
  ) {
    
   }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); // getting user information
  }

  //User logout function
  onClickLogout() {

    this.authService.logout();

    //display flash message of logging out
    this.flashMessagesService.show('You are logged out', {cssClass: 'alert-success small'});

    //navigate back to login page
    this.router.navigate(['/login']);
    return false;
  }

  //checking user type if it is admin to display required menu items
  checkUserType(){
    if (this.user.usertype == "admin")
    {
      return true;
    }
    return false;
  }

}
