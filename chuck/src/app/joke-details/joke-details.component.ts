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
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css'],
  providers: [JokeDetailsService],
})
export class JokeDetailsComponent implements OnInit, OnChanges {
  @Input() jokeTitle: string | undefined;
  @Output() jokeLiked = new EventEmitter<string>();

  readonly jokeDetailsService = inject(JokeDetailsService);

  // joke: Joke = this.jokeDetailsService.getDefaultJoke();
  addJokeFormGroup: FormGroup;
  jokes: Joke[] = [];
  commentVal = '';

  constructor() {
    this.addJokeFormGroup = new FormGroup({
      joke: new FormControl('', [Validators.required, Validators.minLength(4)]),
      author: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    console.log('Joke details was initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes !== undefined && changes['jokeTitle']) {
      // this.joke.title = this.jokeTitle ?? '';
    }
  }

  likeJoke(title: string | undefined): void {
    if (title !== undefined) {
      this.jokeLiked.emit(title);
    }
  }

  addButton() {
    // this.joke.comments.push(this.commentVal);
    // this.commentVal = '';
    // console.log(this.joke.comments);
  }

  submitFrom() {
    const formValues = this.addJokeFormGroup.getRawValue();
    console.log(formValues);

    this.jokeDetailsService.addJoke({
      title: `joke created by ${formValues.author}`,
      details: formValues.joke,
      date: new Date(),
      comments: [],
    });
  }

  resetFrom() {
    this.addJokeFormGroup.controls['joke'].reset();
    this.addJokeFormGroup.controls['author'].reset();
  }
}
