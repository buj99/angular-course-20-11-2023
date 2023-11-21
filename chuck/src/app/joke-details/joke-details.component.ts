import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css'],
})
export class JokeDetailsComponent implements OnInit, OnChanges {
  @Input() jokeTitle: string | undefined;
  @Output() jokeLiked = new EventEmitter<string>();

  jokeDetails: string =
    'This just in: Chuck Norris returns home from a 1 day long vacation in Abbottabad, Pakistan.';
  jokeDate: Date = new Date();
  jokesComments: string[] = [];
  commentVal = '';
  ngOnInit(): void {
    console.log('Joke details was initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes !== undefined && changes['jokeTitle']) {
      console.log(`Title has changed to ${this.jokeTitle}`);
    }
  }

  likeJoke(title: string | undefined): void {
    if (title !== undefined) {
      this.jokeLiked.emit(title);
    }
  }

  addButton() {
    this.jokesComments.push(this.commentVal);
    this.commentVal = '';
    console.log(this.jokesComments);
  }
}
