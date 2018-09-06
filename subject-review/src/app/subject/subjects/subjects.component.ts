import { Component, OnInit } from '@angular/core';

import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';

/**
 * This component allows user to add/delete subject.
 */
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getSubjects()
      .subscribe(result => this.subjects = result['data']);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.subjectService.addSubject({ subjectName: name } as Subject)
      .subscribe(subject => {
        this.subjects.push(subject);
      });
  }

  delete(subject: Subject): void {
    this.subjects = this.subjects.filter(s => s !== subject);
    this.subjectService.deleteSubject(subject).subscribe();
  }

}
