import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
  declarations: [
    DarkenOnHoverDirective
  ],
  exports: [DarkenOnHoverDirective]
})
export class DarkenOnHoverModule { }
