import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>
  photoId: string

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params['photoId']
    this.photo$ = this.photoService.findById(this.photoId)
  }
}
