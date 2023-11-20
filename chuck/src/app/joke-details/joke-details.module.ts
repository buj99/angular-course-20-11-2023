import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailsComponent } from './joke-details.component';
import { MatCardModule } from '@angular/material/card';
import { SuffixPipe } from '../pipes/suffix.pipe';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    JokeDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SuffixPipe
  ],
  exports: [
    JokeDetailsComponent
  ]
})
export class JokeDetailsModule { }
