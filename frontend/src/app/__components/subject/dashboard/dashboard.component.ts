import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../../__services/subjectService/subject.service';
import {Subject} from '../../../__models/subject';
import {RatingService} from '../../../__services/ratingService/rating.service';
import {Rating} from '../../../__models/rating';
// import { Subject } from '../../../__models/subject';
// import { SubjectService } from '../../../__services/subjectService/subject.service';

/**
 * This component displays subject components.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  subjects: Subject[] = [];
  ratings: Rating[] = [];

  constructor(private subjectService: SubjectService, private ratingService: RatingService) { }

  ngOnInit() {
    this.getSubjects();
    this.getRatings();
  }

  getSubjects(): void {
    this.subjectService.getDashboardSubjects()
    // TODO, it is shoing first four subjects but later it is to display the best rated subjects
      .subscribe(result => this.subjects = result['subjects'].slice(0, 5));
  }
  getRatings(): void {
    this.ratingService.getDashboardRatings()
    // TODO, it is shoing first four subjects but later it is to display the best rated subjects
      .subscribe(result => this.ratings = result['ratings'].slice(0, 5));
  }
}
