import {Rating} from 'src/app/__models/rating';

export class Subject {
  public _id;
  public subjectCode;
  public subjectName;
  public ratings: Array<Rating>;

  constructor() {
    this._id = '';
    this.subjectCode = '';
    this.subjectName = '';
    this.ratings = [];
  }
}
