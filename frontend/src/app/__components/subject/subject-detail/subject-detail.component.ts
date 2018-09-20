import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subject }         from '../../../__models/subject';
import { SubjectService } from '../../../__services/subjectService/subject.service';
import {Rating} from '../../../__models/rating';
import {RatingService} from '../../../__services/ratingService/rating.service';

/**
 * This component displays the detail of the subject, 
 * and allows to edit the subject information.
 */
@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: [ './subject-detail.component.css' ]
})
export class SubjectDetailComponent implements OnInit {
  @Input() subject: Subject;
  ratings: Rating[];
  public rating: Rating;


  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private ratingService: RatingService,
    private location: Location
  ) { this.subject = new Subject();
      this.rating = new Rating();
  }

  ngOnInit(): void {
    this.getSubject();
    this.getRatingsbySubjectID();
    this.ratingService.ratingAdded_Observable.subscribe(res => {
      this.getRatingsbySubjectID();
    });
  }

  getSubject(): void {
    // show the specific subject by capturing the subjectCode from the route
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id)
      .subscribe(subject => this.subject = subject['data']);
  }

  getRatingsbySubjectID(): void {
    this.ratingService.getRatingsbySubjectID(this.subject._id)
      .subscribe(result => {
        this.ratings = result['data'];
        this.ratings.forEach(function(element) {
          console.log(element);
          element.editFlag = false;
        });
      });
  }
  addRating(): void {
    if (this.rating.ratingTitle && this.rating.ratingDescription) {
      this.rating.subjectID = this.subject._id;
      this.ratingService.addRating(this.rating).subscribe(res => {
        console.log('response is ', res);
        if (res['status'] === 'success') {
          this.ratingService.notifyRatingAddition();
          alert('Rating added.');
        } else {
          alert('Attempt failed, try again.');
        }
      }, error => {
        console.log('error is', error);
      });
    } else {
      alert('Rating title and Rating Description required');
    }
  }
  edit(rating: Rating): void {
    rating.editFlag = true;
  }
  editRating(rating: Rating): void {
    this.ratingService.updateRating(rating).subscribe(res => {
      if (res['status'] === 'success') {
        this.ratingService.notifyRatingAddition();
        rating.editFlag = false;
        alert('Rating edited.');
      } else {
        alert('Attempt failed, try again.');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.subjectService.updateSubject(this.subject)
      .subscribe(() => this.goBack());
  }
  delete(rating: Rating): void {
    this.ratings = this.ratings.filter(r => r !== rating);
    this.ratingService.deleteRating(rating).subscribe();
  }
}

