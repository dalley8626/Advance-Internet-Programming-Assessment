import { Component, OnInit } from '@angular/core';

import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

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
      .subscribe(subjects => this.subjects = subjects);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.subjectService.addSubject({ name } as Subject)
      .subscribe(subject => {
        this.subjects.push(subject);
      });
  }

  delete(subject: Subject): void {
    this.subjects = this.subjects.filter(s => s !== subject);
    this.subjectService.deleteSubject(subject).subscribe();
  }

}