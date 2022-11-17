import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

import { Photo } from './../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []
  filter: string = ''
  debounce: Subject<string> = new Subject<string>()

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos']
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter)
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }
}
