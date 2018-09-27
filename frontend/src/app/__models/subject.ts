import {Rating} from 'src/app/__models/rating';

export class Subject {
  public _id;
  public subjectCode;
  public subjectName;
  public numberOfReview;
  public percentageRating;
  public ratingIDs: Array<string>;

  constructor() {
    this._id = '';
    this.subjectCode = '';
    this.subjectName = '';
    this.numberOfReview = 0;
    this.percentageRating = 0;
    this.ratingIDs = [];
  }
}
