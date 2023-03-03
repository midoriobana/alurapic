import { LoaderType } from './loader.enum';
import { Injectable } from '@angular/core';
import { startWith, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadingSubject = new Subject<LoaderType>()

  getLoading() {
    return this.loadingSubject.asObservable().pipe(startWith(LoaderType.STOPPED))
  }

  start() {
    this.loadingSubject.next(LoaderType.LOADING)
  }

  stop() {
    this.loadingSubject.next(LoaderType.STOPPED)
  }
}