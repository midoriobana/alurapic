import { PhotoListComponent } from './../photo/photo-list/photo-list.component';
import { NgModule } from "@angular/core";

import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent, PhotoFormComponent ],
    imports: [ HttpClientModule, CommonModule]
})
export class PhotosModule {}