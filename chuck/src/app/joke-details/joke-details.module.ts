import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailsComponent } from './joke-details.component';



@NgModule({
  declarations: [
    JokeDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JokeDetailsComponent
  ]
})
export class JokeDetailsModule { }
