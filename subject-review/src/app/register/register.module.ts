import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteringComponent } from './registering/registering.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegisteringComponent],
  exports: [RegisteringComponent]
})
export class RegisterModule { }
