import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
	imports: [
		PhotoModule, 
		PhotoFormModule,
		PhotoListModule, 
		SharedModule
	]
})
export class PhotosModule { }