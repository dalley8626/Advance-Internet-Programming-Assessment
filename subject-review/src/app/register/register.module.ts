import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteringComponent } from './registering/registering.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { ValidateService } from '../services/validate.service';
import { NgFlashMessagesModule } from 'ng-flash-messages'

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgFlashMessagesModule

  ],
  declarations: [RegisteringComponent],
  exports: [RegisteringComponent],
  providers: [ValidateService]
})
export class RegisterModule { }
