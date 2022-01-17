import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
// import { Http } from '@angular/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
// import "rxjs/Rx";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: any;
  addMovie: any;
  titlefromService : string ="";





  constructor(public movieService: MovieService) { }

  // ngOnInit(): void {
  // }
  setValue() {
    this.titlefromService = 'Nancy';
  }

  getMovies() {
    console.log(this.titlefromService)
    //this.titlefromService = this.titlefromService;
    //this.setValue()
    this.movieService.getMovieByTitleFromApi(this.titlefromService).subscribe(data => {
      this.addMovie = data;
      console.log(data);
    })
  }

  ngOnInit(): void {

  }


}
