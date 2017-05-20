import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-movie-similar',
    templateUrl: 'movie-similar.component.html'
})

export class MovieSimilarComponent implements OnInit {
    @Input()
    movies: Array<Object>;

    constructor() { }

    ngOnInit() { }
}