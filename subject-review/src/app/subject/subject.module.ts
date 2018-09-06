import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectSearchComponent } from './subject-search/subject-search.component';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { UiModule } from '../ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import {FormsModule} from '@angular/forms';
/**
 * This module consists of subject components.
 */
@NgModule({
  imports: [
    CommonModule,
    UiModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [SubjectsComponent, SubjectDetailComponent, SubjectSearchComponent, DashboardComponent, SubjectAddComponent],
  exports: [SubjectsComponent, SubjectDetailComponent, SubjectSearchComponent]
})
export class SubjectModule { }
