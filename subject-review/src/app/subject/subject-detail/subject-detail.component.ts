import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subject }         from '../../models/subject';
import { SubjectService } from '../../services/subject.service';

/**
 * This component displays the detail of the subject, 
 * and allows to edit the subject information.
 */
@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: [ './subject-detail.component.css' ]
})
export class SubjectDetailComponent implements OnInit {
  @Input() subject: Subject;

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private location: Location
  ) { this.subject = new Subject(); }

  ngOnInit(): void {
    this.getSubject();
  }

  getSubject(): void {
    // show the specific subject by capturing the subjectCode from the route
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id)
      .subscribe(subject => this.subject = subject['data']);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.subjectService.updateSubject(this.subject)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.subjectService.deleteSubject(this.subject)
      .subscribe(() => this.goBack());
  }
}

