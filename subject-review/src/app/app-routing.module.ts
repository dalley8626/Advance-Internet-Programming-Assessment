import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { SubjectsComponent }      from './subjects/subjects.component';
import { SubjectDetailComponent }  from './subject-detail/subject-detail.component';
import {LoggingComponent} from './login/logging/logging.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

const routes: Routes = [
  { path: '', component: LoggingComponent },
  { path: 'login', component: LoggingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SubjectDetailComponent },
  { path: 'subjects', component: SubjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
