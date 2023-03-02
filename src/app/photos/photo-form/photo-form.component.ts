import { AlertService } from './../../shared/components/alert/alert.service';
import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html'
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup
  file: File
  preview: string

  

  constructor(private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
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
    this.photoService.upload(description, allowComments, this.file)
    .subscribe(() => {
      this.alertService.success('Upload concluído')
      this.router.navigate([''])
    })
  }

  handleFile(file: File) {

    this.file = file
    const reader = new FileReader()
    reader.onload = (event: any) => this.preview = event.target.result
    reader.readAsDataURL(file)


  }
}
