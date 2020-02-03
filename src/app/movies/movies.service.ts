import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, Server } from 'miragejs';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { URL } from 'url';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  server: Server;
  private url: URL = '/api/movies/';

  constructor(private http: HttpClient) {
    this.generateServer();
  }

  getMovies(): Observable<{}> {
    return this.http.get(this.url);
  }

  getMovie(id: number): Observable<{}> {
    return this.http.get(this.url + id);
  }

  postMovie(movie: Movie): Observable<{}> {
    return this.http.post(this.url, movie);
  }

  deleteMovie(id: number): Observable<{}> {
    return this.http.delete(this.url + id);
  }

  patchMovie(movie: Movie): Observable<{}> {
    console.log(movie);
    return this.http.patch(this.url + movie.id, movie);
  }

  private generateServer(): void {
    // tslint:disable-next-line:no-unused-expression
    this.server = new Server({
      models: { movie: Model },

      routes() {
        this.namespace = 'api';

        this.get('/movies');

        this.get('/movies/:id');

        // this.post('/movies');

        this.post('/movies', (schema, request) => {
          const attrs = JSON.parse(request.requestBody);

          return schema.db.movies.insert(attrs);
        });

        this.del('/movies/:id');

        this.patch('/movies/:id', (schema, request) => {
          const newAttrs = JSON.parse(request.requestBody);
          const id = request.params.id;
          const movie = schema.movies.find(id);

          return movie.update(newAttrs);
        });
      },

      seeds(server) {
        server.create('movie', { name: 'Inception', year: 2010 });
        server.create('movie', { name: 'Interstellar', year: 2014 });
        server.create('movie', { name: 'Dunkirk', year: 2017 });
      },
    });
  }
}
