import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteringComponent } from './register/registering/registering.component';
import { LoggingComponent } from './login/logging/logging.component'
import { DashboardComponent } from './subject/dashboard/dashboard.component'
import { SubjectsComponent } from './subject/subjects/subjects.component'
import { ProfileComponent } from './profile/profile.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoggingComponent },
  { path: 'register', component: RegisteringComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'subject', component: SubjectsComponent},
  { path: 'profile', component: ProfileComponent}
  

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
