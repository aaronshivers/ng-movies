import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'movies/:id/edit', component: EditMovieComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class MoviesRoutingModule {
}
