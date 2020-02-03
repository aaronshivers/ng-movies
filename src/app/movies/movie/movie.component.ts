import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: [ './movie.component.scss' ],
})
export class MovieComponent implements OnInit {
  movie: Movie;
  id = this.route.snapshot.params.id;


  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    this.moviesService.getMovie(this.id).pipe(
      map((response: { movie }) => response.movie),
    ).subscribe((movie: Movie) => {
      this.movie = movie;
    });
  }

  onDeleteMovie() {
    this.moviesService.deleteMovie(this.id).subscribe();
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
