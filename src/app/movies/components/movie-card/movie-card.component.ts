import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-movie-card',
    templateUrl: 'movie-card.component.html'
})

export class MovieCardComponent implements OnInit {
    @Input()
    movie: Object;

    @Input()
    cast: Object;

    constructor() { }

    ngOnInit() { }
}