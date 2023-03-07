import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  fromUrl: string
  loginForm: FormGroup
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fromUrl = params['fromUrl']
    })
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls
  }

  login() {
    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value
    if (this.loginForm.valid && !this.loginForm.pending) {
      this.authService.authenticate(userName, password)
        .subscribe(
          () => {
            this.fromUrl ? this.router.navigateByUrl(this.fromUrl) : this.router.navigate(['user', userName])
          },
          err => {
            this.loginForm.reset()
            this.platformDetectorService.isPlatformBrowser() &&
              setTimeout(() => {
                this.userNameInput.nativeElement.focus()
              }, 1000)
            alert(err.error.message)
          }
        )
    } else this.loginForm.markAllAsTouched()
  }
}
