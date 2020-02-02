import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from 'miragejs';
import { Observable } from 'rxjs';
import { URL } from 'url';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url: URL = '/api/movies';

  constructor(private http: HttpClient) {
    this.generateServer();
  }

  getMovies(): Observable<{}> {
    return this.http.get(this.url);
  }

  private generateServer(): void {
    new Server({
      routes() {
        this.namespace = 'api';

        this.get('/movies', () => ({
          movies: [
            { id: 1, name: 'Inception', year: 2010 },
            { id: 2, name: 'Interstellar', year: 2014 },
            { id: 3, name: 'Dunkirk', year: 2017 },
          ],
        }));
      },
    });
  }
}
