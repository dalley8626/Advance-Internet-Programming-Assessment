import {Rating} from 'src/app/__models/rating';

export class Subject {
  public _id;
  public subjectCode;
  public subjectName;
  public ratingIDs: Array<string>;

  constructor() {
    this._id = '';
    this.subjectCode = '';
    this.subjectName = '';
    this.ratingIDs = [];
  }
}
