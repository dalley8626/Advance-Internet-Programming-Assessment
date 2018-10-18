import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './../authService/auth.service';
import { map } from 'rxjs/operators/';
import {Subject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubjectService {
  public subject_Observable = new Subject();
  domain = this.authService.domain; // URL to web api

  constructor(
    private authService: AuthService,
    private http: Http
    ) { }

  notifySubject() {
    this.authService.loadAuthenticationHeaders();
    this.subject_Observable.next();
  }
  newSubject(subject) {
    this.authService.loadAuthenticationHeaders();
    return this.http.post(this.domain + '/subjects/addSubject', subject, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  getAllSubjects() {
    this.authService.loadAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/allSubjects', {headers:this.authService.headers})
    .pipe(map(res => res.json()));
  }

  getDashboardSubjects() {
    this.authService.loadAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/dashboard', {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  getSingleSubject(id) {
    this.authService.loadAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/singleSubject/' + id, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  editSubject(subject) {
    this.authService.loadAuthenticationHeaders();
    return this.http.put(this.domain + '/subjects/updateSubject', subject, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  deleteSubject(id) {
    this.authService.loadAuthenticationHeaders();
    return this.http.delete(this.domain + '/subjects/deleteSubject/' + id, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

}
