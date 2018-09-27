import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../../__services/subjectService/subject.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {

  message;
  messageClass;
  subject;

  foundSubject = false;
  currentUrl;

  constructor(
    private subjectService: SubjectService,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params;
    if(!this.currentUrl.id)
    {
      this.messageClass = 'alert-danger';
      this.message = 'No id provided';
    } else {
      this.foundSubject = true;
    }
  }

  deleteSubject() {
    this.subjectService.deleteSubject(this.currentUrl.id).subscribe(data => {
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(()=>{
          this.router.navigate(['/subjects']);
        },2000)
      }
    })
  }

  goBack(){
    this.location.back();
  }
}
