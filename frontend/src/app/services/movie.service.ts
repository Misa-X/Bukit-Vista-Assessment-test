import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from'rxjs';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

constructor(private http: HttpClient) { }

// getMovieByTitleFromApi(): Observable<string[]>{
//   return this.http.get<string[]>(API_URL + '/movies/imdb/:title');
// }

title='';

// getMovieByTitleFromApi(): Observable<string[]>{
//   return this.http.get<string[]>(API_URL + '/movies/imdb/:title');
// }

// getMovieByTitleFromApi(): Observable<string[]>{
//   return this.http.get<string[]>(API_URL + '/movies/imdb/'+this.title);
// }

getMovieByTitleFromApi(title: string): Observable<string[]>{
  return this.http.get<string[]>(API_URL + `/movies/imdb/${title}`);
}


}
