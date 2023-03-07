import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalErrorsComponent } from './components/global-errors/global-errors.component';
import { HeaderComponent } from './components/header/header.component';
import { InvalidFeedbackComponent } from './components/invalid-feedback/invalid-feedback.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './components/loader/loader.interceptor';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { DarkenOnHoverDirective } from './directive/darken-on-hover/darken-on-hover.directive';
import { ShowIfLoggedDirective } from './directive/show-if-logged/show-if-logged.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    InvalidFeedbackComponent,
    AlertComponent,
    ShowIfLoggedDirective,
    DarkenOnHoverDirective,
    LoaderComponent,
    OffcanvasComponent,
    GlobalErrorsComponent
  ],
  declarations: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    InvalidFeedbackComponent,
    AlertComponent,
    ShowIfLoggedDirective,
    DarkenOnHoverDirective,
    LoaderComponent,
    OffcanvasComponent,
    GlobalErrorsComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }]
})
export class SharedModule { }
