import { Component } from '@angular/core';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css']
})
export class JokeDetailsComponent {
  jokeTitle: string = "Good Joke";
  jokeDetails: string = "This just in: Chuck Norris returns home from a 1 day long vacation in Abbottabad, Pakistan.";
  jokeDate: Date = new Date();
}
