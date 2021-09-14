import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent, SlideComponent, AlertComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
