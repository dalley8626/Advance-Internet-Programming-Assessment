import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteringComponent } from './registering/registering.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [RegisteringComponent],
  exports: [RegisteringComponent]
})
export class RegisterModule { }
