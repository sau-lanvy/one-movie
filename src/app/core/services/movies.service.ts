import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams, Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

import { IMovie } from '../../shared/interfaces/movie.interface';

@Injectable()
export class MoviesService {
  apikey: string;
  movieUrl = 'https://api.themoviedb.org/3/';

  constructor(private _jsonp: Jsonp, private http: Http) {
    this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
  }

  getMoviesByType(type: string, page: string){
    let search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('api_key', this.apikey);
    search.set('page', page);

    return this.http.get(this.movieUrl + 'movie/' + type, {search})
            .map((res: Response) => {
                let movies  = res.json().results;
                let totalRecords = res.json().total_results;
                return {
                  results: movies,
                  totalRecords: totalRecords
                };
            })
            .catch(this.handleError);
  }

  getMovie(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this.http.get(this.movieUrl + 'movie/' + id, {search})
            .map((res: Response) => {
                let movie  = res.json();
                return movie;
            })
            .catch(this.handleError);
  }

  searchMovies(searchStr: string) {
    let search = new URLSearchParams();
    search.set('sort_by', 'popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this.http.get(this.movieUrl + 'search/movie', {search})
        .map((res: Response) => {
            let movies = res.json().results;
            return movies;
        }).catch(this.handleError);
  }

  getMovieVideos(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(this.movieUrl + 'movie/' + id + '/videos?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getSimilarMovies(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(this.movieUrl + 'movie/' + id + '/similar?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getMovieCredits(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(this.movieUrl + 'movie/' + id + '/credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }

  // Get Tv Series
  getPopularSeries() {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this.http.get(this.movieUrl + 'tv/popular', {search})
            .map((res: Response) => {
                let movies  = res.json().results;
                return movies;
            })
            .catch(this.handleError);
  }

  // Get person information
  getPersonDetail(id:string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(this.movieUrl + 'person/' + id + '?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getPersonCast(id: string) {
    let search: URLSearchParams = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(this.movieUrl + 'person/' + id + '/movie_credits?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  // Get movies by genre
  getGenres() {
    let search = new URLSearchParams();
    search.set('language', 'en-US');
    search.set('api_key', this.apikey);
    return this._jsonp.get(this.movieUrl + 'genre/movie/list?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  getMoviesByGenre(id: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get(this.movieUrl + 'genre/' + id + '/movies?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      });
  }

  // handle the error
  handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch (err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
  }
}