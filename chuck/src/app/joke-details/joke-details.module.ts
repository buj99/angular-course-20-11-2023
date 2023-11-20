import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailsComponent } from './joke-details.component';
import { MatCardModule } from '@angular/material/card';
import { SuffixPipe } from '../pipes/suffix.pipe';


@NgModule({
  declarations: [
    JokeDetailsComponent,
    SuffixPipe
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    JokeDetailsComponent
  ]
})
export class JokeDetailsModule { }
