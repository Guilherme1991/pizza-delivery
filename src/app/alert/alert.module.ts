import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
