import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

import {Observable, Subject} from 'rxjs';

import {Rating} from '../../__models/rating';
import {Headers, RequestOptions} from '@angular/http';
import {AuthService} from '../authService/auth.service';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class RatingService {
  public rating_Observable = new Subject();
  domain = this.authService.domain; // URL to web api
  private ratingsUrl = this.domain + '/ratings';  // URL to web api
  options;

  constructor(
    private http: Http,
    private authService: AuthService) {
  }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  /** GET ratings from the server */
  getRatingsbySubjectID(subjectID: number): Observable<Rating[]> {
    this.createAuthenticationHeaders();
    const url = `${this.ratingsUrl}/${subjectID}`;
    return this.http.get(url).pipe(map(res => res.json()));
  }

  //////// Save methods //////////

  /** POST: add a new rating to the server */
  addRating(rating: Rating): Observable<Rating> {
    console.log(rating);
    return this.http.post(`${this.ratingsUrl}/add/`, rating, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  /** DELETE: delete the rating from the server */
  deleteRating(rating: Rating): Observable<Rating> {
    console.log(rating);
    const url = `${this.ratingsUrl}/delete/${rating._id}`;
    return this.http.delete(url, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  /** PUT: update the rating on the server */
  updateRating(rating: Rating): Observable<any> {
    return this.http.put(`${this.ratingsUrl}/update`, rating, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  notifyRating() {
    this.rating_Observable.next();
  }

  getDashboardRatings() {
    this.createAuthenticationHeaders();
    return this.http.get(this.ratingsUrl + '/dashboard', {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }
}
