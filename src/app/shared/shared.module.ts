import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieItemModule } from './components/movie-item/movie-item.module';
import { PaginationModule } from './components/pagination/pagination.module';

@NgModule({
  imports: [CommonModule, MovieItemModule, PaginationModule ],
  exports: [ MovieItemModule, PaginationModule,
             CommonModule, FormsModule, HttpModule ]
})
export class SharedModule { }