import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {

  loading$: Observable<string>

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loading$ = this.loaderService.getLoading()
    .pipe(map(loadingType => loadingType.valueOf()))
  }

}
