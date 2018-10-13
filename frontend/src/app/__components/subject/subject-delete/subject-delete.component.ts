import { Component, OnInit } from '@angular/core';
import { SubjectService } from './../../../__services/subjectService/subject.service'; // subject service
import { Location } from '@angular/common'; //location module
import { Router, ActivatedRoute } from '@angular/router'; // router module

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {

  //message variable stores the feedback message for the user
  message;
  //message class defines the CSS class for message to be displayed
  messageClass;

  //variable to store the subject that is to be deleted
  subject;

  //variable to store boolean that represents if the subject is present in the database
  foundSubject = false;

  //function to store the current URL
  currentUrl;

  constructor(
    private subjectService: SubjectService, // instance of the subejct service
    private location: Location, // instance of the location service
    private router: Router, // instance of the router service
    private activatedRoute: ActivatedRoute  // instance of the activated route
  ) { }

  ngOnInit() {
    //getting the current URL
    this.currentUrl = this.activatedRoute.snapshot.params;

    //confirming if the url contains any id
    if(!this.currentUrl.id)
    {
      //display message
      this.messageClass = 'alert-danger';
      this.message = 'No id provided';
    } 
      //flag to respresent success
    else {
      this.foundSubject = true;
    }
  }

  //function to delete the subject
  deleteSubject() {
    this.subjectService.deleteSubject(this.currentUrl.id).subscribe(data => {
      //failure
      if(!data.success){
        //failure message
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
      }
      //success 
      else {
        //success message
        this.messageClass = 'alert alert-success';
        this.message = data.message;

        //timeout and navigate back
        setTimeout(()=>{
          this.router.navigate(['/subjects']);
        },2000)
      }
    })
  }

  //go back to the previous locaiton
  goBack(){
    this.location.back();
  }
}
