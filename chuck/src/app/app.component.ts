import { Component, ViewChild } from '@angular/core';
import { JokeDetailsComponent } from './joke-details/joke-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(JokeDetailsComponent) jokeDetails: JokeDetailsComponent | undefined;
  jokeTitle: string = "Good Joke";



  onJokeLiked(title: string): void {
    console.log(`${title} joke was liked`);
  }

  triggerMethod(): void {
    console.log(this.jokeDetails);
    this.jokeDetails?.likeJoke("Custom joke");
  }
}
