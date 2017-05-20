import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social-link/social-link.component';

import { MoviesService } from './services/movies.service';

@NgModule({
  imports: [ BsDropdownModule.forRoot(), CommonModule, RouterModule, HttpModule, JsonpModule],
  exports: [ NavbarComponent, FooterComponent, SocialComponent ],
  declarations: [ NavbarComponent, FooterComponent, SocialComponent ],
  providers:[MoviesService]
})
export class CoreModule {

}