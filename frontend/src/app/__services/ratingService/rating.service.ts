import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable, Subject} from 'rxjs';
import {Rating} from '../../__models/rating';
import {AuthService} from '../authService/auth.service';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RatingService {
  public rating_Observable = new Subject();
  domain = this.authService.domain; // URL to web api
  private ratingsUrl = this.domain + '/ratings';  // URL to web api

  constructor(
    private http: Http,
    private authService: AuthService) {
  }


  /** GET ratings from the server */
  getRatingsbySubjectID(subjectID: number): Observable<Rating[]> {
    this.authService.loadAuthenticationHeaders();
    const url = `${this.ratingsUrl}/${subjectID}`;
    return this.http.get(url,{headers:this.authService.headers}).pipe(map(res => res.json()));
  }

  //////// Save methods //////////

  /** POST: add a new rating to the server */
  addRating(rating: Rating): Observable<Rating> {
    console.log(rating);
    this.authService.loadAuthenticationHeaders();
    return this.http.post(`${this.ratingsUrl}/add/`, rating, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  /** DELETE: delete the rating from the server */
  deleteRating(rating: Rating): Observable<Rating> {
    console.log(rating);
    this.authService.loadAuthenticationHeaders();
    const url = `${this.ratingsUrl}/delete/${rating._id}`;
    return this.http.delete(url, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  /** PUT: update the rating on the server */
  updateRating(rating: Rating): Observable<Rating> {
    this.authService.loadAuthenticationHeaders();
    return this.http.put(`${this.ratingsUrl}/update`, rating, {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }

  notifyRating() {
    this.rating_Observable.next();
  }

  //This method gets the recent ratings that were made
  getDashboardRatings() {
    this.authService.loadAuthenticationHeaders();
    return this.http.get(this.ratingsUrl + '/dashboard', {headers: this.authService.headers})
      .pipe(map(res => res.json()));
  }
}
