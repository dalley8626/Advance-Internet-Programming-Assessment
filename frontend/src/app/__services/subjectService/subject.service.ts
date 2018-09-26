import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './../authService/auth.service';
import { map } from 'rxjs/operators/';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SubjectService {

  options;
  domain = this.authService.domain;

  private subjectsUrl = 'http://localhost:3000/subjects';  // URL to web api

  constructor(
    private authService: AuthService,
    private http: Http
    ) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  newSubject(subject){
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + '/subjects/addSubject', subject, this.options).pipe(map(res => res.json()));
  }

  getAllSubjects() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/allSubjects', this.options).pipe(map(res => res.json()));
  }

}
