import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../__models/subject';
import { SubjectService } from '../../../__services/subjectService/subject.service';

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

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getSubjects()
    // TODO, it is shoing first four subjects but later it is to display the best rated subjects
      .subscribe(result => this.subjects = result['data'].slice(1, 5));
  }
}
