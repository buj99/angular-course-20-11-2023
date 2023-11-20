import { Component } from '@angular/core';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css']
})
export class JokeDetailsComponent {
  jokeTitle: string = "Good Joke";
}
