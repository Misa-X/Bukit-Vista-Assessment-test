import { Component, OnInit } from '@angular/core';
import { FavMovieService } from '../services/fav-movie.service';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {

  favMovies: any;
  fmovies=[];

  constructor(private favMovieService: FavMovieService) { }

  // ngOnInit(): void {
  // }

  // ngOnInit() {
  //   this.favMovieService.getAllMovies().subscribe(data => {
  //     this.favMovies = data;
  //     console.log(data);
  //   })
  // }


  ngOnInit(): void {
    this.favMovieService.getAllMovies().subscribe(Response => {

      console.log(Response)
      this.favMovies=Response;
      this.fmovies=this.favMovies.list;
    });



  }

}
