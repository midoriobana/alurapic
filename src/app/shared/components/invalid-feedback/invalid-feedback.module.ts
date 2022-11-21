import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidFeedbackComponent } from './invalid-feedback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvalidFeedbackComponent],
  exports: [InvalidFeedbackComponent]
})
export class InvalidFeedbackModule { }
