import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule
  ],
  declarations: [PhotoDetailsComponent],
  exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }
