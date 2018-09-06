import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Subject } from '../models/subject';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SubjectService {

  private subjectsUrl = 'http://localhost:3000/subjects';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET subjects from the server */
  getSubjects (): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsUrl);
  }

  /** GET subject by id. Return `undefined` when id not found */
  getSubjectNo404<Data>(subjectCode: number): Observable<Subject> {
    const url = `${this.subjectsUrl}/?id=${subjectCode}`;
    return this.http.get<Subject[]>(url)
      .pipe(
        map(subjects => subjects[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} subject id=${subjectCode}`);
        }),
        catchError(this.handleError<Subject>(`getSubject subjectCode=${subjectCode}`))
      );
  }

  /** GET subject by id. Will 404 if id not found */
  getSubject(subjectCode: number): Observable<Subject> {
    const url = `${this.subjectsUrl}/detail/${subjectCode}`;
    return this.http.get<Subject>(url).pipe(
      tap(_ => this.log(`fetched subject id=${subjectCode}`)),
      catchError(this.handleError<Subject>(`getSubject id=${subjectCode}`))
    );
  }

  /* GET subjects whose name contains search term */
  searchSubjects(term: string): Observable<Subject[]> {
    if (!term.trim()) {
      // if not search term, return empty subject array.
      return of([]);
    }
    return this.http.get<Subject[]>(`${this.subjectsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found subjects matching "${term}"`)),
      catchError(this.handleError<Subject[]>('searchSubjects', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new subject to the server */
  addSubject (subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(`${this.subjectsUrl}/add/`, subject, httpOptions).pipe(
      tap((subject: Subject) => this.log(`added subject w/ id=${subject.subjectCode}`)),
      catchError(this.handleError<Subject>('addSubject'))
    );
  }

  /** DELETE: delete the subject from the server */
  deleteSubject (subject: Subject): Observable<Subject> {
    const _id = subject._id;
    const url = `${this.subjectsUrl}/delete/${_id}`;
    return this.http.delete<Subject>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted subject subjectCode=${_id}`)),
      catchError(this.handleError<Subject>('deleteSubject'))
    );
  }

  /** PUT: update the subject on the server */
  updateSubject (subject: Subject): Observable<any> {
    return this.http.put(`${this.subjectsUrl}/update`, subject, httpOptions).pipe(
      tap(_ => this.log(`updated subject subjectCode=${subject.subjectCode}`)),
      catchError(this.handleError<any>('updateSubject'))
    );
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

  /** Log a SubjectService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SubjectService: ${message}`);
  }
}
