import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent, 
        FilterByDescriptionPipe 
    ],
    imports: [ 
        HttpClientModule,
        CommonModule 
    ]
})
export class PhotosModule {}