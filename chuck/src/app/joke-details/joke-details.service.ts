import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class JokeDetailsService {
  private _jokes: Joke[] = [];

  get jokes(): Joke[] {
    return this._jokes;
  }

  getDefaultJoke(): Joke {
    return {
      title: 'Good Joke',
      details:
        'This just in: Chuck Norris returns home from a 1 day long vacation in Abbottabad, Pakistan.',
      comments: [],
      date: new Date(),
    } as Joke;
  }

  addJoke(joke: Joke) {
    this._jokes.push(joke);
  }
}
