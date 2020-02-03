import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: [ './edit-movie.component.scss' ],
})
export class EditMovieComponent implements OnInit {
  id = this.route.snapshot.params.id;
  @ViewChild('f', { static: false }) movieForm: NgForm;
  movie: Movie = {
    name: undefined,
    year: undefined,
  };

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
      map((response: { movie: Movie }) => this.movie = response.movie),
    ).subscribe((movie: Movie) => {
      this.movie = movie;
    });
  }

  patchMovie(): void {
    this.moviesService.patchMovie(this.movie)
      .subscribe(res => console.log(res));
  }

  onSubmit() {
    this.movie.name = this.movieForm.value.movieData.name;
    this.movie.year = this.movieForm.value.movieData.year;
    this.patchMovie();
  }

  goBack() {
    this.location.back();
  }
}
