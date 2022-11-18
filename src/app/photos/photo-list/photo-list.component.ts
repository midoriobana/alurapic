import { PhotoService } from './../photo/photo.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

import { Photo } from './../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit, OnDestroy {

  hasMore: boolean = true
  photos: Photo[] = []
  filter: string = ''
  debounce: Subject<string> = new Subject<string>()
  currentPage: number = 1
  userName: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName']
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

  load(){
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => this.photos.concat(photos))
    if(!this.photos.length)
      this.hasMore = false
  }
}
