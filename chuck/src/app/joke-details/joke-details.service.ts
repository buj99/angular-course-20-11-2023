import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { Observable, ReplaySubject, filter, first, from, of } from 'rxjs';

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

  getJokeByTitle(title: string): Joke | undefined {
    return this._jokes.filter(joke => joke.title === title)[0];
  }


  getJokeByTitle1(title: string): Observable<Joke | undefined> {
    return of(this.getJokeByTitle(title));
  }

  getJokeByTitle2(title: string): Observable<Joke | undefined> {
    return from(this._jokes).pipe(first(joke => joke.title === title));
  }

  getJokeByTitle3(title: string): Observable<Joke | undefined> {
    return this.getJokes().pipe(first(joke => joke.title === title));
  }

  getJokes(): Observable<Joke> {
    let subject = new ReplaySubject<Joke>();
    this._jokes.forEach(joke => subject.next(joke));
    return subject.asObservable();
  }
}
