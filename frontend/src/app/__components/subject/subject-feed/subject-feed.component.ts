import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../../__services/subjectService/subject.service';  // subject service component
import { AuthService } from './../../../__services/authService/auth.service'; // authentication service component
import { NgxSpinnerService } from 'ngx-spinner'; //spinner service
import {Subject} from '../../../__models/subject';
import {Rating} from '../../../__models/rating';


@Component({
  selector: 'app-subject-feed',
  templateUrl: './subject-feed.component.html',
  styleUrls: ['./subject-feed.component.css']
})
export class SubjectFeedComponent implements OnInit {

  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to store the instance of the user model
  user;


  //variable to store the instance of the rating model
  rating: Rating;

  //variable to store the rating percentage
  percentageRating;

  //variable to store the subject instances of subject model; an array
  subjects: Subject[];
  subjectPosts: Subject[];

  constructor(
    private subjectService: SubjectService, //subject service
    private authService: AuthService, // authentication service
    private spinner: NgxSpinnerService  // spinner service
  ) {
  }

  ngOnInit() {
    //getting the profile of the user
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });

    //getting all the subejcts form the database
    this.getAllSubjects();
  }


  //function to get all the subjects from the databse
  getAllSubjects() {
    this.spinner.show();

    //invoking the function from subject service to retrieve all data
    this.subjectService.getAllSubjects().subscribe(data => {
      //assigning the subjects to the array variable defined in the class
      this.subjectPosts = data.subjects;

      //looping through those data
      this.subjectPosts.forEach(function (subjectPost) {
        //minifying the description of the subject
        if (subjectPost.description.length > 100) {
          subjectPost.description = subjectPost.description.substring(0, 100) + '...';
        }
      });
      this.spinner.hide();
      this.subjects = [...this.subjectPosts];
    });

  }

  //function to search the subject with respect to subject name
  search(value) {
    //emptying the array
    this.subjects = [];
    //looping through all the subjects
    this.subjectPosts.forEach((element, index) => {
      if (element.subjectName.toUpperCase().indexOf(value.toUpperCase()) !== -1) {
        //adding into the array
        this.subjects.push(element);
      } else { }
    });
  }

}
