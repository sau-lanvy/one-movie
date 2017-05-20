import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-movie',
    templateUrl: 'movie.component.html'
})

export class MovieComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
    }
}