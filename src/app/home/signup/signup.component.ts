import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { NewUser } from './NewUser';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'src/app/shared/commons/CustomValidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup

  constructor(private fb: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const fn = this.userNotTakenValidatorService.checkUserNameTaken()
    this.signupForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email, CustomValidators.validadorEmail])],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: ['', Validators.compose([Validators.required, CustomValidators.lowerCaseValidator, Validators.minLength(2), Validators.maxLength(30)]), this.userNotTakenValidatorService.checkUserNameTaken()],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    })
  }

  get f() {
    return this.signupForm.controls
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser
    this.signupService
    .signup(newUser)
    .subscribe(()=> this.router.navigate(['']),
    err => console.log(err))
  }

}
