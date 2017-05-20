import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GenreRoutingModule } from './genre-routing.module';

@NgModule({
    imports: [GenreRoutingModule, SharedModule],
    exports: [],
    declarations: [GenreRoutingModule.components],
    providers: [],
})
export class GenreModule { }
