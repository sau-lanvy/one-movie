import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ActorRoutingModule } from './actor-routing.module';


@NgModule({
    imports: [ActorRoutingModule, SharedModule],
    exports: [],
    declarations: [ActorRoutingModule.components],
    providers: []
})
export class ActorModule { }