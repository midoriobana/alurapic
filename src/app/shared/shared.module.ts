import { UtilitariosService } from './providers/utilitarios.service';
import { DarkenOnHoverDirective } from './directive/darken-on-hover/darken-on-hover.directive';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { LoaderInterceptor } from './components/loader/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { ShowIfLoggedDirective } from './directive/show-if-logged/show-if-logged.directive';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { InvalidFeedbackComponent } from './components/invalid-feedback/invalid-feedback.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
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
    InvalidFeedbackComponent,
    AlertComponent,
    ShowIfLoggedDirective,
    DarkenOnHoverDirective,
    LoaderComponent,
    OffcanvasComponent
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
    OffcanvasComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }]
})
export class SharedModule { }
