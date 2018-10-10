import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../__services/authService/auth.service';
import { Router } from '@angular/router'

import { FlashMessagesService } from 'angular2-flash-messages';
import {User} from '../../../__models/user';

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

  user: User;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  //User logout function implemented here.
  onClickLogout() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {cssClass: 'alert-success small'});
    console.log('You are logged out');
    this.router.navigate(['/login']);
    return false;
  }

}
