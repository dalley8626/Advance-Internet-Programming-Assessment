import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFeedComponent } from './subject-feed.component';

describe('SubjectFeedComponent', () => {
  let component: SubjectFeedComponent;
  let fixture: ComponentFixture<SubjectFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
