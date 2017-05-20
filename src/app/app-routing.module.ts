import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  { path: 'movies', loadChildren: 'app/movies/movie.module#MovieModule'},
  { path: 'actors/:id', loadChildren: 'app/actors/actor.module#ActorModule'},
  { path: 'genres/:name/:id', loadChildren: 'app/genres/genre.module#GenreModule'},
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

// tslint:disable-next-line:eofline
}