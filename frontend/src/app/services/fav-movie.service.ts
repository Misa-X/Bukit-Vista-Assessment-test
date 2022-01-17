import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from'rxjs';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class FavMovieService {



constructor(private http: HttpClient) {
  console.log('Hello');
  this.getAllMovies();
  this.getMovieByTitle();
}

getMovieByTitle(): Observable<string[]>{
  return this.http.get<string[]>(API_URL + '/movies/:title');
}

// getAllMovies(): Observable<string[]>{
//   return this.http.get<string[]>(API_URL + '/moviesfromdb');
// }

getAllMovies(): Observable<any>{
  return this.http.get<any>(API_URL + '/moviesfromdb');
}


}
