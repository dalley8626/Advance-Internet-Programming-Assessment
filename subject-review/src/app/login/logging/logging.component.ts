import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
  providers: [ LoginService ]
})
export class LoggingComponent {
  public user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  validateLogin() {
    if(this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Wrong username password');
        }

      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('enter user name and password');
    }
  }
}

