import { AlertService } from './../../shared/components/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from './../photo/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>
  photoId: any

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params['photoId']
    this.photo$ = this.photoService.findById(this.photoId)
    this.photo$.subscribe(() => {}, err => { 
      this.router.navigate(['not-found'])
    })
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(() => {
      this.alertService.success('Foto removida com sucesso')
      this.router.navigate([''])
    }, err => {
      this.alertService.danger('Aconteceu um erro ao deletar a foto')
    })
  }
}
