import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports:      [ TabsModule.forRoot(), HomeRoutingModule, SharedModule ],
  declarations: [ HomeRoutingModule.components ]
})
export class HomeModule { }