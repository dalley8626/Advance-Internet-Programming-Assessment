import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from '.././app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [LoggingComponent],
  exports :[LoggingComponent],
})
export class LoginModule { }
