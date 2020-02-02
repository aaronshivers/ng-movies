import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MoviesService } from './movies.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.scss' ],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getMovies().pipe(
      map((response: { movies }) => response.movies),
    ).subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

}
