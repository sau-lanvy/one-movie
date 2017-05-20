import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from '../../../core/services/movies.service';
import { IMovie, IPagedResults } from '../../../shared/interfaces/movie.interface';

@Component({
    moduleId: module.id,
    selector: 'cm-movie-list',
    templateUrl: 'movie-list.component.html'
})

export class MovieListComponent implements OnInit {
    movies: IMovie[];
    type: string;
    totalRecords: number = 0;
    pageSize: number = 20;
    constructor(private route: ActivatedRoute, private _moviesServices: MoviesService) { }

    ngOnInit() {
        this.route.parent.firstChild.params.subscribe((params: Params) => {
            this.type = params['type'];
            this.getMoviesPage(1);
        });
    }

    getMoviesPage(page: number) {
        this._moviesServices.getMoviesByType(this.type, page.toString())
            .subscribe((response: IPagedResults<IMovie[]>) => {
                this.movies = response.results;
                if (this.totalRecords === 0) {
                    this.totalRecords = response.totalRecords;
                }

        });
    }

    pageChanged(page: number) {
        this.getMoviesPage(page);
    }
}