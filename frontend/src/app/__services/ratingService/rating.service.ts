import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of, Subject} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../messageService/message.service';
import {Rating} from '../../__models/rating';
import {Headers, RequestOptions} from '@angular/http';
import {AuthService} from '../authService/auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class RatingService {
  public ratingAdded_Observable = new Subject();
  private ratingsUrl = 'http://localhost:3000/ratings';  // URL to web api
  options;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private messageService: MessageService) { }

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
  getRatings (): Observable<Rating[]> {
    return this.http.get<Rating[]>(this.ratingsUrl);
  }

  /** GET rating by id. Return `undefined` when id not found */
  getRatingNo404<Data>(_id: number): Observable<Rating> {
    const url = `${this.ratingsUrl}/?id=${_id}`;
    return this.http.get<Rating[]>(url)
      .pipe(
        map(ratings => ratings[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} rating id=${_id}`);
        }),
        catchError(this.handleError<Rating>(`getRating _id=${_id}`))
      );
  }
  /** GET ratings from the server */
  getRatingsbySubjectID (subjectID: number): Observable<Rating[]> {
    this.createAuthenticationHeaders();
    console.log(subjectID);
    const url = `${this.ratingsUrl}/${subjectID}`;
    return this.http.get<Rating[]>(url);
  }
  /** GET rating by id. Will 404 if id not found */
  getRating(_id: number): Observable<Rating> {
    const url = `${this.ratingsUrl}/detail/${_id}`;
    return this.http.get<Rating>(url).pipe(
      tap(_ => this.log(`fetched rating id=${_id}`)),
      catchError(this.handleError<Rating>(`getRating id=${_id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new rating to the server */
  addRating (rating: Rating): Observable<Rating> {
    console.log(rating);
    return this.http.post<Rating>(`${this.ratingsUrl}/add/`, rating, httpOptions).pipe(
      tap((rating: Rating) => this.log(`added rating w/ id=${rating._id}`)),
      catchError(this.handleError<Rating>('addRating'))
    );
  }

  /** DELETE: delete the rating from the server */
  deleteRating (rating: Rating): Observable<Rating> {
    console.log(rating);
    const url = `${this.ratingsUrl}/delete/${rating._id}`;
    return this.http.delete<Rating>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted rating _id=${rating._id}`)),
      catchError(this.handleError<Rating>('deleteRating'))
    );
  }

  /** PUT: update the rating on the server */
  updateRating (rating: Rating): Observable<any> {
    return this.http.put(`${this.ratingsUrl}/update`, rating, httpOptions).pipe(
      tap(_ => this.log(`updated rating _id=${rating._id}`)),
      catchError(this.handleError<any>('updateRating'))
    );
  }
  notifyRatingAddition() {
    this.ratingAdded_Observable.next();
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a RatingService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RatingService: ${message}`);
  }
}
