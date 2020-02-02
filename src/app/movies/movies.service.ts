import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model, Server } from 'miragejs';
import { Observable } from 'rxjs';
import { URL } from 'url';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
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

  private generateServer(): void {
    // tslint:disable-next-line:no-unused-expression
    new Server({
      models: { movie: Model },

      routes() {
        this.namespace = 'api';

        this.get('/movies');

        this.get('/movies/:id');
      },

      seeds(server) {
        server.create('movie', { name: 'Inception', year: 2010 });
        server.create('movie', { name: 'Interstellar', year: 2014 });
        server.create('movie', { name: 'Dunkirk', year: 2017 });
      },
    });
  }
}
