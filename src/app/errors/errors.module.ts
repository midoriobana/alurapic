import { UtilitariosService } from './../shared/providers/utilitarios.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NotFoundComponent],
  providers: [{
    provide: ErrorHandler,
    useClass: UtilitariosService
  }]
})
export class ErrorsModule { }
