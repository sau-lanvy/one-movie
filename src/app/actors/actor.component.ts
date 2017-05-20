import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from '../core/services/movies.service';
import { IMovie } from '../shared/interfaces/movie.interface';

@Component({
    moduleId: module.id,
    selector: 'cm-actors',
    templateUrl: 'actor.component.html'
})
export class ActorComponent implements OnInit {
    person: Object;
    movies: Array<Object>;
    constructor(private _moviesSerice: MoviesService, private router: ActivatedRoute, ) {

    }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            const id = params['id'];
            this._moviesSerice.getPersonDetail(id).subscribe(person => {
                this.person = person;
            });
            this._moviesSerice.getPersonCast(id).subscribe(res => {
                this.movies = res.cast;
            });
        })
    }
}