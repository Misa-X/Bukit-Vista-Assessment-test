/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavMovieService } from './fav-movie.service';

describe('Service: FavMovie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavMovieService]
    });
  });

  it('should ...', inject([FavMovieService], (service: FavMovieService) => {
    expect(service).toBeTruthy();
  }));
});
