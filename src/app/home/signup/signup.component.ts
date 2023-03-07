import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators, userNamePasswordValidator } from 'src/app/shared/commons/CustomValidators';
import { NewUser } from './NewUser';
import { SignupService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  selector: 'app-signup',
  providers: [UserNotTakenValidatorService],
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
    this.signupForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email, CustomValidators.validadorEmail])],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: ['', Validators.compose([Validators.required, CustomValidators.lowerCaseValidator, Validators.minLength(2), Validators.maxLength(30)]), this.userNotTakenValidatorService.checkUserNameTaken()],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    }, {validator: userNamePasswordValidator})
  }

  get f() {
    return this.signupForm.controls
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser
    if (this.signupForm.valid && !this.signupForm.pending) {
      this.signupService
        .signup(newUser)
        .subscribe(() => this.router.navigate(['']),
          err => console.log(err))
    } else this.signupForm.markAllAsTouched()
  }
}
