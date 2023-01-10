import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent], 
  declarations: [HeaderComponent]
})
export class HeaderModule { }
