import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


//import { ValidateService } from '../services/validate.service';
//import { NgFlashMessagesModule } from 'ng-flash-messages'

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    //ValidateService,
    //NgFlashMessagesModule
  ],
  declarations: [LoggingComponent],
  exports :[LoggingComponent],
})
export class LoginModule { }
