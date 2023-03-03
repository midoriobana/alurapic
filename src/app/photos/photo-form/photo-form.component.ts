import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html'
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup
  file: File
  preview: string
  percentDone: number = 0



  constructor(private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  get f() {
    return this.photoForm.controls
  }

  upload() {
    const description = this.photoForm.get('description').value
    const allowComments = this.photoForm.get('allowComments').value
    this.photoService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() =>
        this.router.navigate(['/user', this.userService.getUserName()])
      ))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total)
        } else if (event instanceof HttpResponse) {
          this.alertService.success('Upload concluído')
          this.router.navigate(['/user', this.userService.getUserName()])
        }
      },
        err => this.alertService.danger('Ocorreu um erro ao fazer upload!'))

  }

  handleFile(file: File) {

    this.file = file
    const reader = new FileReader()
    reader.onload = (event: any) => this.preview = event.target.result
    reader.readAsDataURL(file)


  }
}
