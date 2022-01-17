import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent},
  { path: 'favMovies', component: FavMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
