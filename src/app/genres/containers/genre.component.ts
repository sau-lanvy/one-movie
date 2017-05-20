import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from '../../core/services/movies.service';
import { IMovie } from '../../shared/interfaces/movie.interface';

@Component({
    moduleId: module.id,
    selector: 'cm-genres',
    templateUrl: 'genre.component.html'
})

export class GenreComponent implements OnInit{
    genreName: string;
    movies: Array<Object>;
    constructor(private route: ActivatedRoute, private _moviesServices: MoviesService) { }


    ngOnInit() {
        this.route.parent.params.subscribe((params: Params) => {
            const id = params['id'];
            this.genreName = params['name'];
            this._moviesServices.getMoviesByGenre(id).subscribe(res => {
                this.movies = res.results;
            });
        });
    }
}