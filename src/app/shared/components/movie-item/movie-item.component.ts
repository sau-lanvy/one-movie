import { Component, Input } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
    moduleId: module.id,
    selector: 'cm-movie-item',
    templateUrl: 'movie-item.component.html',
    styleUrls:['movie-item.component.css']
})
export class MovieItemComponent {
    date =  new Date();

    @Input()
    movie: IMovie;
}