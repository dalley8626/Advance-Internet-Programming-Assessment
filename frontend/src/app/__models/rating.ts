export class Rating {
  public _id;
  public ratingTitle;
  public ratingDescription;
  public subjectID;
  public editFlag = false;

  constructor() {
    this._id = '';
    this.ratingTitle = '';
    this.ratingDescription = '';
    this.subjectID = '';
    this.editFlag = false;
  }
}
