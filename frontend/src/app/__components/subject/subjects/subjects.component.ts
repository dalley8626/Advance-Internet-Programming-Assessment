import { Component, OnInit } from '@angular/core';

import { Subject } from '../../../__models/subject';
import { SubjectService } from '../../../__services/subjectService/subject.service';

import { NgxSpinnerService } from 'ngx-spinner'; 
import { timeInterval } from 'rxjs/operators';

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

  constructor(
    private subjectService: SubjectService, 
    private spinner : NgxSpinnerService
    ) { }

  ngOnInit() {
    this.spinner.show();
    this.getSubjects();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
  }, 1000); 
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
