import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieItemComponent } from './movie-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ MovieItemComponent ],
  declarations: [ MovieItemComponent ]
})
export class MovieItemModule { }