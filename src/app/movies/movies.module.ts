import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieComponent } from './movie/movie.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { FormsModule } from '@angular/forms';
import { EditMovieComponent } from './edit-movie/edit-movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    NewMovieComponent,
    EditMovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
  ],
})
export class MoviesModule {
}
