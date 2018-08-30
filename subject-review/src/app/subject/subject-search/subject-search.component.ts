import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Subject as SubjectM } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';

/**
 * This component enables user to search subjects.
 */
@Component({
  selector: 'app-subject-search',
  templateUrl: './subject-search.component.html',
  styleUrls: [ './subject-search.component.css' ]
})
export class SubjectSearchComponent implements OnInit {
  subjects$: Observable<SubjectM[]>;
  private searchTerms = new Subject<string>();

  constructor(private subjectService: SubjectService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.subjects$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.subjectService.searchSubjects(term)),
    );
  }
}