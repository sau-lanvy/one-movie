import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../core/services/movies.service';
import { IMovie, IPagedResults } from '../shared/interfaces/movie.interface';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    topRatedList: IMovie[]=[];
    upComingMovies: IMovie[]=[];
    topPopularSeries: IMovie[]=[];
    popularMovies: IMovie[]=[];
    playingMovies: IMovie[]=[];

    constructor(private _moviesService: MoviesService) {
        this._moviesService.getMoviesByType('upcoming', '1').subscribe((response: IPagedResults<IMovie[]>) => {
            this.upComingMovies = response.results;
        });
        this._moviesService.getMoviesByType('top_rated', '1').subscribe((response: IPagedResults<IMovie[]>) => {
            this.topRatedList = response.results;
        });

        this._moviesService.getPopularSeries().subscribe((response: IMovie[]) => {
            this.topPopularSeries = response;
        });
        this._moviesService.getMoviesByType('popular', '1').subscribe((response: IPagedResults<IMovie[]>) => {
              this.popularMovies = response.results;
        });
        this._moviesService.getMoviesByType('now_playing', '1').subscribe((response: IPagedResults<IMovie[]>) => {
            this.playingMovies = response.results;
        });
    }
    //https://developers.themoviedb.org/3/movies/get-now-playing
    ngOnInit(): void {
    }
}