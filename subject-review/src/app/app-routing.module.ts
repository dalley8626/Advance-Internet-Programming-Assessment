import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteringComponent } from './register/registering/registering.component';
import { LoggingComponent } from './login/logging/logging.component'
import { DashboardComponent } from './subject/dashboard/dashboard.component'
import { SubjectsComponent } from './subject/subjects/subjects.component'
import {SubjectDetailComponent} from './subject/subject-detail/subject-detail.component';
import {SubjectAddComponent} from './subject/subject-add/subject-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoggingComponent },
  { path: 'register', component: RegisteringComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'subjects/detail/:id', component: SubjectDetailComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/add', component: SubjectAddComponent}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
