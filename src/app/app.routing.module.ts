import { SigninComponent } from './home/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignupComponent } from './home/signup/signup.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolverService } from './photos/photo-list/photo-list-resolver.service';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: SigninComponent,
			},
			{
				path: 'signup',
				component: SignupComponent,
			},
		]
	},
	{
		path: 'user/:userName',
		component: PhotoListComponent,
		resolve: {
			photos: PhotoListResolverService
		}
	},
	{
		path: 'user/:userName', component: PhotoListComponent,
		resolve: {
			photos: PhotoListResolverService
		}
	},
	{ path: 'p/add', component: PhotoFormComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

