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
  subjects;

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
      this.subjectPosts.forEach(function (subjectPost) {
        if (subjectPost.description.length > 100 ) {
          subjectPost.description = subjectPost.description.substring(0, 100) + '...';
          subjectPost.isVisible = true;
        }
      });
      this.spinner.hide();
      this.subjects = [...this.subjectPosts];

    })

  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });
    this.getAllSubjects();
  }

  search(value) {
    this.subjects = [];
    this.subjectPosts.forEach((element, index) => {
      if (element.subjectName.toUpperCase().indexOf(value.toUpperCase()) !== -1) {
        this.subjects.push(element);
      } else {}
    });
  }

}
