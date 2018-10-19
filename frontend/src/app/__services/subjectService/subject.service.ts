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

  //This methods notify the observable
  //It allows subject to know that this subject has been modifed
  notifySubject() {
    this.authService.loadAuthenticationHeaders();
    this.subject_Observable.next();
  }

  //This method creates a new subject 
  newSubject(subject) {
    this.authService.loadAuthenticationHeaders();
    return this.http.post(this.domain + '/subjects/addSubject', subject, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  //This method gets all the subject in the database
  getAllSubjects() {
    this.authService.loadAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/allSubjects', {headers:this.authService.headers})
    .pipe(map(res => res.json()));
  }

  //This method gets the subject dashboard(the four subjects which has the highest ratings)
  getDashboardSubjects() {
    this.authService.loadAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/dashboard', {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  //This method gets a subject subject by id
  getSingleSubject(id) {
    this.authService.loadAuthenticationHeaders();
    return this.http.get(this.domain + '/subjects/singleSubject/' + id, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  //This method modifies the content of the subject
  editSubject(subject) {
    this.authService.loadAuthenticationHeaders();
    return this.http.put(this.domain + '/subjects/updateSubject', subject, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  //This method delete the subject
  deleteSubject(id) {
    this.authService.loadAuthenticationHeaders();
    return this.http.delete(this.domain + '/subjects/deleteSubject/' + id, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

}
