import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './containers/movie.component';
import { MovieDetailsComponent } from './containers/movie-details/movie-details.component';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieSimilarComponent } from './components/movie-similar/movie-similar.component';

const routes: Routes = [
  {
    path: '', component: MovieComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent },
      { path: 'list/:type', component: MovieListComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
    static components = [ MovieComponent, MovieDetailsComponent, MovieListComponent, 
                          MovieCardComponent, MovieSimilarComponent];
}