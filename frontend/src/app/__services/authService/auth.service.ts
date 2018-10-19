import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators/';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // url for server
  domain = 'http://localhost:8080';
  authToken: any;
  user: any;
  headers;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  //This method uses for registration of the user
  //It creates a new jwt header and append when the user is registered
  //And make post request to the backend api
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.domain + '/users/register', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  //This method checks the username
  checkUsername(username) {
    return this.http.get(this.domain + '/users/checkUsername/' + username).pipe(map(res => res.json()));
  }

  //This method checks the email address
  checkEmail(email) {
    return this.http.get(this.domain + '/users/checkEmail/' + email).pipe(map(res => res.json()));
  }

  //This method checks the subject number
  checkSubjectNumber(subjectNumber) {
    return this.http.get(this.domain + '/users/checkSubjectNumber/' + subjectNumber).pipe(map(res => res.json()));
  }

  //This method checks subject Name
  checkSubjectName(subjectName) {
    return this.http.get(this.domain + '/users/checkSubjectName/' + subjectName).pipe(map(res => res.json()));
  }

  //This method authenticates the users
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.domain + '/users/authenticate', user, {headers: headers})
      .pipe(map(res => res.json()));
  }


  //This method updates the user profile
  updateProfile(user) {
    this.loadAuthenticationHeaders();
    return this.http.put(this.domain + '/users/profile/updateProfile', user, {headers : this.headers})
      .pipe(map(res => res.json()));
  }

  //This method generates a new header
  //Load the token
  //Append the header
  loadAuthenticationHeaders() {
    this.headers = new Headers();
    this.loadToken();
    this.headers.append('Authorization', this.authToken);
    this.headers.append('Content-Type', 'application/json');
  }

  //This method gets the user profile
  getProfile() {
    this.loadAuthenticationHeaders();
    return this.http
      .get(this.domain + '/users/profile', {headers: this.headers})
      .pipe(map(res => res.json()));
  }

  //This method stores the user data(jwt token, and user information) in the local storage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    // Local storage can only store string
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  //This method loads the token from the local storage that was generated
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  //This method check if the token has been expired
  notLoggedIn() {
    const isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    return isExpired;
  }

  //This method clears the localstorage of user data(jwt header, user information)
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  //This method checks the user type, if it is admin or normal user
  checkUserType() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user.usertype === 'admin') {
      return true;
    }
    return false;
  }
}
