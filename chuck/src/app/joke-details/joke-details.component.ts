import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Joke } from '../models/joke.model';
import { JokeDetailsService } from './joke-details.service';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css'],
  providers: [JokeDetailsService]
})
export class JokeDetailsComponent implements OnInit, OnChanges {
  @Input() jokeTitle: string | undefined;
  @Output() jokeLiked = new EventEmitter<string>();

  private readonly jokeDetailsService = inject(JokeDetailsService);
  
  joke: Joke = this.jokeDetailsService.getDefaultJoke();


  commentVal = '';
  ngOnInit(): void {
    console.log('Joke details was initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes !== undefined && changes['jokeTitle']) {
      this.joke.title = this.jokeTitle ?? '';
    }
  }

  likeJoke(title: string | undefined): void {
    if (title !== undefined) {
      this.jokeLiked.emit(title);
    }
  }

  addButton() {
    this.joke.comments.push(this.commentVal);
    this.commentVal = '';
    console.log(this.joke.comments);
  }

}
