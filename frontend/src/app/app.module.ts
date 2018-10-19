import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

//Forms Module for angular
import { FormsModule } from "@angular/forms";

//Http module required for server connection
import { HttpModule } from "@angular/http"
import { HttpClientModule } from '@angular/common/http';

//JWT
import { JwtHelperService } from '@auth0/angular-jwt'

//importing Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './__components/subject/dashboard/dashboard.component';

//ui
import { LayoutComponent } from './__components/ui/layout/layout.component';
import { HeaderComponent } from './__components/ui/header/header.component';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//user
import { LoggingComponent } from './__components/user/login/logging/logging.component';
import { ProfileComponent } from './__components/user/profile/profile.component';
import { RegisteringComponent } from './__components/user/register/registering/registering.component';

//Importing Authentication Guard
import { AuthGuard } from './__guards/auth.guard';
import { NotAuthGuard } from './__guards/notAuth.guard';

//Importing Service
import { ValidateService } from './__services/validateService/validate.service';
import { AuthService } from './__services/authService/auth.service';

//Routing Module
import { AppRoutingModule } from './__routes/app-routing.module';

//Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

//importing flash message module
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { NgxSpinnerModule } from 'ngx-spinner';

//Subject
import { SubjectFeedComponent } from './__components/subject/subject-feed/subject-feed.component';
import { SubjectAddComponent } from './__components/subject/subject-add/subject-add.component';
import { SubjectAddReviewComponent } from './__components/subject/subject-add-review/subject-add-review.component';
import { SubjectEditComponent } from './__components/subject/subject-edit/subject-edit.component';
import { SubjectDeleteComponent } from './__components/subject/subject-delete/subject-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisteringComponent,
    LoggingComponent,
    LayoutComponent,
    HeaderComponent,
    SubjectAddComponent,
    DashboardComponent,
    SubjectFeedComponent,
    SubjectAddReviewComponent,
    SubjectEditComponent,
    SubjectDeleteComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    NgxSpinnerModule,
    NgbModule
  ],
  
  providers: [ValidateService, AuthService, JwtHelperService, AuthGuard, NotAuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
