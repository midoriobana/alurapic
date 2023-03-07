import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RequestInterceptor } from './auth/request.interceptor';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
