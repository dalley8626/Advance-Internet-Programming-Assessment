import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging/logging.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoggingComponent],
  exports :[LoggingComponent]
})
export class LoginModule { }
