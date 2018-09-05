import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http"

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';

import { RegisterModule } from './register/register.module';
import { AppRoutingModule } from './/app-routing.module';
import { SubjectModule } from './subject/subject.module';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
// import { AuthGuard } from './guards/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    LoginModule,
    RegisterModule,
    AppRoutingModule,
    SubjectModule,
    FormsModule, 
    HttpModule
  ],
  
  providers: [ValidateService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
