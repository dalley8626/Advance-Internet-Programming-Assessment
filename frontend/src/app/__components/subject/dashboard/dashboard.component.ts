import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../__services/subjectService/subject.service'; //subject service
import { Subject } from '../../../__models/subject'; //subject model
import { RatingService } from '../../../__services/ratingService/rating.service'; //rating service
import { Rating } from '../../../__models/rating'; //rating model
import { NgxSpinnerService } from 'ngx-spinner'; //spinner service
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // modules for building forms
import { AuthService } from '../../../__services/authService/auth.service'; //authentication service

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



//This component is the dashboard which displays search bar, high rated subject and recent ratings. 
export class DashboardComponent implements OnInit {

  //subjects variable to load the Subject Details
  subjects: Subject[] = [];

  //ratings variable to load the Rating Details
  ratings: Rating[] = [];

  //form instance stored in a variable
  form;

  //variable to store the result (subjects) of the search
  searchedSubject: Subject[] = [];

  //a boolean variable to hide and unhide a div which shows the result of the search bar
  displaySearch;

  //a boolean variable to hide or show the div that contains errors
  doNotDisplaySearch;

  //constructor
  constructor(
    private subjectService: SubjectService, // instance of Subject Service
    private ratingService: RatingService, // instance of Rating Service
    private spinner: NgxSpinnerService, // instance of Spinner service
    private formBuilder: FormBuilder, // instance of form Builder (used to make Reactive Forms)
    private authService: AuthService  // instance of authentication service
  ) { }

  //on initialization
  ngOnInit() {
    //creating a form
    this.createForm();

    //getting the highly rated subjects
    this.getSubjects();

    //getting the recent ratings
    this.getRatings();
  }

  //function to load highly rated subject
  getSubjects(): void {
    //display spinner
    this.spinner.show();

    //calling the subject service to get the subject data
    this.subjectService.getDashboardSubjects()
      // Displaying the top 4 highy rated subject
      .subscribe(result => this.subjects = result['subjects'].slice(0, 4));

    //timeour for the spinner
    setTimeout(() =>
      //hide spinner
      this.spinner.hide(), 1000
    )
  }
  
  //function to load the recent ratings
  getRatings(): void {

    //calling the rating service to get the rating data
    this.ratingService.getDashboardRatings()
      // Displaying 4 recent ratings
      .subscribe(result => this.ratings = result['ratings'].slice(0, 4));
  }

  //function to create a reactive form
  createForm() {
    this.form = this.formBuilder.group({
      searchType: [''], //searchType Field
      subjectDetail: [''],  //subjectDetail Field
    })
  }

  //function to search for the subject
  checkSubject() {
    //spinner display
    this.spinner.show();
    const subjectDetail = this.form.get('subjectDetail').value; //get data from the search bar
    const searchType = this.form.get('searchType').value; //get data from the search type beside the search bar

    //if the search type is subject number => search the database by subject Number
    if (searchType === "subjectNumber" && subjectDetail.length != 0) {
      this.authService.checkSubjectNumber(subjectDetail).subscribe(data => {
        //if the search is a success
        if (data.success) {
          //if the result more than 0 data we display search results
          if (data.subjects.length > 0) {
            this.searchedSubject = data.subjects;
            this.displaySearch = true;
            this.doNotDisplaySearch = false;
          }
          //display No Result
          else {
            this.displaySearch = false;
            this.doNotDisplaySearch = true;
          }
        }
        //display No Result
        else {
          this.doNotDisplaySearch = true;
          this.displaySearch = false;
        }
      })
    }
    //if the search type is subject Name => search the database by subject name
    else if (searchType === "subjectName" && subjectDetail.length != 0) {
      this.authService.checkSubjectName(subjectDetail).subscribe(data => {
        //if the search is success
        if (data.success) {
          //if there are more than 1 items found
          if (data.subjects.length > 0) {
            this.searchedSubject = data.subjects;
            this.displaySearch = true;
            this.doNotDisplaySearch = false;
          }
          //display no result
          else {
            this.displaySearch = false;
            this.doNotDisplaySearch = true;
          }
        }
        //display no result
        else {
          this.displaySearch = false;
          this.doNotDisplaySearch = true;
        }
      })
    } 
    //error condition; if user tries to send wrong values; we display error without sending request to the server
    else {
      this.doNotDisplaySearch = true;
      this.displaySearch = false;
    }

    //timeout for the spinner
    setTimeout(() =>
    this.spinner.hide(), 500
  )
  }

}
