import { Component, OnInit } from '@angular/core';

import { SubjectService } from './../../../__services/subjectService/subject.service';
import { AuthService } from './../../../__services/authService/auth.service';

import { NgxSpinnerService } from 'ngx-spinner'


@Component({
  selector: 'app-subject-feed',
  templateUrl: './subject-feed.component.html',
  styleUrls: ['./subject-feed.component.css']
})
export class SubjectFeedComponent implements OnInit{

  message;
  messageClass;
  user;
  
  subjectPosts;

  rating;
  maximumPossibleRating;
  numberOfreview;
  percentageRating;
  percentageRatingRounded;
  
  constructor(
    private subjectService: SubjectService,
    private authService: AuthService,
    private spinner : NgxSpinnerService
  ) 
  {
    
  }

  getAllSubjects() {
    this.spinner.show();
    
    this.subjectService.getAllSubjects().subscribe(data => {
      this.subjectPosts = data.subjects;
      this.spinner.hide();
    })

  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });
    
    this.getAllSubjects();
  }

}
