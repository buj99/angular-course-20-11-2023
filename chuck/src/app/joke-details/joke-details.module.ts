import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeDetailsComponent } from './joke-details.component';
import { MatCardModule } from '@angular/material/card';
import { SuffixPipe } from '../pipes/suffix.pipe';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';
import { JokeDetailsRoutingModule } from './joke-details.routing.module';
import { JokeDetailsService } from './joke-details.service';
@NgModule({
  declarations: [JokeDetailsComponent, HighlightDirectiveDirective],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SuffixPipe,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    JokeDetailsRoutingModule,
  ],
  exports: [JokeDetailsComponent],
  //providers: [JokeDetailsService]
})
export class JokeDetailsModule {}
