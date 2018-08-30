import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging/logging.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoggingComponent],
  exports : [LoggingComponent]
})
export class LoginModule { }
