import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';


@NgModule({
    imports: [MovieRoutingModule, SharedModule],
    exports: [],
    declarations: [MovieRoutingModule.components],
    providers: [],
})
export class MovieModule { }
