import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectSearchComponent } from './subject-search/subject-search.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [SubjectsComponent, SubjectDetailComponent, SubjectSearchComponent, DashboardComponent],
  exports: [SubjectsComponent, SubjectDetailComponent, SubjectSearchComponent]
})
export class SubjectModule { }
