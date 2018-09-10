import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//subject
import { SubjectsComponent } from './../__components/subject/subjects/subjects.component';
import { SubjectDetailComponent } from './../__components/subject/subject-detail/subject-detail.component';
import { SubjectSearchComponent } from './../__components/subject/subject-search/subject-search.component';
import { DashboardComponent } from './../__components/subject/dashboard/dashboard.component';
import { SubjectAddComponent } from './../__components/subject/subject-add/subject-add.component';

//user
import { LoggingComponent } from '../__components/user/login/logging/logging.component';
import { ProfileComponent } from '../__components/user/profile/profile.component';
import { RegisteringComponent } from '../__components/user/register/registering/registering.component';

//Authentication guards
import { NotAuthGuard } from '../__guards/notAuth.guard';
import { AuthGuard } from '../__guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoggingComponent, canActivate:[NotAuthGuard]},
  { path: 'register', component: RegisteringComponent, canActivate:[NotAuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'subjects/detail/:id', component: SubjectDetailComponent, canActivate:[AuthGuard] },
  { path: 'subjects', component: SubjectsComponent, canActivate:[AuthGuard] },
  { path: 'subjects/add', component: SubjectAddComponent, canActivate:[AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: '**', component: LoggingComponent }, // The "Catch-All" Route and send to login

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
