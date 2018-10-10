import { Component } from '@angular/core';
import { AuthService } from './__services/authService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subject-review';

  constructor(public authService: AuthService){}

}
