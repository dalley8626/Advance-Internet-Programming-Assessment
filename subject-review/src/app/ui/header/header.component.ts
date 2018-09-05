import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

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

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }
  //User logout function implemented here.
  onClickLogout() {
    this.authService.logout();
    console.log('You are logged out');
    this.router.navigate(['/login']);
    return false;
  }

}
