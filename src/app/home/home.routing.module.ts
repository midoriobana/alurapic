import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/auth/login.guard';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SigninComponent,
        canActivate: [LoginGuard]
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  },
]

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class HomeRoutingModule { }

