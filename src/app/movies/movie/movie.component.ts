import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: [ './movie.component.scss' ],
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.params.id;
    this.moviesService.getMovie(id).pipe(
      map((response: { movie }) => response.movie),
    ).subscribe((movie: Movie) => {
      this.movie = movie;
    });
  }
}
