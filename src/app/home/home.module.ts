import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFeedbackModule } from '../shared/components/invalid-feedback/invalid-feedback.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InvalidFeedbackModule
  ]
})
export class HomeModule { }
