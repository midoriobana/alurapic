import { NgModule } from "@angular/core";


import { HttpClientModule } from "@angular/common/http";
import { PhotoComponent } from "./photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent ],
    imports: [ HttpClientModule ]
})
export class PhotosModule {}