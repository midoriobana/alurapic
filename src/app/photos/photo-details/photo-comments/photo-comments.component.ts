import { switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from '../../photo/photo.service';
import { PhotoComments } from './photo-comments';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
  @Input() allowComments: boolean
  @Input() photoId: number
  commentForm: FormGroup
  comments$: Observable<PhotoComments[]>

  constructor(
    private photoService: PhotoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comment: ['', Validators.maxLength(300)]
    })
    this.comments$ = this.photoService.getComments(this.photoId)
  }

  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset()
      }))
  }

  get f() {
    return this.commentForm.controls
  }
}
