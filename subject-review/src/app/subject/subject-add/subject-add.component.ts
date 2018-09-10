import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Router} from '@angular/router';
import {Subject} from '../../models/subject';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
  public subject: Subject;

  constructor(private subjectService: SubjectService, private router: Router) { this.subject = new Subject(); }

  ngOnInit() {
  }

  addSubject() {
    if (this.subject.subjectCode && this.subject.subjectName) {
      this.subjectService.addSubject(this.subject).subscribe(res => {
        console.log('response is ', res);
        if (res['status'] === 'success') {
          this.router.navigate(['/subjects']);
        } else {
          alert('Attempt failed, try again.');
        }
      }, error => {
        console.log('error is', error);
      });
    } else {
      alert('Subject code and Subject name required');
    }
  }

}
