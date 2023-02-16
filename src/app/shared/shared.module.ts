import { CardComponent } from './components/card/card.component';
import { InvalidFeedbackComponent } from './components/invalid-feedback/invalid-feedback.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    InvalidFeedbackComponent
  ],
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    InvalidFeedbackComponent
  ]
})
export class SharedModule { }
