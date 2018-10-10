import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './../authService/auth.service';
import { map } from 'rxjs/operators/';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubjectService {
  public subjectAdded_Observable = new Subject();
  options;
  domain = this.authService.domain;// URL to web api

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
  notifySubjectAddition() {
    this.createAuthenticationHeaders();
    this.subjectAdded_Observable.next();
  }
  newSubject(subject){
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + '/subjects/addSubject', subject, this.options).pipe(map(res => res.json()));
  }

  getAllSubjects() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/allSubjects', this.options).pipe(map(res => res.json()));
  }

  getDashboardSubjects() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/dashboard', this.options).pipe(map(res => res.json()));
  }

  getSingleSubject(id) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/singleSubject/' + id, this.options).pipe(map(res => res.json()));
  }

  editSubject(subject) {
    this.createAuthenticationHeaders();
    return this.http.put(this.domain + '/subjects/updateSubject', subject, this.options).pipe(map(res => res.json()));
  }

  deleteSubject(id) {
    this.createAuthenticationHeaders();
    return this.http.delete(this.domain + '/subjects/deleteSubject/' + id, this.options).pipe(map(res => res.json()));
  }

  postReview(id, reviewComment, reviewRating) {
    this.createAuthenticationHeaders();
    const subjectData = {
      reviewComment: reviewComment,
      reviewRating: reviewRating
    }
    return this.http.post(this.domain + 'subjects/addreview/'+id, subjectData,this.options).pipe(map(res => res.json()));
  }
}
