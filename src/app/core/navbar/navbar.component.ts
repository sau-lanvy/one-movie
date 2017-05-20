import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../services/movies.service';

@Component({
    moduleId: module.id,
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {

    isCollapsed: boolean;
    genres: Array<Object>;
    constructor(private _moviesService: MoviesService){
            this._moviesService.getGenres().subscribe(res => {
                this.genres = this.chunkData(res.genres, 7);
            });
    }
    ngOnInit(): void {
    }

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public chunkData(data, size) {
        const genres = new Array<Object>();
        for (let i = 0;  i < data.length; i += size) {
            genres.push(data.slice(i, i + size));
        }
        return genres;
    }

}