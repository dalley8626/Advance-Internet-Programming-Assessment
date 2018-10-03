import {Rating} from 'src/app/__models/rating';

export class Subject {
  public _id;
  public subjectNumber;
  public subjectName;
  public numberOfReview;
  public percentageRating;
  public description;
  public ratingIDs: Array<string>;

  constructor() {
    this._id = '';
    this.subjectNumber = '';
    this.subjectName = '';
    this.numberOfReview = 0;
    this.percentageRating = 0;
    this.description = '';
    this.ratingIDs = [];
  }
}
