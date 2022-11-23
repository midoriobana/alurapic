import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidFeedbackComponent } from './invalid-feedback.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [InvalidFeedbackComponent],
  exports: [InvalidFeedbackComponent]
})
export class InvalidFeedbackModule { }
