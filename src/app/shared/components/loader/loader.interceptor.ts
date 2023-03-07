import { tap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor{

constructor(
  private loaderService: LoaderService
) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      if(event instanceof HttpResponse) this.loaderService.stop()
      else this.loaderService.start()
    }))
  }

}
