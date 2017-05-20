import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorComponent } from './actor.component';

const routes: Routes = [
  { path: '', component: ActorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule {
    static components = [ ActorComponent ];
 }