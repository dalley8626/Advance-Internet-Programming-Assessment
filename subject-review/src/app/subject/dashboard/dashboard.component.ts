import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

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
      .subscribe(subjects => this.subjects = subjects.slice(1, 5));
  }
}