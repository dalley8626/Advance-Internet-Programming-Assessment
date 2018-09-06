import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import {User} from '../../models/user';


@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  public user: User;

  constructor(
    private authService : AuthService,
    private router : Router
  ) { this.user = new User(); }

  ngOnInit() {
  }

  onLoginSubmit() {

    this.authService.authenticateUser(this.user).subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          console.log('You are logged in');
          this.router.navigate(['dashboard']);
        }
        else {
          alert('Wrong username password');
          console.log(data.msg);
          this.router.navigate(['login']);
        }
    })
  }

}
