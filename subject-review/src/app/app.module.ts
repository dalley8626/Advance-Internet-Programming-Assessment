import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http"

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';

import { RegisterModule } from './register/register.module';
import { AppRoutingModule } from './/app-routing.module';
import { SubjectModule } from './subject/subject.module';
import {HttpClientModule} from '@angular/common/http';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt'
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    LoginModule,
    RegisterModule,
    AppRoutingModule,
    SubjectModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  
  providers: [ValidateService, AuthService, JwtHelperService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
