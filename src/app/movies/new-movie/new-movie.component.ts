import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: [ './new-movie.component.scss' ],
})
export class NewMovieComponent implements OnInit {
  @ViewChild('f', { static: false }) movieForm: NgForm;
  movie: Movie = {
    name: undefined,
    year: undefined,
  };

  constructor(
    private moviesService: MoviesService,
    private moviesComponent: MoviesComponent,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.movie.name = this.movieForm.value.movieData.name;
    this.movie.year = this.movieForm.value.movieData.year;

    this.moviesService.postMovie(this.movie).subscribe();

    this.movieForm.resetForm();

    this.moviesComponent.getMovies();
  }
}
