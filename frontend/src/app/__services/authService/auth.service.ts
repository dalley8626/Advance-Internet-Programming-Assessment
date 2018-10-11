import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators/'
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //url for server
  domain = ""
  authToken: any;
  user: any;

  constructor(
    private http : Http,
    private router: Router
  ) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.domain + '/users/register', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  checkUsername(username){
    return this.http.get(this.domain + '/users/checkUsername/' + username).pipe(map(res => res.json()));
  }

  checkEmail(email){
    return this.http.get(this.domain + '/users/checkEmail/'+ email).pipe(map(res => res.json()));
  }

  checkSubjectNumber(subjectNumber){
    return this.http.get(this.domain + '/users/checkSubjectNumber/'+ subjectNumber).pipe(map(res => res.json()));
  }

  checkSubjectName(subjectName){
    return this.http.get(this.domain + '/users/checkSubjectName/'+ subjectName).pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(this.domain + '/users/authenticate', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  updateProfile(user) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.domain + '/users/profile/updateProfile', user, {headers : headers}).pipe(map(res => res.json()));
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.authToken);
    return this.http
      .get(this.domain + '/users/profile', {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    //Local storage can only store string
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  notLoggedIn(){
    const isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    return isExpired;
  }

  logout() {
    this.authToken = null;
    this.user= null;
    localStorage.clear(); 
  }

  checkUserType(){
    let user = JSON.parse(localStorage.getItem('user'));
    if (user.usertype == "admin")
    {
      return true;
    }
    return false;
  }  
}
