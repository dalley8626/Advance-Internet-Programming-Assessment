import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../__services/subjectService/subject.service';
import { Subject } from '../../../__models/subject';
import { RatingService } from '../../../__services/ratingService/rating.service';
import { Rating } from '../../../__models/rating';
// import { Subject } from '../../../__models/subject';
// import { SubjectService } from '../../../__services/subjectService/subject.service';
import { NgxSpinnerService } from 'ngx-spinner'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../__services/authService/auth.service';

/**
 * This component displays subject components.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subjects: Subject[] = [];
  ratings: Rating[] = [];

  form;

  searchedSubject: Subject[] = [];
  displaySearch;
  doNotDisplaySearch;

  constructor(private subjectService: SubjectService,
    private ratingService: RatingService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getSubjects();
    this.getRatings();
  }

  getSubjects(): void {
    this.spinner.show();
    this.subjectService.getDashboardSubjects()
      // TODO, it is shoing first four subjects but later it is to display the best rated subjects
      .subscribe(result => this.subjects = result['subjects'].slice(0, 4));

    setTimeout(() =>
      this.spinner.hide(), 1000
    )
  }
  getRatings(): void {
    this.ratingService.getDashboardRatings()
      // TODO, it is shoing first four subjects but later it is to display the best rated subjects
      .subscribe(result => this.ratings = result['ratings'].slice(0, 4));
  }

  createForm() {
    this.form = this.formBuilder.group({
      searchType: [''],
      subjectDetail: [''],
    })
  }

  checkSubject() {
    this.spinner.show();
    const subjectDetail = this.form.get('subjectDetail').value;
    const searchType = this.form.get('searchType').value;

    if (searchType === "subjectNumber" && subjectDetail.length != 0) {
      this.authService.checkSubjectNumber(subjectDetail).subscribe(data => {
        if (data.success) {
          if (data.subjects.length > 0) {
            this.searchedSubject = data.subjects;
            this.displaySearch = true;
            this.doNotDisplaySearch = false;
          }
          else {
            this.displaySearch = false;
            this.doNotDisplaySearch = true;
          }
        }
        else {
          this.doNotDisplaySearch = true;
          this.displaySearch = false;
        }
      })
    }
    else if (searchType === "subjectName" && subjectDetail.length != 0) {
      this.authService.checkSubjectName(subjectDetail).subscribe(data => {
        if (data.success) {
          if (data.subjects.length > 0) {
            this.searchedSubject = data.subjects;
            this.displaySearch = true;
            this.doNotDisplaySearch = false;
          }
          else {
            this.displaySearch = false;
            this.doNotDisplaySearch = true;
          }
        }
        else {
          this.doNotDisplaySearch = true;
          this.displaySearch = false;
        }
      })
    } else {
      this.doNotDisplaySearch = true;
      this.displaySearch = false;
    }

    setTimeout(() =>
    this.spinner.hide(), 500
  )
  }
}
