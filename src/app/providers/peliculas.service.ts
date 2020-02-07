import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = 'c8218d06db7d1b4c9a1d088d1db5a5e5';
  public urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(
              private http: HttpClient) { }


  getPopulares() {
    // tslint:disable-next-line:prefer-const
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
          map(res => res)
    );
  }


  getActuales() {

    const fecha: any = new Date();
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${fecha.getDate() }&primary_release_date.lte=${fecha.getDate()}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
          map(res => res)
    );
  }


  buscarPelicula( text: string) {
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb }/discover/movie?query=${ text }&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
          map(res => res)
    );
  }

}
