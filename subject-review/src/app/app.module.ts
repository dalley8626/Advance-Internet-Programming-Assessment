import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';

import { RegisterModule } from './register/register.module';
import { AppRoutingModule } from './/app-routing.module';
import { SubjectModule } from './subject/subject.module';


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
    SubjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
