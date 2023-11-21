import { Injectable } from "@angular/core";
import { Joke } from "../models/joke.model";

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class JokeDetailsService {

    getDefaultJoke(): Joke {
        return  { title: 'Good Joke',
                  details: 'This just in: Chuck Norris returns home from a 1 day long vacation in Abbottabad, Pakistan.',
                  comments: [],
                  date: new Date() } as Joke;
      }
}