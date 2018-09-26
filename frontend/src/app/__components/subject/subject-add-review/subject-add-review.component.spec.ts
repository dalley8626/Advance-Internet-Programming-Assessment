import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddReviewComponent } from './subject-add-review.component';

describe('SubjectAddReviewComponent', () => {
  let component: SubjectAddReviewComponent;
  let fixture: ComponentFixture<SubjectAddReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAddReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
