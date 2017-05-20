import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { MoviesService } from '../../../core/services/movies.service';
import { IMovie } from '../../../shared/interfaces/movie.interface';

@Component({
    moduleId: module.id,
    selector: 'app-movie-details',
    templateUrl: 'movie-details.component.html'
})

export class MovieDetailsComponent implements OnInit {
    movie: Object;
    similarMovies: Array<Object>;
    cast: Array<Object>;
    video: Object;

    constructor(private router: Router, private route: ActivatedRoute,
    private _moviesServices: MoviesService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.route.parent.firstChild.params.subscribe((params: Params) => {
            console.log(params);
            let id = params['id'];
            this._moviesServices.getMovie(id).subscribe(movie => {
                this.movie = movie;
            });
            this._moviesServices.getMovieCredits(id).subscribe(res => {
                res.cast = res.cast.filter((item) => { return item.profile_path });
                this.cast = res.cast.slice(0, 4);
            });
            this._moviesServices.getMovieVideos(id).subscribe(res => {
                if (res.results && res.results.length) {
                    this.video = res.results[0];
                    this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
                }
            });
            this._moviesServices.getSimilarMovies(id).subscribe(res => {
                this.similarMovies = res.results.slice(0, 12);
            });
        });
    }
}