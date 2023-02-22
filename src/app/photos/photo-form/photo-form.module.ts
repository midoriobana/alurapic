import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [PhotoFormComponent],
	imports: [
		CommonModule,
		SharedModule,
		ReactiveFormsModule
	]
})
export class PhotoFormModule { }