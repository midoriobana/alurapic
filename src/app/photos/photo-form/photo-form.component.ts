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

  constructor(private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
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
    .subscribe(() => this.router.navigate(['']))
  }
}
